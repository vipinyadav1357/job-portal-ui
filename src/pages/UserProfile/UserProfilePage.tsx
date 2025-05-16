import { Divider } from '@mantine/core'
import React from 'react'
import ProfileComponent from './ProfileComponent'
import { profile } from '../../Data/TalentData'

const UserProfilePage = () => {
    return (
        <div className="min-h-[100vh] text-mine-shaft-100 bg-mine-shaft-950 font-['poppins'] pt-16 " >
            <Divider size={"xs"} mx={"md"} mb={"xl"} color='brightSun.4' />
            <ProfileComponent props={profile} />
        </div>
    )
}

export default UserProfilePage
