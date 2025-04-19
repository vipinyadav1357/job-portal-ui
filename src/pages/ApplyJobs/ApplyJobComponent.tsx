import { Button, Divider, FileInput, NumberInput, Textarea, TextInput } from '@mantine/core'
import { IconPointFilled, IconClockHour3, IconUpload } from '@tabler/icons-react'
import React, { useState } from 'react'

const ApplyJobComponent = (props: any) => {
    const [value, setValue] = useState('');
    const [prev, setPrev] = useState(false);
    const handlePrev = () => {
        setPrev(!prev)
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    return (
        <div className='w-2/3 mx-auto'>
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
                            <Button fullWidth variant='light' color='brightSun.4' bg={"mineShaft.7"} >submit</Button>
                        </div>
                    }
                </div>
                <div className='px-12'>

                </div>
            </div>
        </div>
    )
}

export default ApplyJobComponent
