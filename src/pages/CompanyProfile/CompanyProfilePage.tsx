import { Button, Divider } from '@mantine/core'
import { IconArrowBackUp } from '@tabler/icons-react'
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import CompanyProfile from './CompanyProfile'
import { profile } from '../../Data/TalentData'
import SimilarCompanies from './SimilarCompanies'

const CompanyProfilePage = () => {
    const navigate = useNavigate();
    useEffect(() => {
        window.scroll(0, 0);
    })
    return (
        <div className="min-h-[100vh] text-mine-shaft-100 bg-mine-shaft-950 font-['poppins'] pt-16 " >
            <Button onClick={() => { navigate(-1) }} mx={"md"} variant='light' color='brightSun.4' leftIcon={<IconArrowBackUp className='' />} >go Back</Button>
            <Divider size={"xs"} my="md" color='brightSun.4' />
            <div className='flex  gap-5'>
                <CompanyProfile {...profile} />
                <SimilarCompanies />
            </div>
        </div >
    )
}

export default CompanyProfilePage
