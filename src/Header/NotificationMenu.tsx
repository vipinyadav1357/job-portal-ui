import { Menu, Avatar, Indicator, Notification, Stack } from '@mantine/core'
import { IconUserCircle, IconMessageCircle, IconFileText, IconBell } from '@tabler/icons'
import { IconCheck } from '@tabler/icons-react'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { getNotifications } from '../services/NotificationService'

const NotificationMenu = () => {
    const [opened, setOpened] = useState(false);
    const userProfile = useSelector((state: any) => state.profile);
    const [notifications, setNotifications] = useState<any[]>([]);
    useEffect(() => {
        if (userProfile.id) {
            getNotifications(userProfile.id)
                .then((res) => { setNotifications(res); console.log("Notifications fetched successfully:", res); })
                .catch((err) => console.error("Error fetching notifications:", err));
        }
    }, [userProfile])
    const readIndex = (index: number) => {
        return () => {
            setNotifications((prev) => {
                let newNotifications = [...prev];
                newNotifications = newNotifications.filter((noti: any, i: any) => i !== index);
                console.log("New notifications after filtering:", newNotifications);
                return newNotifications;
            });
        };
    };
    return (
        <Menu shadow="md" width={400} opened={opened} onChange={setOpened}>
            <Menu.Target>
                <div className="bg-mine-shaft-900 p-2 rounded-full ">
                    <Indicator color="brightSun.4" processing size={9} offset={3}>
                        <IconBell stroke={1.25} />
                    </Indicator>
                </div>
            </Menu.Target>

            <Menu.Dropdown onChange={() => setOpened(true)}>
                <Menu.Item className='text-bright-sun-300 text-lg tracking-widest' icon={<IconMessageCircle size={24} className='text-bright-sun-300' />}>Notifications</Menu.Item>
                <Stack className='' sx={(theme) => ({ backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0], height: 300, alignItems: 'strech', })} >
                    <div className='flex flex-col gap-1'>
                        {notifications ? notifications.map((notification: any, index: number) => (
                            <Notification onClose={readIndex(index)} key={notification.id} className='hover:bg-mine-shaft-900 cursor-pointer' icon={<IconCheck size={18} />} color="brightSun.4" title={notification.action}>
                                {notification.msg}
                            </Notification>
                        ))
                            : <Notification key={1} className='hover:bg-mine-shaft-900 cursor-pointer' icon={<IconCheck size={18} />} color="brightSun.4" title="Teal notification">
                                This is teal notification with icon
                            </Notification>
                        }
                    </div>
                </Stack>
            </Menu.Dropdown>
        </Menu>
    )
}

export default NotificationMenu
