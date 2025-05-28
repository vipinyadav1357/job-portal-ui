import { Anchor, Button, Checkbox, PasswordInput, Radio, TextInput } from '@mantine/core'
import { IconAt, IconLock } from '@tabler/icons-react'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { registerUser } from '../../services/UserServices';
import { RegisterRequest } from '../../services/models/RegisterRequest';

const SignUpComponent = () => {
    const navigate = useNavigate();
    const [checked, setChecked] = useState(false);
    const [form, setForm] = useState<RegisterRequest>({
        name: "vipin yadav",
        email: "yadavvipinysy063@gmail.com",
        password: "099609960996",
        confirmPassword: "099609960996",
        AccountType: "APPLICANT" as "APPLICANT" | "EMPLOYER"
    });
    const handleChange = (e: React.ChangeEvent<HTMLInputElement> | "APPLICANT" | "EMPLOYER") => {
        if (typeof (e) == "string")
            setForm({ ...form, AccountType: e as "APPLICANT" | "EMPLOYER" });
        else
            setForm({ ...form, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        await registerUser(form)
            .then((res) => {
                console.log(res);
                navigate("/log-in");
            }).catch((err) => {
                console.error("Error during registration:", err.response.data.error);
            }
            );
        // Reset form after submission
        setForm({
            name: "",
            email: "",
            password: "",
            confirmPassword: "",
            AccountType: "APPLICANT" as "APPLICANT" | "EMPLOYER"
        });
        setChecked(false); // Reset checkbox state
        // Optionally, redirect or show a success message
        // Uncomment if you want to redirect after registration
    }
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
                value={form.name}
                onChange={handleChange}
                name='name'
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
                value={form.email}
                onChange={handleChange}
                name='email'
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
                value={form.password}
                onChange={handleChange}
                name='password'
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
                value={form.confirmPassword}
                onChange={handleChange}
                name='confirmPassword'
            />
            <div className='flex justify-start w-3/4 gap-5'>
                <Radio.Group
                    name="favoriteFramework"
                    label="Select your Account Type"
                    value={form.AccountType}
                    // onChange={(value) => setRole(value as "APPLICANT" | "EMPLOYER")}
                    withAsterisk
                    onChange={handleChange as any} // TypeScript workaround for union type
                >
                    <Radio className='px-4 py-4 hover:bg-mine-shaft-900 has-[:checked]:bg-bright-sun-400/5 has-[:checked]:border-bright-sun-400 border border-mine-shaft-800 rounded-lg' value="APPLICANT" label="APPLICANT" />
                    <Radio className='px-4 py-4 hover:bg-mine-shaft-900 has-[:checked]:bg-bright-sun-400/5 has-[:checked]:border-bright-sun-400 border border-mine-shaft-800 rounded-lg' value="EMPLOYER" label="EMPLOYER" />
                </Radio.Group>
            </div>
            <div className='flex justify-start w-3/4'>
                <Checkbox
                    checked={checked} onChange={(event) => setChecked(event.currentTarget.checked)}
                    label={<>I accepts <Anchor>terms & Conditions</Anchor></>}
                />
            </div>

            <Button onClick={handleSubmit} variant='filled' color='brightSun.4' bg={"mineShaft.7"} className='w-3/4'>Create Account</Button>
            <div className='text-sm text-mine-shaft-300'>
                Already have an account?<Anchor component={Link} to="/log-in">Login</Anchor>
            </div>

        </div >
    )
}

export default SignUpComponent
