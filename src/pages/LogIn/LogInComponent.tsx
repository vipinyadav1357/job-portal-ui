import { TextInput, PasswordInput, Anchor, Button } from '@mantine/core'
import { IconAt, IconLock } from '@tabler/icons-react'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { loginUser } from '../../services/UserServices';
import { LoginRequest } from '../../services/models/LoginRequest';

const LogInComponent = () => {
    const navigate = useNavigate();
    const [form, setForm] = useState<LoginRequest>({
        email: "yadavvipinysy063@gmail.com",
        password: "099609960996",
    });
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        await loginUser(form)
            .then((res) => {
                console.log(res);
                navigate("/");
            }).catch((err) => {
                console.error("Error during registration:", err.response.data.error);
            }
            );
        // Reset form after submission
        setForm({
            email: "",
            password: "",
        });
    }
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
                name='email'
                value={form.email}
                onChange={handleChange}
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
                name='password'
                value={form.password}
                onChange={handleChange}
                withAsterisk
            />

            <Button onClick={handleSubmit} variant='filled' color='brightSun.4' bg={"mineShaft.7"} className='w-3/4'>Log In</Button>
            <div className='text-sm text-mine-shaft-300'>
                Not a member yet? <Anchor component={Link} to="/sign-up" size="xs" color='brightSun.4' className='text-bright-sun-400'>Sign Up</Anchor>
            </div>

        </div>
    )
}

export default LogInComponent
