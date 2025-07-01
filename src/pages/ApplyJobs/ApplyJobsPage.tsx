import { Button, Divider } from '@mantine/core'
import { IconArrowBackUp } from '@tabler/icons'
import React, { useEffect, useState } from 'react'
import { Link, Navigate, useNavigate, useParams } from 'react-router-dom';
import ApplyJobComponent from './ApplyJobComponent'
import { jobList } from '../../Data/JobsData'
import { getJobById } from '../../services/JobService';

const ApplyJobsPage = () => {
    const navigate = useNavigate();

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
            {/* <Link to="/job-profile" className='inline-block mx-5'>
                <Button variant='light' color='brightSun.4' leftIcon={<IconArrowBackUp className='' />} >
                    go Back
                </Button>
            </Link> */}
            {/* link in now this button */}
            <Button variant='light' color='brightSun.4' leftIcon={<IconArrowBackUp className='' />} onClick={() => navigate(-1)}>
                go Back
            </Button>
            <Divider size={"xs"} my="md" color='brightSun.4' />
            <div className=''>
                <ApplyJobComponent {...job} />
            </div>
        </div>
    )
}
export default ApplyJobsPage
