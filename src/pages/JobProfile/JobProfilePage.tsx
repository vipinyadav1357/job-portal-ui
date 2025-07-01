import { Button, Divider } from '@mantine/core'
import { IconArrowBackUp } from '@tabler/icons-react'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import JobProfile from './JobProfile'
import RecommandedJobs from './RecommandedJobs'
import { getJobById } from '../../services/JobService'

const JobProfilePage = () => {
    const { id } = useParams();
    const [job, setJob] = useState<any>(null);

    useEffect(() => {
        window.scroll(0, 0);
        getJobById(id)
            .then(res => setJob(res))
            .catch((e) => console.log(e))
    }, [id])
    return (
        <div className="min-h-[100vh] text-mine-shaft-100 bg-mine-shaft-950 font-['poppins'] pt-16 " >
            <Link to="/find-jobs" className='inline-block mx-5'><Button variant='light' color='brightSun.4' leftIcon={<IconArrowBackUp className='' />} >go Back</Button></Link>
            <Divider size={"xs"} my="md" color='brightSun.4' />
            <div className='flex gap-5'>
                <JobProfile job={job} edit={false} />
                <RecommandedJobs />
            </div>
        </div>
    )
}

export default JobProfilePage
