import { ActionIcon } from '@mantine/core'
import { IconPlus, IconPencil, IconCheck, IconX } from '@tabler/icons-react'
import React, { useState } from 'react'
import CertificationCard from '../Cards/CertificationCard'
import CertiInput from '../Cards/CertiInput'
import { useSelector } from 'react-redux'
// import { useForm } from '@mantine/form'

const Certification = () => {
    const [addcerti, setAddCerti] = useState(false);
    const [edit, setEdit] = useState(false);
    const userProfile = useSelector((state: any) => state.profile);
    // const user = useSelector((state: any) => state.user);
    const handleEdit = () => {
        if (!edit) {
            setEdit(true);
        } else {
            setEdit(false);
        }
    }
    const handleSave = () => {
        setAddCerti(false)
    }
    return (
        <>
            <div className='font-semibold text-2xl mb-5 flex justify-between items-center pr-5'>Certification
                <div className='flex gap-5'>
                    <ActionIcon onClick={() => setAddCerti(!addcerti)} color="brightSun.4" variant="subtle" size={40} className='bg-mine-shaft-950 hover:bg-bright-sun-400/20 transition duration-300 ease-in-out'>
                        {<IconPlus size={30} />}
                    </ActionIcon>
                    <div className='flex justify-between items-center'>
                        {edit && <ActionIcon onClick={handleSave} color="green.8" variant="subtle" size={40} className='bg-mine-shaft-950 hover:bg-bright-sun-400/20 transition duration-300 ease-in-out'>
                            {edit ? <IconCheck size={30} stroke={1.5} /> : <IconPencil size={30} />}
                        </ActionIcon>}
                        <ActionIcon onClick={handleEdit} color={edit ? "red.8" : "brightSun.4"} variant="subtle" size={40} className='bg-mine-shaft-950 hover:bg-bright-sun-400/20 transition duration-300 ease-in-out'>
                            {edit ? <IconX size={30} stroke={1.5} /> : <IconPencil size={30} />}
                        </ActionIcon>
                    </div>
                </div>
            </div>
            <div className='flex flex-col gap-5 px-5'>
                {userProfile
                    ?.certifications
                    ?.map((cert: any, index: any) =>
                        <CertificationCard key={index} props={cert} edit={edit} index={index} setEdit={handleEdit} />
                    )}
                {addcerti && <CertiInput setAddCerti={setAddCerti} setEdit={handleEdit} />}
            </div>
        </>
    )
}

export default Certification
