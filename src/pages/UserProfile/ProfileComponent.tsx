import React, { useEffect, useState } from 'react'
import CertificationCard from './Cards/CertificationCard'
import { ActionIcon, Divider, Textarea } from '@mantine/core'
import { IconPencil, IconDeviceFloppy, IconPlus } from '@tabler/icons-react'
import ExperienceCard from './Cards/ExperienceCard'
import TagsInput from './SelectInput/TagsInput'
import { profile } from '../../Data/TalentData'
import ExpInput from './Cards/ExpInput'
import CertiInput from './Cards/CertiInput'
import { useDispatch, useSelector } from 'react-redux'
import { getProfile } from '../../services/ProfileService'
import Info from './Sections/Info'
import { setProfile } from '../../slices/ProfileSlice'
import About from './Sections/About'
import Skills from './Sections/Skills'

const ProfileComponent = ({ props }: any) => {
    const dispatch = useDispatch();
    const [edit, setEdit] = useState([false, false, false, false, false]);
    const [addexp, setAddExp] = useState(false);
    const [addcerti, setAddCerti] = useState(false);
    const userProfile = useSelector((state: any) => state.profile);
    const user = useSelector((state: any) => state.user);

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

    const handleEdit = (index: number) => {
        const newEdit = [...edit];
        newEdit[index] = !newEdit[index];
        setEdit(newEdit);
    }
    return (
        <div className='w-4/5 mx-auto'>
            <div className='relative'>
                <img className='rounded-t-2xl w-full h-52' src="/profile/banner.jpg" alt="" />
                <img className='rounded-full h-48 w-48 absolute -bottom-1/3 left-3 border-8 border-mine-shaft-600' src="Avatar.png" alt="" />
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
                <div className='font-semibold text-2xl mb-5 flex justify-between items-center pr-5'>experience
                    <div className='flex gap-5'>
                        <ActionIcon onClick={() => setAddExp(!addexp)} color="brightSun.4" variant="subtle" size={40} className='bg-mine-shaft-950 hover:bg-bright-sun-400/20 transition duration-300 ease-in-out'>
                            {<IconPlus size={30} />}
                        </ActionIcon>

                        <ActionIcon onClick={() => handleEdit(3)} color="brightSun.4" variant="subtle" size={40} className='bg-mine-shaft-950 hover:bg-bright-sun-400/20 transition duration-300 ease-in-out'>
                            {edit[3] ? <IconDeviceFloppy size={30} stroke={1.5} /> : <IconPencil size={30} />}
                        </ActionIcon>
                    </div>
                </div>
                <div className='flex flex-col gap-5 px-5'>
                    {userProfile
                        ?.experience
                        ?.map((exp: any, index: any) =>
                            <ExperienceCard key={index} props={exp} edit={edit[3] ? true : false} />
                        )}
                    {addexp && <ExpInput setEditexp={setAddExp} add />}
                </div>
            </div>
            <Divider size={"xs"} my="xl" color='brightSun.4' />
            <div>
                <div className='font-semibold text-2xl mb-5 flex justify-between items-center pr-5'>Certification
                    <div className='flex gap-5'>
                        <ActionIcon onClick={() => setAddCerti(!addcerti)} color="brightSun.4" variant="subtle" size={40} className='bg-mine-shaft-950 hover:bg-bright-sun-400/20 transition duration-300 ease-in-out'>
                            {<IconPlus size={30} />}
                        </ActionIcon>
                        <ActionIcon onClick={() => handleEdit(4)} color="brightSun.4" variant="subtle" size={40} className='bg-mine-shaft-950 hover:bg-bright-sun-400/20 transition duration-300 ease-in-out'>
                            {edit[4] ? <IconDeviceFloppy size={30} stroke={1.5} /> : <IconPencil size={30} />}
                        </ActionIcon>
                    </div>
                </div>
                <div className='flex flex-col gap-5 px-5'>
                    {userProfile
                        ?.certifications
                        ?.map((cert: any, index: any) =>
                            <CertificationCard key={index} props={cert} edit={edit[4]} />
                        )}
                    {addcerti && <CertiInput setAddCerti={setAddCerti} />}
                </div>
            </div>
        </div>
    )
}

export default ProfileComponent
