import { Anchor, Button, Checkbox, PasswordInput, TextInput } from '@mantine/core'
import { IconAt, IconLock } from '@tabler/icons-react'
import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const SignUpComponent = () => {
    const [checked, setChecked] = useState(false);

    return (
        <div className='w-1/2 px-20 flex flex-col justify-center items-center gap-5'>
            <div className='text-2xl font-semibold'>
                Create Account
            </div>
            <TextInput
                className='w-3/4'
                placeholder="Your name"
                label="Full name"
                description="Ex. Vipin Yadav"
                // error="error"
                variant="filled"
                radius="lg"
                size="md"
                // icon={}
                withAsterisk
            />

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

            <PasswordInput
                className='w-3/4'
                placeholder="Your Password"
                label="confirm password"
                description="Ex. XXXXXXXX"
                // error="error"
                variant="filled"
                radius="lg"
                size="md"
                icon={<IconLock className='text-bright-sun-400' />}
                withAsterisk
            />
            <div className='flex justify-start w-3/4'>
                <Checkbox
                    checked={checked} onChange={(event) => setChecked(event.currentTarget.checked)}
                    label={<>I accepts <Anchor>terms & Conditions</Anchor></>}
                />
            </div>

            <Button component={Link} to="/log-in" variant='filled' color='brightSun.4' bg={"mineShaft.7"} className='w-3/4'>Create Account</Button>
            <div className='text-sm text-mine-shaft-300'>
                Already have an account?<Anchor component={Link} to="/log-in">Login</Anchor>
            </div>

        </div >
    )
}

export default SignUpComponent
