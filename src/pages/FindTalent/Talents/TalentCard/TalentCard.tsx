import { IconCurrencyRupee, IconHeart, IconMapPin, IconPointFilled } from '@tabler/icons-react'
import React from 'react'
import { Avatar, Button, Divider, Text } from '@mantine/core'
import { Link } from 'react-router-dom'
interface talent {
    name: string,
    role: string,
    company: string,
    topSkills: string[],
    about: string,
    expectedCtc: string,
    location: string,
    image: string
}
interface talentData {
    talentData: talent
}
const TalentCard: React.FC<talentData> = ({ talentData }) => {
    return (
        <div className='cursor-pointer bg-mine-shaft-900 w-96 p-4 rounded-xl flex flex-col gap-3 hover:shadow-[0_0_15px_5px_rgba(255,223,0,0.5)] !hover:shadow-bright-sun-400 transition-all duration-500 ease-in-out'>
            <div className='flex justify-between'>
                <div className='flex items-center gap-2'>
                    <div className='p-1 bg-mine-shaft-700 rounded-full'>
                        <Avatar className='' size={'lg'} radius='xl' src={`${talentData.image}.png`} alt="hi" />
                    </div>
                    <div className='flex flex-col gap-1'>
                        <div className=' font-semibold text-lg tracking-wide'>{talentData.name}</div>
                        <div className='text-xs text-mine-shaft-300'>{talentData.role}<IconPointFilled width={16} height={16} className='inline-block' /> {talentData.company}</div>
                    </div>
                </div>
                <IconHeart className='text-mine-shaft-300' />
            </div>
            <div className='flex gap-2 items-center justify-evenly [&>div]:!px-2 [&>div]:!py-1 [&>div]:!bg-mine-shaft-800 [&>div]:!text-bright-sun-700 [&>div]:!rounded-lg [&>div]:!text-xs [&>div]:!font-semibold [&>div:hover]:!bg-bright-sun-500 [&>div:hover]:!text-mine-shaft-900'>
                {
                    talentData.topSkills?.map
                        ((skills, index) =>
                            <div key={index}>{skills}</div>
                        )}
            </div>
            <Text lineClamp={3} className='text-justify leading-4 text-xs text-mine-shaft-300'>
                {talentData.about}
            </Text>
            <Divider mr="xs" color='mine-shaft-700' />

            <div className='flex justify-between text-xs text-mine-shaft-400 items-center'>
                <div className='text-mine-shaft-200 font-semibold text-sm [text-shadow:_0px_0px_2px_#b0b0b0,_-0px_0px_2px_#b0b0b0,_-0px_0px_2px_#b0b0b0,_0px_-0px_2px_#b0b0b0]'><IconCurrencyRupee className='inline-block' width={16} height={16} stroke={3} />{talentData.expectedCtc}</div>
                <div className='flex items-center gap-1'><IconMapPin className='inline-block text-bright-sun-400' stroke={1.5} />{talentData.location}</div>
            </div>
            <Divider mr="xs" color='mine-shaft-700' />
            <div className='flex [&>*]:w-1/2 [&>*]:p-1'>
                <Link to="/talent-profile"><Button variant='light' color='brightSun.4' fullWidth>go to profile</Button></Link>
                <div>
                    <Button variant='outline' color='brightSun.4' fullWidth>message</Button>
                </div>
            </div>
        </div>
    )
}

export default TalentCard
