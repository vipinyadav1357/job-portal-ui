import React from 'react'
import { Button, Divider } from '@mantine/core'
import { Link } from 'react-router-dom'
import { IconArrowBackUp } from '@tabler/icons-react'
import TalentProfile from './TalentProfile'
import { profile } from '../../Data/TalentData'
import RecommandedTalent from './RecommandedTalent'
const TalentProfilePage = () => {
    return (
        <div className="min-h-[100vh] text-mine-shaft-100 bg-mine-shaft-950 font-['poppins'] pt-16 " >
            <Divider size={"xs"} mx="md" />
            <Link to="/find-talent" className='inline-block m-5'><Button variant='light' color='brightSun.4' leftIcon={<IconArrowBackUp className='' />} >go Back</Button></Link>
            <div className='flex gap-5'>
                <TalentProfile props={profile} />
                <RecommandedTalent />
            </div>
        </div>
    )
}

export default TalentProfilePage
