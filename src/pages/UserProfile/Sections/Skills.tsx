import { ActionIcon } from '@mantine/core'
import { IconCheck, IconPencil, IconX } from '@tabler/icons-react'
import React, { useState } from 'react'
import TagsInput from '../SelectInput/TagsInput'
import { useDispatch, useSelector } from 'react-redux'
import { changeProfile } from '../../../slices/ProfileSlice'

const Skills = () => {
    const userProfile = useSelector((state: any) => state.profile);
    const [edit, setEdit] = useState(false);
    const [skills, setSkills] = useState<string[]>([]);
    const dispatch = useDispatch();
    const handleEdit = () => {
        if (!edit) {
            setEdit(true);
            setSkills(userProfile?.skills)
            console.log("Form submitted with values:", skills);
        } else {
            setEdit(false);
        }
    }
    const handleSave = () => {
        let updateProfile = { ...userProfile, skills }
        console.log("updated profile", updateProfile);
        dispatch(changeProfile(updateProfile));
        setSkills([]);
        setEdit(false);
    }
    const updateSkills = (skill: string) => {
        let updatedSkills = [...userProfile.skills];
        if (!userProfile.skills.includes(skill)) {
            updatedSkills.push(skill);
        }
        setSkills(updatedSkills);
    }
    const handleDelete = (skill: string) => {
        let updatedSkills = [...userProfile.skills];
        updatedSkills = updatedSkills.filter((item) => item !== skill);
        setSkills(updatedSkills);
    }
    return (
        <>
            <div className='font-semibold text-2xl mb-3 flex justify-between items-center pr-5'>skills
                <div className='flex justify-between items-center'>
                    {edit && <ActionIcon onClick={handleSave} color="green.8" variant="subtle" size={40} className='bg-mine-shaft-950 hover:bg-bright-sun-400/20 transition duration-300 ease-in-out'>
                        {edit ? <IconCheck size={30} stroke={1.5} /> : <IconPencil size={30} />}
                    </ActionIcon>}
                    <ActionIcon onClick={handleEdit} color={edit ? "red.8" : "brightSun.4"} variant="subtle" size={40} className='bg-mine-shaft-950 hover:bg-bright-sun-400/20 transition duration-300 ease-in-out'>
                        {edit ? <IconX size={30} stroke={1.5} /> : <IconPencil size={30} />}
                    </ActionIcon>
                </div>
            </div>
            {
                edit ?
                    <TagsInput {...userProfile?.skills} updateSkill={updateSkills} handleDelete={handleDelete} />
                    :
                    <div className='flex flex-wrap gap-2 px-10'>
                        {
                            userProfile
                                ?.skills
                                ?.map((skill: any, index: number) =>
                                    <div key={index} className='bg-bright-sun-300 font-medium bg-opacity-15 rounded-3xl text-bright-sun-400 px-3 py-1 text-center'>{skill}</div>
                                )}
                    </div>
            }
        </>
    )
}

export default Skills
