import React, { useEffect, useState } from 'react'
import { Button, Divider } from '@mantine/core'
import { Link } from 'react-router-dom'
import { IconArrowBackUp } from '@tabler/icons-react'
import TalentProfile from './TalentProfile'
import { profile } from '../../Data/TalentData'
import RecommandedTalent from './RecommandedTalent'
import { getProfile } from '../../services/ProfileService'
import { useDispatch } from 'react-redux'
import { setProfile } from '../../slices/ProfileSlice'
const TalentProfilePage = () => {
    const [profile, setProfile] = useState<any>({})
    useEffect(() => {
        window.scroll(0, 0);
    })
    useEffect(() => {
        getProfile("1").then((res) => {
            if (res) {
                console.log("Profile fetched successfully:", res);
                // dispatch({ type: 'SET_PROFILE', payload: res });
                setProfile(res)
            }
        }
        ).catch((err) => {
            console.error("Error fetching profile:", err);
        });
    }, []);
    return (
        <div className="min-h-[100vh] text-mine-shaft-100 bg-mine-shaft-950 font-['poppins'] pt-16 " >
            <Link to="/find-talent" className='inline-block mx-5'><Button variant='light' color='brightSun.4' leftIcon={<IconArrowBackUp className='' />} >go Back</Button></Link>
            <Divider size={"xs"} my="md" color='brightSun.4' />
            <div className='flex  gap-5'>
                <TalentProfile props={profile} />
                <RecommandedTalent props={profile} />
            </div>
        </div>
    )
}

export default TalentProfilePage
