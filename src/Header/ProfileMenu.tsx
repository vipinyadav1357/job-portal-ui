import { Menu, Avatar, Switch, useMantineTheme, Group } from '@mantine/core';
import { IconMessageCircle, IconTrash, IconArrowsLeftRight } from '@tabler/icons';
import { IconFileText, IconLogout2, IconMoon, IconMoonStars, IconSun, IconUserCircle } from '@tabler/icons-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function ProfileMenu() {
    const theme = useMantineTheme();
    const [checked, setChecked] = useState(false);
    const [opened, setOpened] = useState(false);

    return (
        <Menu shadow="md" width={200} opened={opened} onChange={setOpened}>
            <Menu.Target>
                <div className="flex gap-3 items-center cursor-pointer">
                    <Avatar className="w-10 h-10 rounded-full overflow-hidden object-cover" src="dhoni.jpg" />
                </div>
            </Menu.Target>

            <Menu.Dropdown onChange={() => setOpened(true)}>
                <Link to="/user-profile">
                    <Menu.Item icon={<IconUserCircle size={14} />}>Profile</Menu.Item>
                </Link>
                <Menu.Item icon={<IconMessageCircle size={14} />}>Messages</Menu.Item>
                <Menu.Item icon={<IconFileText size={14} />}>Resume</Menu.Item>
                <Menu.Item
                    icon={<IconMoon size={14} />}
                    rightSection={
                        <Switch
                            checked={checked}
                            onChange={(event) => setChecked(event.currentTarget.checked)}
                            size="md"
                            color={theme.colorScheme === 'dark' ? 'brightSun.4' : 'dark'}
                            onLabel={<IconSun size={16} stroke={2.5} color={theme.colors.yellow[0]} />}
                            offLabel={<IconMoonStars size={16} stroke={2.5} color={theme.colors.yellow[4]} />}
                        />

                    }
                >
                    dark mode
                </Menu.Item>

                <Menu.Divider />

                <Menu.Item color="red" icon={<IconLogout2 size={14} />}>LogOut</Menu.Item>
            </Menu.Dropdown>
        </Menu>
    );
}
export default ProfileMenu;