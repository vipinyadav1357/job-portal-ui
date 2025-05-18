import { ActionIcon } from '@mantine/core'
import { IconMapPin, IconTrash } from '@tabler/icons-react'
import React from 'react'

const CertificationCard = ({ props, edit }: any) => {

    return (
        <div className='bg-mine-shaft-900 p-4 rounded-xl'>
            <div className='flex items-center justify-between'>
                <div className='flex items-center gap-2'>
                    <div className='p-2 bg-mine-shaft-800 rounded-md'>
                        <img className='h-10' src={`/Icons/${props.issuer}.png`} alt="hi" />
                    </div>
                    <div className='flex flex-col gap-1'>
                        <div className=' font-semibold tracking-wide'>{props.name}</div>
                        <div className='text-sm text-mine-shaft-300 flex gap-2 items-center'>
                            {props.issuer}
                            <div className='flex items-center gap-1'>
                                <IconMapPin height={16} width={16} className='text-bright-sun-400' stroke={1.5} /> {props.location}
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex gap-2 items-center'>
                    <div className='flex flex-col gap-1 items-end'>
                        <div className='text-sm text-bright-sun-400 underline '>{props.issueDate}</div>
                        <div className='text-sm text-bright-sun-400 underline '>ID: {props.certificateId}</div>
                    </div>
                    {edit && <ActionIcon color="brightSun.4" variant="subtle" size={40} className=' hover:bg-bright-sun-400/20 transition duration-300 ease-in-out'>
                        <IconTrash size={23} stroke={1.5} color='red' />
                    </ActionIcon>}
                </div>
            </div>
        </div>
    )
}

export default CertificationCard
