import { TextInput, NumberInput, FileInput, Textarea, Button, Notification } from '@mantine/core';
import { IconCheck, IconUpload } from '@tabler/icons';
import { motion, easeInOut } from 'framer-motion';
import React, { useEffect, useRef, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import gsap from 'gsap';
import { useForm } from '@mantine/form';
import { applyJob } from '../../../services/JobService';

const ApplyJobForm = (props: any) => {
    const { id } = useParams();
    const notifRef = useRef(null);
    const [prev, setPrev] = useState(false);
    // const [value, setValue] = useState('');
    const [submit, setSubmit] = useState(false);
    const [sec, setSec] = useState(5);
    const navigate = useNavigate();
    const form = useForm({
        initialValues: {
            name: '',
            email: '',
            contactNumber: '',
            portfolioLink: '',
            resume: null,
            coverLetter: ''
        },
        mode: 'controlled',
    })

    useEffect(() => {
        if (submit) {
            gsap.fromTo(
                notifRef.current,
                { x: 500, y: 0, opacity: 0 },
                {
                    x: 0,
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    delay: 0,
                    ease: 'bounce',
                }
            );
            // auto-hide after 5s
            setTimeout(() => {
                gsap.to(notifRef.current, {
                    x: 500,
                    y: 0,
                    opacity: 0,
                    duration: 1.5,
                    delay: 0.5,
                    onComplete: () => {
                        navigate('/find-jobs')
                    },
                    ease: 'back.out',
                });
            }, 4500);
        }
    }, [navigate, submit]);
    const handlePrev = () => {
        setPrev(!prev)
        console.log(form.getValues())
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    const handleSubmit = async () => {
        let resume: any = await getBase64(form.getValues().resume);
        form.setFieldValue('resume', resume.split(",")[1]);
        applyJob(form.getValues(), id).then((res) => {
            setSubmit(true);
            props.setLoading(true);
            form.reset();
            let a = 5;
            const countDown = setInterval(() => {
                setSec(--a)
                if (a === 0)
                    clearInterval(countDown);
                // navigate('/find-jobs')
            }, 1000);
        }).catch((error) => {
            console.log("error in applying job", error)
        })
    }
    const getBase64 = (file: any) => {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result);
            reader.onerror = (error) => reject(error);
        });
    }
    return (
        <>
            <div className='text-xl font-semibold mb-5'>Submit Your Application</div>
            <div>
                <div className='flex flex-wrap gap-y-10 [&>*]:px-12 [&>*]:w-1/2'>
                    <TextInput {...form.getInputProps('name')} className={`${prev ? "[&_.mantine-Input-input]:text-bright-sun-400  font-semibold" : ""}`} label={"full name"} placeholder={"Your full name"} readOnly={prev}
                        variant={prev ? "unstyled" : "default"} withAsterisk />
                    <TextInput {...form.getInputProps('email')} className={`${prev ? "[&_.mantine-Input-input]:text-bright-sun-400  font-semibold" : ""}`} type='email' label={"email"} placeholder={"Your email address"} readOnly={prev}
                        variant={prev ? "unstyled" : "default"} withAsterisk />
                    <NumberInput {...form.getInputProps('contactNumber')} className={`${prev ? "[&_.mantine-Input-input]:text-bright-sun-400  font-semibold" : ""}`} label={"contact number"} placeholder={"Your phone number"} readOnly={prev}
                        variant={prev ? "unstyled" : "default"} withAsterisk maxLength={10} hideControls />
                    <TextInput {...form.getInputProps('portfolioLink')} className={`${prev ? "[&_.mantine-Input-input]:text-bright-sun-400  font-semibold" : ""}`} label={"Link"} placeholder={"Your portfolio link"} readOnly={prev}
                        variant={prev ? "unstyled" : "default"} withAsterisk />
                </div>
                <div className='px-12 py-5 flex flex-col gap-3'>
                    <FileInput
                        {...form.getInputProps('resume')}
                        className={`${prev ? "[&_.mantine-Input-input]:text-bright-sun-400  font-semibold" : ""}`}
                        label="Your resume"
                        description="Upload your CV in .pdf or .docx format"
                        icon={<IconUpload size={18} stroke={2.5} />}
                        accept=".pdf,.doc,.docx"
                        withAsterisk
                        readOnly={prev}
                        variant={prev ? "unstyled" : "default"}
                    />
                    <Textarea
                        {...form.getInputProps('coverLetter')}
                        classNames={{
                            input: 'text-sm text-wrap overflow-y-auto scrollbar-hide'
                        }}
                        className={`${prev ? "[&_.mantine-Input-input]:text-bright-sun-400 font-semibold" : ""}`}
                        placeholder="about you self"
                        label="Cover letter"
                        autosize
                        minRows={4}
                        maxRows={8}
                        withAsterisk
                        readOnly={prev}
                        variant={prev ? "unstyled" : "default"}
                    />
                    {
                        !prev && <Button onClick={handlePrev} variant='light' color='brightSun.4' bg={"mineShaft.7"} >preview</Button>
                    }
                    {
                        prev && <div className='flex gap-10 [&>*]:w-1/2'>
                            <Button fullWidth onClick={handlePrev} variant='outline' color='brightSun.4' bg={"mineShaft.7"} >edit</Button>
                            <Button fullWidth onClick={handleSubmit} variant='light' color='brightSun.4' bg={"mineShaft.7"} >submit</Button>
                        </div>
                    }
                </div>
            </div>
            {
                submit && <Notification ref={notifRef} className="border-bright-sun-400 w-1/3  backdrop-blur-md fixed top-20 right-3  bg-mine-shaft-900/20 z-[1001] [&_.mantine-Notification-body]:flex [&_.mantine-Notification-body]:flex-col [&_.mantine-Notification-body]:justify-center p-4" icon={<IconCheck size={18} stroke={3} className='bg-bright-sun-400 text-mine-shaft-100' />} title="Application Submitted" disallowClose>
                    <div className='flex gap-3 justify-start items-center'>
                        {`redirecting to find jobs after ${sec}`}
                        <div className='flex items-center justify-center gap-2 mb-1 w-fit'>
                            {[...Array(sec)].map((_, index) => <motion.div key={index} className='w-2 h-2 bg-bright-sun-400 rounded-full'
                                animate={
                                    {
                                        y: [0, 5, 0],
                                        scale: [1, 0.5, 1]
                                    }
                                }
                                transition={
                                    {
                                        duration: 1.5,
                                        repeat: Infinity,
                                        ease: easeInOut,
                                        delay: index * 0.3
                                    }
                                }
                            >
                            </motion.div>)}
                        </div>
                    </div>
                    <motion.div animate={{ width: ["100%", "0%"], opacity: [1] }} transition={{ duration: 5.5 }} className='border-2 border-bright-sun-400'></motion.div>
                </Notification>
            }
        </>
    )
}

export default ApplyJobForm
