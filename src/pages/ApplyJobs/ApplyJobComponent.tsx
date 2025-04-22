import { Button, Divider, FileInput, NumberInput, Textarea, TextInput, Notification, LoadingOverlay } from '@mantine/core'
import { IconPointFilled, IconClockHour3, IconUpload, IconCheck } from '@tabler/icons-react'
import React, { useEffect, useRef, useState } from 'react'
import gsap from 'gsap';
import { useNavigate } from 'react-router-dom';

const ApplyJobComponent = (props: any) => {
    const notifRef = useRef(null);
    const [value, setValue] = useState('');
    const [prev, setPrev] = useState(false);
    const [submit, setSubmit] = useState(false);
    const [sec, setSec] = useState(5);
    const navigate = useNavigate();
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
                    ease: 'bounce.out',
                });
            }, 4500);
        }
    }, [navigate, submit]);
    const handlePrev = () => {
        setPrev(!prev)
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    const handleSubmit = () => {
        setSubmit(true);
        let a = 5;
        const countDown = setInterval(() => {
            setSec(--a)
            if (a === 0)
                clearInterval(countDown);
            // navigate('/find-jobs')
        }, 1000);
    }
    return (
        <>
            <div className='w-2/3 mx-auto'>
                <LoadingOverlay className='min-h-[150vh]'
                    loaderProps={{ size: 'lg', color: 'brightSun.4', variant: 'bars' }}
                    overlayOpacity={0.1}
                    overlayBlur={2}
                    zIndex={1000}
                    overlayColor="#c5c5c5"
                    visible={submit}
                />
                <div className='flex justify-between px-5'>
                    <div className='flex items-center gap-2'>
                        <div className='p-4 bg-mine-shaft-700 rounded-md'>
                            <img className='h-16' src={`/Icons/${props.company}.png`} alt="hi" />
                        </div>
                        <div className='flex flex-col gap-1'>
                            <div className=' font-semibold text-2xl tracking-wide'>{props.jobTitle}</div>
                            <div className='flex gap-1 items-center'>
                                <div className='text-lg text-mine-shaft-300'>{props.company} <IconPointFilled width={16} height={16} className='inline-block text-bright-sun-400' /> {props.applicants} applicants</div>
                                <div className='text-lg text-mine-shaft-300'>
                                    <IconClockHour3 className='inline-block text-bright-sun-400' />12 Days ago
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Divider size={"xs"} my="md" color='brightSun.4' />
                <div className='text-xl font-semibold mb-5'>Submit Your Application</div>
                <div >
                    <div className='flex flex-wrap gap-y-10 [&>*]:px-12 [&>*]:w-1/2'>
                        <TextInput className={`${prev ? "[&_.mantine-Input-input]:text-bright-sun-400  font-semibold" : ""}`} label={"full name"} placeholder={"Your full name"} readOnly={prev}
                            variant={prev ? "unstyled" : "default"} value={value} onChange={(event) => setValue(event.currentTarget.value)} withAsterisk />
                        <TextInput className={`${prev ? "[&_.mantine-Input-input]:text-bright-sun-400  font-semibold" : ""}`} type='email' label={"email"} placeholder={"Your email address"} readOnly={prev}
                            variant={prev ? "unstyled" : "default"} value={value} onChange={(event) => setValue(event.currentTarget.value)} withAsterisk />
                        <NumberInput className={`${prev ? "[&_.mantine-Input-input]:text-bright-sun-400  font-semibold" : ""}`} label={"contact number"} placeholder={"Your phone number"} readOnly={prev}
                            variant={prev ? "unstyled" : "default"} withAsterisk maxLength={10} hideControls />
                        <TextInput className={`${prev ? "[&_.mantine-Input-input]:text-bright-sun-400  font-semibold" : ""}`} label={"Link"} placeholder={"Your portfolio link"} readOnly={prev}
                            variant={prev ? "unstyled" : "default"} value={value} onChange={(event) => setValue(event.currentTarget.value)} withAsterisk />
                    </div>
                    <div className='px-12 py-5 flex flex-col gap-3'>
                        <FileInput
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
            </div>
            {
                submit && <Notification ref={notifRef} className="border-bright-sun-400 backdrop-blur-md fixed top-20 right-3 w-1/4 bg-mine-shaft-900/20 z-[1001]" icon={<IconCheck size={18} />} color="teal" title="Application Submitted" disallowClose>
                    redirecting to find jobs after {sec} seconds...
                </Notification>
            }
        </>
    )
}

export default ApplyJobComponent
