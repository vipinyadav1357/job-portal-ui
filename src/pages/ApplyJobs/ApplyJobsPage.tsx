import { Button, Divider } from '@mantine/core'
import { IconArrowBackUp } from '@tabler/icons'
import React from 'react'
import { Link } from 'react-router-dom'

const ApplyJobsPage = () => {
    return (
        <div className="min-h-[100vh] text-mine-shaft-100 bg-mine-shaft-950 font-['poppins'] pt-16 " >
            <Link to="/job-profile" className='inline-block mx-5'><Button variant='light' color='brightSun.4' leftIcon={<IconArrowBackUp className='' />} >go Back</Button></Link>
            <Divider size={"xs"} my="md" color='brightSun.4' />
            <div className='flex gap-5'>
            </div>
        </div>
    )
}

export default ApplyJobsPage
