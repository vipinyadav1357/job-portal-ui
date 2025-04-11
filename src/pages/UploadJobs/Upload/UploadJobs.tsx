import React from 'react'
import SelectInput from '../SelectInput/SelectInput'
import { fields } from '../../../Data/PostJob'
import { Divider } from '@mantine/core';
import TagsInput from '../SelectInput/TagsInput';
import TextEditorWindow from '../../../TextEditor/TextEditorWindow';

const UploadJobs = () => {
    const data = fields;
    return (
        <div className='border w-4/5 mx-auto border-bright-sun-400'>
            <div className='text-2xl font-semibold text-center mt-3'>Post a Job</div>
            <Divider size={"xs"} my="md" color='brightSun.4' />

            <div>
                <div className='flex flex-wrap [&>*]:px-16 py-10 gap-y-14 [&>*]:w-1/2'>
                    {data.map((item, index) => <SelectInput key={index} props={item} />)}
                </div>
                <div className='flex flex-wrap [&>*]:px-16 py-10 gap-y-14 [&>*]:w-full'>
                    <TagsInput />
                </div>
                <TextEditorWindow />
            </div>
        </div>
    )
}

export default UploadJobs
