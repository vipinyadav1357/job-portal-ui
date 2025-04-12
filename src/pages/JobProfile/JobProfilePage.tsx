import { Button, Divider } from '@mantine/core'
import { IconArrowBackUp } from '@tabler/icons-react'
import React from 'react'
import { Link } from 'react-router-dom'
import RecommandedTalent from '../TalentProfile/RecommandedTalent'
import TalentProfile from '../TalentProfile/TalentProfile'
import { profile } from '../../Data/TalentData'

const JobProfilePage = () => {
    return (
        <div className="min-h-[100vh] text-mine-shaft-100 bg-mine-shaft-950 font-['poppins'] pt-16 " >
            <Link to="/find-jobs" className='inline-block mx-5'><Button variant='light' color='brightSun.4' leftIcon={<IconArrowBackUp className='' />} >go Back</Button></Link>
            <Divider size={"xs"} my="md" color='brightSun.4' />
            <div className='flex gap-5'>
                <TalentProfile props={profile} />
                <RecommandedTalent />
            </div>
        </div>
    )
}

export default JobProfilePage
