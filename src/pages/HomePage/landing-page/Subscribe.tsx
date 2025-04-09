import { Button, TextInput } from '@mantine/core'
import { IconMailFilled } from '@tabler/icons-react'
import React from 'react'

const Subscribe = () => {
    return (
        <div className='text-mine-shaft-100 bg-mine-shaft-800 mx-20 py-7 rounded-xl mt-10  flex items-center justify-center gap-20'>
            <div className='text-4xl mb-3 font-semibold text-center w-2/5'>
                Never Wants to Miss Any <span className='text-bright-sun-400 [text-shadow:_0px_1px_3px_#f99b07,_-0px_1px_3px_#f99b07,_-0px_1px_3px_#f99b07,_0px_-1px_3px_#f99b07] tracking-wider'>Job News?</span>
            </div>
            <div className='flex gap-4 bg-mine-shaft-800 px-3 py-2 items-center'>
                <TextInput className=' py-1 rounded-lg [&>label]:!text-bright-sun-400  [&_input]:!text-mine-shaft-100 [&_input]:!w-96 [&_input]:bg-mine-shaft-700 flex items-center'
                    variant="unstyled"
                    placeholder="Your@gmail.com"
                    size='xl'
                    icon={<IconMailFilled className='text-bright-sun-300 ml-5 mt-1.5' />}
                />
                <Button radius="lg" size="lg" color='brightSun.4' className='hover:bg-bright-sun-500 text-mine-shaft-900'>
                    Subscribe
                </Button>
            </div>
        </div>
    )
}

export default Subscribe
