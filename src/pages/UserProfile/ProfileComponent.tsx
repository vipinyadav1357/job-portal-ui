import React, { useState } from 'react'
import CertificationCard from './Cards/CertificationCard'
import { ActionIcon, Divider, Textarea } from '@mantine/core'
import { IconBriefcase2Filled, IconPointFilled, IconMapPin, IconPencil, IconDeviceFloppy, IconPlus } from '@tabler/icons-react'
import ExperienceCard from './Cards/ExperienceCard'
import SelectInput from './SelectInput/SelectInput'
import fields from '../../Data/Profile'
import TagsInput from './SelectInput/TagsInput'
import { profile } from '../../Data/TalentData'
import ExpInput from './Cards/ExpInput'
import CertiInput from './Cards/CertiInput'

const ProfileComponent = ({ props }: any) => {
    const [edit, setEdit] = useState([false, false, false, false, false]);
    const [about, setAbout] = useState(props.about);
    const [addexp, setAddExp] = useState(false);
    const [addcerti, setAddCerti] = useState(false);

    const handleEdit = (index: number) => {
        const newEdit = [...edit];
        newEdit[index] = !newEdit[index];
        setEdit(newEdit);
    }
    const updateSkills = (skill: string) => {
        let updatedSkills = [...props.skills];
        if (!profile.skills.includes(skill)) {
            updatedSkills.push(skill);
        }
        profile.skills = updatedSkills;
    }
    const handleDelete = (skill: string) => {
        let updatedSkills = [...props.skills];
        updatedSkills = updatedSkills.filter((item) => item !== skill);
        profile.skills = updatedSkills;
    }
    return (
        <div className='w-4/5 mx-auto'>
            <div className='relative'>
                <img className='rounded-t-2xl w-full h-52' src="/profile/banner.jpg" alt="" />
                <img className='rounded-full h-48 w-48 absolute -bottom-1/3 left-3 border-8 border-mine-shaft-600' src="Avatar.png" alt="" />
            </div>
            <div className='px-5 mt-20 flex flex-col gap-1'>
                <div className='text-3xl flex justify-between items-center font-semibold'>
                    {props.name}
                    <ActionIcon onClick={() => handleEdit(0)} color="brightSun.4" variant="subtle" size={40} className='bg-mine-shaft-950 hover:bg-bright-sun-400/20 transition duration-300 ease-in-out'>
                        {edit[0] ? <IconDeviceFloppy size={30} stroke={1.5} /> : <IconPencil size={30} />}
                    </ActionIcon>
                </div>
                {
                    edit[0] ?
                        <>
                            <div className='flex justify-start gap-10 items-center'>
                                <SelectInput {...fields[0]} />
                                <SelectInput {...fields[1]} />
                            </div>
                            <div className='flex justify-start gap-10 items-center'>
                                <SelectInput {...fields[2]} />
                                <div></div>
                            </div>
                        </>
                        :
                        <>
                            <div className='text-mine-shaft-200 text-xl flex items-center gap-1'><IconBriefcase2Filled /> {props.role} <IconPointFilled width={16} height={16} className='inline-block text-bright-sun-400' /> {props.company}</div>
                            <div className='text-lg flex gap-1 items-center text-mine-shaft-300'>
                                <IconMapPin stroke={1.5} />{props.location}
                            </div>
                        </>
                }

            </div>
            <Divider size={"xs"} my="xl" color='brightSun.4' />
            <div>
                <div className='font-semibold text-2xl mb-3 flex justify-between items-center pr-5'>About
                    <ActionIcon onClick={() => handleEdit(1)} color="brightSun.4" variant="subtle" size={40} className='bg-mine-shaft-950 hover:bg-bright-sun-400/20 transition duration-300 ease-in-out'>
                        {edit[1] ? <IconDeviceFloppy size={30} stroke={1.5} /> : <IconPencil size={30} />}
                    </ActionIcon>
                </div>
                {
                    edit[1] ?

                        <Textarea autosize minRows={2} variant='filled' value={about} onChange={(event) => setAbout(event.currentTarget.value)} className='[&_*]:border-bright-sun-400' />

                        :
                        <div className=' text-mine-shaft-300 text-sm text-justify px-5'>
                            {about}
                        </div>
                }

            </div>
            <Divider size={"xs"} my="xl" color='brightSun.4' />

            <div>
                <div className='font-semibold text-2xl mb-3 flex justify-between items-center pr-5'>skills
                    <ActionIcon onClick={() => handleEdit(2)} color="brightSun.4" variant="subtle" size={40} className='bg-mine-shaft-950 hover:bg-bright-sun-400/20 transition duration-300 ease-in-out'>
                        {edit[2] ? <IconDeviceFloppy size={30} stroke={1.5} /> : <IconPencil size={30} />}
                    </ActionIcon>
                </div>
                {
                    edit[2] ?
                        <TagsInput {...props} updateSkill={updateSkills} handleDelete={handleDelete} />
                        :
                        <div className='flex flex-wrap gap-2 px-10'>
                            {
                                props
                                    .skills
                                    .map((skill: any, index: any) =>
                                        <div key={index} className='bg-bright-sun-300 font-medium bg-opacity-15 rounded-3xl text-bright-sun-400 px-3 py-1 text-center'>{skill}</div>
                                    )}
                        </div>
                }

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
                    {props
                        .experience
                        .map((exp: any, index: any) =>
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
                    {props
                        .certifications
                        .map((cert: any, index: any) =>
                            <CertificationCard key={index} props={cert} edit={edit[4]} />
                        )}
                    {addcerti && <CertiInput setAddCerti={setAddCerti} />}
                </div>
            </div>
        </div>
    )
}

export default ProfileComponent
