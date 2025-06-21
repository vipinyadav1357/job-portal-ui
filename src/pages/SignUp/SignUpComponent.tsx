import { Anchor, Button, Checkbox, PasswordInput, Radio, TextInput } from '@mantine/core'
import { IconAt, IconLock } from '@tabler/icons-react'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { registerUser } from '../../services/UserServices';
import { RegisterRequest } from '../../services/models/RegisterRequest';
import { UserLogInAndSignUpError } from '../../services/models/UserLogInAndSignUpError';
import { SignUpValidation } from '../../services/FormValidation';

const SignUpComponent = () => {

    const navigate = useNavigate();
    const [checked, setChecked] = useState(false);
    const [isError, setIsError] = useState<boolean>(false);
    const [form, setForm] = useState<RegisterRequest>({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
        accountType: "APPLICANT" as "APPLICANT" | "EMPLOYER"
    });
    const [formerror, setFormerror] = useState<UserLogInAndSignUpError>({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
        AccountType: "",
        checked: ""
    });


    const handleChange = (e: React.ChangeEvent<HTMLInputElement> | "APPLICANT" | "EMPLOYER") => {
        if (typeof (e) == "string") {
            setForm({ ...form, accountType: e as "APPLICANT" | "EMPLOYER" });
            // SignUpValidation(e, e as "APPLICANT" | "EMPLOYER") === "" ? setFormerror({ ...formerror, [e]: "" }) : setFormerror({ ...formerror, [e]: SignUpValidation(e, e as "APPLICANT" | "EMPLOYER") });
        }
        else {
            let name = e.target.name;
            let value = e.target.value;
            setForm({ ...form, [name]: value })
            SignUpValidation(name, value) === "" ? setFormerror({ ...formerror, [name]: "" }) : setFormerror({ ...formerror, [name]: SignUpValidation(name, value) });

            if (SignUpValidation(name, value) !== "")
                setIsError(true);
            else
                setIsError(false);

            if (name === "confirmPassword" && value !== form.password) {
                if (formerror.password === "") {
                    setFormerror({ ...formerror, confirmPassword: "Passwords do not match re" });
                    setIsError(true); // Set error if passwords do not match
                } else {
                    setForm({ ...form, confirmPassword: "" }); // Clear confirm password if it doesn't match
                }
            } else if (name === "password" && form.confirmPassword !== "" && value !== form.confirmPassword) {
                setFormerror({ ...formerror, confirmPassword: "Passwords do not match" });
                setForm({ ...form, confirmPassword: "" }); // Clear confirm password if it doesn't match
                setIsError(true); // Set error if passwords do not match
            }
        }
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        let isValid = true;
        // Validate form fields        // Validate form fields
        for (let key in form) {
            if (key === "accountType") continue; // Skip accountType validation here
            if (form[key as keyof RegisterRequest] === "") {
                setFormerror((prev) => ({ ...prev, [key]: "This field is required" }));
                isValid = false;
            }
        }
        if (!checked) {
            setFormerror({ ...formerror, checked: "You must accept the terms and conditions" });
            return;
        }

        if (!isValid || isError) {
            return; // Stop submission if validation fails
        }

        await registerUser(form)
            .then((res) => {
                navigate("/log-in");
            }).catch((err) => {
                console.error("Error during registration:", err.response.data.error);
            }
            );
        // Reset form after submission
        clearForm();
        setChecked(false); // Reset checkbox state
    }
    const clearForm = () => {
        setForm({
            name: "",
            email: "",
            password: "",
            confirmPassword: "",
            accountType: "APPLICANT" as "APPLICANT" | "EMPLOYER"
        });
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
                error={formerror.name}
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
                error={formerror.email}
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
                error={formerror.password}
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
                error={formerror.confirmPassword}
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
                    name="AccountType"
                    label="Select your Account Type"
                    value={form.accountType}
                    error={formerror.AccountType}
                    onChange={handleChange as any}
                    withAsterisk
                >
                    <Radio className='px-4 py-4 hover:bg-mine-shaft-900 has-[:checked]:bg-bright-sun-400/5 has-[:checked]:border-bright-sun-400 border border-mine-shaft-800 rounded-lg' value="APPLICANT" label="APPLICANT" />
                    <Radio className='px-4 py-4 hover:bg-mine-shaft-900 has-[:checked]:bg-bright-sun-400/5 has-[:checked]:border-bright-sun-400 border border-mine-shaft-800 rounded-lg' value="EMPLOYER" label="EMPLOYER" />
                </Radio.Group>
            </div>
            <div className='flex justify-start w-3/4'>
                <Checkbox
                    checked={checked} onChange={(event) => setChecked(event.currentTarget.checked)}
                    label={<>I accepts <Anchor>terms & Conditions</Anchor></>}
                    error={formerror.checked}
                />
            </div>

            <Button onClick={handleSubmit} variant='filled' color='brightSun.4' bg={"mineShaft.7"} className='w-3/4'>Create Account</Button>
            <div className='text-sm text-mine-shaft-300'>
                Already have an account?<Anchor onClick={clearForm} component={Link} to="/log-in">Login</Anchor>
            </div>

        </div >
    )
}

export default SignUpComponent
