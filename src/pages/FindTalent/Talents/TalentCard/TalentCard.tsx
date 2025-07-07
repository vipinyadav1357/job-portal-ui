import { IconCalendar, IconCalendarMonth, IconCurrencyRupee, IconHeart, IconMapPin, IconPointFilled } from '@tabler/icons-react'
import React, { useEffect, useState } from 'react'
import { Avatar, Button, Divider, Modal, Text } from '@mantine/core'
import { Calendar, TimeInput } from '@mantine/dates'
import { Link } from 'react-router-dom'
import { getProfile } from '../../../../services/ProfileService'

interface applicants {
    applicantId: number;
    name: string;
    email: string;
    contactNumber: string;
    portfolioLink: string;
    resume: string; // usually base64 or file URL in frontend
    coverLetter: string;
    appliedTime: string; // ISO date-time, or Date if you parse it
    interViewTime: string | null; // same here, or Date | null
    applicationStatus: 'APPLIED' | 'INTERVIEWING' | 'OFFERED' | 'REJECTED'; // use all your enum values
}
interface talent {
    name: string;
    role: string;
    company: string;
    topSkills: string[];
    about: string;
    expectedCtc: string;
    location: string;
    image: string;
}

interface talentData {
    talent?: talent,
    applicants?: applicants,
    posted?: boolean,
    invite?: boolean
}
const TalentCard: React.FC<talentData> = ({ talent, applicants, posted, invite }) => {
    const [opened, setOpened] = useState(false);
    const [date, setDate] = useState<Date | null>(null);
    const [time, setTime] = useState(new Date());
    const [profile, setProfile] = useState<any>({})
    useEffect(() => {
        if (applicants?.applicantId) {
            getProfile(applicants.applicantId.toString()).then((res) => {
                setProfile(res);
            })
        } else {
            setProfile(talent)
        }
    }, [talent, applicants, posted, invite])
    return (
        <div className='cursor-pointer bg-mine-shaft-900 w-96 p-4 rounded-xl flex flex-col gap-3 hover:shadow-[0_0_15px_5px_rgba(255,223,0,0.5)] !hover:shadow-bright-sun-400 transition-all duration-500 ease-in-out'>
            <div className='flex justify-between'>
                <div className='flex items-center gap-2'>
                    <div className='p-1 bg-mine-shaft-700 rounded-full'>
                        <Avatar className='' size={'lg'} radius='xl'
                            src={profile.profilePicture ? `data:image/jpeg;base64,${profile.profilePicture}` : `Avatar.png`}
                            alt="hi" />
                    </div>
                    <div className='flex flex-col gap-1'>
                        <div className=' font-semibold text-lg tracking-wide'>
                            {profile?.name}
                        </div>
                        <div className='text-xs text-mine-shaft-300'>
                            {profile.jobTitle}
                            <IconPointFilled width={16} height={16} className='inline-block text-bright-sun-400' />
                            {profile.company}
                        </div>
                    </div>
                </div>
                <IconHeart className='text-red-500 hover:fill-red-500 hover:stroke-red-500 transition-all duration-200' stroke={1.5} />
            </div>
            <div className='flex flex-wrap gap-2 items-center justify-start [&>div]:!px-2 [&>div]:!py-1 [&>div]:!bg-mine-shaft-800 [&>div]:!text-bright-sun-700 [&>div]:!rounded-lg [&>div]:!text-xs [&>div]:!font-semibold [&>div:hover]:!bg-bright-sun-500 [&>div:hover]:!text-mine-shaft-900'>
                {
                    profile?.skills?.map
                        ((skills: any, index: any) => {
                            if (index < 6) {
                                return <div key={index}>{skills}</div>
                            } else if (index === 6) {
                                return <div key={index}> and more...</div>
                            }
                            return ''
                        }
                        )}
            </div>
            <Text lineClamp={3} className='text-justify leading-4 text-xs text-mine-shaft-300'>
                {profile?.about}
            </Text>
            <Divider mr="xs" color='mine-shaft-700' />
            {
                invite
                    ?
                    <div className='flex justify-between text-sm text-mine-shaft-400 items-center'>
                        <IconCalendarMonth />
                        Interview scheduled on
                        <span className='text-bright-sun-400'>
                            {date?.toLocaleDateString()}</span>
                        at
                        <span className='text-bright-sun-400'>{time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
                    </div>
                    :
                    <div className='flex justify-between text-xs text-mine-shaft-400 items-center'>
                        <div className='text-mine-shaft-200 font-semibold text-sm [text-shadow:_0px_0px_2px_#b0b0b0,_-0px_0px_2px_#b0b0b0,_-0px_0px_2px_#b0b0b0,_0px_-0px_2px_#b0b0b0]'>
                            <IconCurrencyRupee className='inline-block' width={16} height={16} stroke={3} />
                            15 lpa</div>
                        <div className='flex items-center gap-1'>
                            <IconMapPin className='inline-block text-bright-sun-400' stroke={1.5} />
                            {profile.location}                        </div>
                    </div>
            }

            <Divider mr="xs" color='mine-shaft-700' />
            <div className='flex [&>*]:w-1/2 [&>*]:p-1 items-center'>
                {!invite && <>
                    <Link to="/talent-profile"><Button variant='light' color='brightSun.4' fullWidth>go to profile</Button></Link>
                    <div>
                        {posted ?
                            <Button onClick={() => setOpened(true)} leftIcon={<IconCalendar />} variant='outline' color='brightSun.4' fullWidth>schedule</Button>
                            :
                            <Button variant='outline' color='brightSun.4' fullWidth>message</Button>
                        }
                    </div>
                </>
                }
                {
                    invite && <>
                        <Button variant='light' color='brightSun.4' fullWidth>Accept</Button>
                        <Button variant='outline' color='brightSun.4' fullWidth>Reject</Button>
                    </>
                }
            </div>
            <Modal
                opened={opened}
                title="Choose a date and time"
                onClose={() => setOpened(false)}
                overlayOpacity={0.25}
                overlayBlur={1}
                centered
                overlayColor="#c5c5c5"
                size="xs"

            >
                {/* <DatePicker placeholder="Pick date" label="Event date" withAsterisk onChange={setValue} value={value} /> */}
                <Calendar value={date} onChange={setDate} onClick={() => { setOpened(false) }} minDate={new Date()} maxDate={new Date(new Date().setDate(new Date().getDate() + 15))} />
                <TimeInput value={time} onChange={setTime} format='12' label='choose time' />
            </Modal>
        </div>
    )
}

export default TalentCard
