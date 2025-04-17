import { Button, Divider } from '@mantine/core'
import { IconArrowBackUp } from '@tabler/icons-react'
import React from 'react'
import { Link } from 'react-router-dom'
import JobProfile from './JobProfile'
import { jobList } from '../../Data/JobsData'
import RecommandedJobs from './RecommandedJobs'

const JobProfilePage = () => {
    return (
        <div className="min-h-[100vh] text-mine-shaft-100 bg-mine-shaft-950 font-['poppins'] pt-16 " >
            <Link to="/find-jobs" className='inline-block mx-5'><Button variant='light' color='brightSun.4' leftIcon={<IconArrowBackUp className='' />} >go Back</Button></Link>
            <Divider size={"xs"} my="md" color='brightSun.4' />
            <div className='flex gap-5'>
                <JobProfile {...jobList[0]} />
                <RecommandedJobs />
            </div>
        </div>
    )
}

export default JobProfilePage
