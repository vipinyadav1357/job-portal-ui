import React from 'react'
import SelectInput from '../SelectInput/SelectInput'
import { fields } from '../../../Data/PostJob'
import { Button, Divider } from '@mantine/core';
import TagsInput from '../SelectInput/TagsInput';
import TextEditorWindow from '../TextEditor/TextEditorWindow';

const UploadJobs = () => {
    const data = fields;
    return (
        <div className='border w-4/5 mx-auto border-bright-sun-400'>
            <div className='text-2xl font-semibold text-center mt-3'>Post a Job</div>
            <Divider size={"xs"} my="md" color='brightSun.4' />

            <div>
                <div className='flex flex-wrap [&>*]:px-16 py-10 gap-y-10 [&>*]:w-1/2'>
                    {data.map((item, index) => <SelectInput key={index} props={item} />)}
                </div>
                <div className='[&>*]:px-16 py-10 [&>*]:w-full'>
                    <TagsInput />
                </div>
                <div className='flex flex-col gap-3 [&_button[data-active="true"]]:text-bright-sun-400 [&_button[data-active="true"]]:bg-bright-sun-400/20'>
                    <div className='text-2xl font-semibold text-center mt-3 border-t border-bright-sun-400 flex items-center justify-center'>
                        Job Description
                    </div>
                    <TextEditorWindow />
                </div>
            </div>
            <div className='flex gap-10 m-10'>
                <Button variant='light' color='brightSun.4' bg={"mineShaft.7"} >publish job</Button>
                <Button variant='outline' color='brightSun.4' >save as draft</Button>
            </div>
        </div>
    )
}

export default UploadJobs
