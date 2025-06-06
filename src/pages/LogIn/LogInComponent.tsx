import { TextInput, PasswordInput, Anchor, Button } from '@mantine/core'
import { IconAt, IconLock } from '@tabler/icons-react'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { loginUser } from '../../services/UserServices';
import { LoginRequest } from '../../services/models/LoginRequest';
import { SignUpValidation } from '../../services/FormValidation';
import { UserLogInAndSignUpError } from '../../services/models/UserLogInAndSignUpError';
import { useDisclosure } from '@mantine/hooks';
import ResetPassword from '../SignUp/ResetPassword';

const LogInComponent = () => {
    const navigate = useNavigate();
    const [opened, { close, open }] = useDisclosure(false);
    const [form, setForm] = useState<LoginRequest>({
        email: "yadavvipinysy063@gmail.com",
        password: "099609960996",
    });
    const [formerror, setFormerror] = useState<UserLogInAndSignUpError>({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
        AccountType: "",
        checked: ""
    });
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        let name = e.target.name;
        let value = e.target.value;
        setForm({ ...form, [name]: value })
        SignUpValidation(name, value) === "" ? setFormerror({ ...formerror, [name]: "" }) : setFormerror({ ...formerror, [name]: SignUpValidation(name, value) });
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        let isValid = true;
        // Validate form fields        
        for (let key in form) {
            if (key === "accountType") continue; // Skip accountType validation here
            if (form[key as keyof LoginRequest] === "") {
                setFormerror((prev) => ({ ...prev, [key]: "This field is required" }));
                isValid = false;
            }
        }
        if (!isValid) {
            return; // Stop submission if validation fails
        }
        await loginUser(form)
            .then((res) => {
                navigate("/");
            }).catch((err) => {
                console.error("Error during registration:", err.response.data.error);
            }
            );
        // Reset form after submission
        clearForm();
    }
    const clearForm = () => {
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
                error={formerror.email}
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
                error={formerror.password}
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
                Not a member yet? <Anchor onClick={clearForm} component={Link} to="/sign-up" size="xs" color='brightSun.4' className='text-bright-sun-400'>Sign Up</Anchor>
            </div>
            <div onClick={open} className='text-bright-sun-400 text-sm hover:underline text-center cursor-pointer'>forget password ?</div>
            <ResetPassword
                opened={opened}
                close={close}
            />
        </div>
    )
}

export default LogInComponent
