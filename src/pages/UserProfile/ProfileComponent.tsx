import React, { useEffect, useState } from 'react'
import { Divider, FileInput, Overlay } from '@mantine/core'
import { useDispatch, useSelector } from 'react-redux'
import { getProfile } from '../../services/ProfileService'
import Info from './Sections/Info'
import { changeProfile, setProfile } from '../../slices/ProfileSlice'
import About from './Sections/About'
import Skills from './Sections/Skills'
import Experiance from './Sections/Experiance'
import Certification from './Sections/Certification'
import { useHover } from '@mantine/hooks'
import { IconPencil } from '@tabler/icons'

const ProfileComponent = ({ props }: any) => {
    const dispatch = useDispatch();
    const { hovered, ref } = useHover();
    const userProfile = useSelector((state: any) => state.profile);

    // const user = useSelector((state: any) => state.user);
    const handleFileChange = async (image: File | null) => {
        if (!image) {
            console.log("hello");
            return
        }
        let profilePicture: any = await getBase64(image);
        let updatedProfile = { ...userProfile, profilePicture: profilePicture.split(",")[1] }
        dispatch(changeProfile(updatedProfile))
        console.log(updatedProfile);
    }
    const getBase64 = (file: File) => {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result);
            reader.onerror = (error) => reject(error);
        });
    }
    useEffect(() => {
        getProfile("1").then((res) => {
            if (res) {
                console.log("Profile fetched successfully:", res);
                // dispatch({ type: 'SET_PROFILE', payload: res });
                dispatch(setProfile(res));
            }
        }
        ).catch((err) => {
            console.error("Error fetching profile:", err);
        });
    }, []);
    return (
        <div className='w-4/5 mx-auto'>
            <div className='relative'>
                <img className='rounded-t-2xl w-full h-52' src="/profile/banner.jpg" alt="" />
                <div ref={ref} className='absolute -bottom-1/3 left-3 flex items-center justify-center'>
                    <img className='rounded-full h-36 w-36 border-8 border-mine-shaft-600 object-cover' src={userProfile.profilePicture ? `data:image/jpeg;base64,${userProfile.profilePicture}` : `Avatar.png`} alt="" />
                    {hovered && <Overlay opacity={0.25} color="#000" blur={1} className='rounded-full' />}
                    {hovered && <IconPencil stroke={2} className='absolute !w-16 cursor-pointer z-[300] text-bright-sun-400 !h-16  rounded-full p-1 ' />}
                    <FileInput className='absolute opacity-0 w-full z-[301] [&_*]:h-48 [&_*]:rounded-full' variant={'unstyled'} size='lg' radius={'xl'} accept="image/png,image/jpeg" onChange={(file) => handleFileChange(file)} />
                </div>
            </div>
            <Info />
            <Divider size={"xs"} my="xl" color='brightSun.4' />
            <div>
                <About />
            </div>
            <Divider size={"xs"} my="xl" color='brightSun.4' />

            <div>
                <Skills />
            </div>
            <Divider size={"xs"} my="xl" color='brightSun.4' />
            <div>
                <Experiance />
            </div>
            <Divider size={"xs"} my="xl" color='brightSun.4' />
            <div>
                <Certification />
            </div>
        </div>
    )
}

export default ProfileComponent
