import { Button, Divider } from '@mantine/core'
import { IconBriefcase2Filled, IconMapPin, IconPointFilled } from '@tabler/icons-react'
import React from 'react'
import ExperienceCard from './ExperienceCard'
import CertificationCard from './CertificationCard'

const TalentProfile = () => {
    return (
        <div className='w-2/3 ml-5'>
            <div className='relative'>
                <img className='rounded-t-2xl' src="/profile/banner.jpg" alt="" />
                <img className='rounded-full h-48 w-48 absolute -bottom-1/3 left-3 border-8 border-mine-shaft-600' src="Avatar.png" alt="" />
            </div>
            <div className='px-5 mt-20 flex flex-col gap-1'>
                <div className='text-3xl flex justify-between items-center font-semibold'>
                    VIPIN YADAV
                    <Button variant='outline' color='brightSun.4' >message</Button>
                </div>
                <div className='text-mine-shaft-200 text-xl flex items-center gap-1'><IconBriefcase2Filled /> Software Engineer <IconPointFilled width={16} height={16} className='inline-block text-bright-sun-400' /> Google</div>
                <div className='text-lg flex gap-1 items-center text-mine-shaft-300'>
                    <IconMapPin stroke={1.5} /> NewYork ,   USA
                </div>
            </div>
            <Divider size={"xs"} my="xl" color='brightSun.4' />
            <div>
                <div className='font-semibold text-2xl mb-3'>About</div>
                <div className=' text-mine-shaft-300 text-sm text-justify px-5'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam illum quia quibusdam expedita error nulla et ratione laboriosam? Assumenda quasi aspernatur dolore culpa deserunt explicabo earum ea, quo exercitationem sint nihil saepe eveniet, vitae, amet ratione qui. Id, harum recusandae.
                </div>
            </div>
            <Divider size={"xs"} my="xl" color='brightSun.4' />

            <div>
                <div className='font-semibold text-2xl mb-3'>skills</div>
                <div className='flex flex-wrap gap-2 px-10'>
                    <div className='bg-bright-sun-300 font-medium bg-opacity-15 rounded-3xl text-bright-sun-400 px-3 py-1 text-center'>React</div>
                </div>
            </div>
            <Divider size={"xs"} my="xl" color='brightSun.4' />
            <div>
                <div className='font-semibold text-2xl mb-5'>experience</div>
                <ExperienceCard />
            </div>
            <Divider size={"xs"} my="xl" color='brightSun.4' />
            <div>
                <div className='font-semibold text-2xl mb-5'>Certification</div>
                <CertificationCard />
            </div>
        </div>
    )
}

export default TalentProfile
