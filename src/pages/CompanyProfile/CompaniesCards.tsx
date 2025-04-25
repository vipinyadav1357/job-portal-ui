import { ActionIcon } from '@mantine/core'
import { IconExternalLink } from '@tabler/icons-react'
import React from 'react'

const CompaniesCards = (props: any) => {
    return (
        <div className='bg-mine-shaft-900 p-4 rounded-xl w-80'>
            <div className='flex items-center justify-between'>
                <div className='flex gap-3'>
                    <div className='p-2 bg-mine-shaft-800 rounded-md'>
                        <img className='h-8' src={`/Companies/${props.name}.png`} alt="hi" />
                    </div>
                    <div>
                        <div className=' font-semibold tracking-wide'>{props.name}</div>
                        <div className='text-sm text-bright-sun-400 underline '>{props.employees} employees</div>
                    </div>
                </div>
                <ActionIcon className='h-fit w-fit' color="brightSun.4" variant="transparent" >
                    <a href={`http://${props.name}.com`} target='_blanks'><IconExternalLink /></a>
                </ActionIcon>
            </div>
        </div>
    )
}

export default CompaniesCards
