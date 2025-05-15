import { TextInput, PasswordInput, Checkbox, Anchor, Button } from '@mantine/core'
import { IconAt, IconLock } from '@tabler/icons-react'
import React from 'react'
import { Link } from 'react-router-dom';

const LogInComponent = () => {

    return (
        <div className='w-1/2 px-20 flex flex-col justify-center items-center gap-5'>
            <div className='text-2xl font-semibold'>
                Get In Our World
            </div>

            <TextInput
                className='w-3/4'
                placeholder="Your email"
                label="Email"
                description="Ex. abc@gmail.com"
                // error="error"
                variant="filled"
                radius="lg"
                size="md"
                type='email'
                icon={<IconAt className='text-bright-sun-400' />}
                withAsterisk
            />

            <PasswordInput
                className='w-3/4'
                placeholder="Your Password"
                label="password"
                description="Ex. XXXXXXXX"
                // error="error"
                variant="filled"
                radius="lg"
                size="md"
                icon={<IconLock className='text-bright-sun-400' />}
                withAsterisk
            />

            <Button component={Link} to="/" variant='filled' color='brightSun.4' bg={"mineShaft.7"} className='w-3/4'>Log In</Button>
            <div className='text-sm text-mine-shaft-300'>
                Not a member yet? <Anchor component={Link} to="/sign-up" size="xs" color='brightSun.4' className='text-bright-sun-400'>Sign Up</Anchor>
            </div>

        </div>
    )
}

export default LogInComponent
