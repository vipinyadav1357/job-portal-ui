import React, { useEffect, useState } from 'react'
import SelectInput from '../SelectInput/SelectInput'
import { content, fields } from '../../../Data/PostJob'
import { Button, Divider, Textarea } from '@mantine/core';
import TagsInput from '../SelectInput/TagsInput';
import TextEditorWindow from '../TextEditor/TextEditorWindow';
import { useForm } from '@mantine/form';
import { getJobById, postJob } from '../../../services/JobService';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

const UploadJobs = () => {
    const data = fields;
    const userProfile = useSelector((state: any) => state.profile)
    const navigate = useNavigate();
    const [skill, setSkill] = useState<string[]>([]);
    const { id } = useParams()
    const [job, setJob] = useState<any>({});
    const form = useForm({
        initialValues: {
            id: id ? Number(id) : 0,
            jobTitle: "" as string,
            company: "" as string,
            experience: "" as string,
            jobType: "" as string,
            location: "" as string,
            packageOffered: 0 as number,
            skillRequired: job?.skillRequired as string[],
            about: "" as string,
            description: content as string
        },
    });
    useEffect(() => {
        if (Number(id) !== 0 && id)
            getJobById(Number(id)).then((job) => {
                setJob(job);
                form.setValues({ ...form.values, ...job })
            }).catch((e) => console.log(e))
    }, [id]);

    const updateSkills = (skillData: string) => {
        let updatedSkills = [...skill]
        if (!skill.includes(skillData)) {
            updatedSkills.push(skillData);
        }
        setSkill(updatedSkills);
        form.setFieldValue('skillRequired', updatedSkills);
    }
    const handleDelete = (skillData: any) => {
        let updatedSkills = [...skill];
        updatedSkills = updatedSkills.filter((item) => item !== skillData);
        setSkill(updatedSkills);
        form.setFieldValue('skillRequired', updatedSkills);
    }
    const handlePost = () => {
        postJob({ ...form.values, postedBy: userProfile.id, jobStatus: "ACTIVE" })
            .then((res) => { navigate(`/posted-job/${res.id}`) })
            .catch((error) => { console.log("na post bhail") });
    }
    const handleDraft = () => {
        postJob({ ...form.values, postedBy: userProfile.id, jobStatus: "DRAFT" })
            .then((res) => { navigate(`/posted-job/${res.id}`) })
            .catch((error) => { console.log("na post bhail") });
    }
    return (
        <div className='border w-4/5 mx-auto border-bright-sun-400'>
            <div className='text-2xl font-semibold text-center mt-3'>Post a Job</div>
            <Divider size={"xs"} my="md" color='brightSun.4' />

            <div>
                <div className='flex flex-wrap [&>*]:px-16 py-10 gap-y-10 [&>*]:w-1/2'>
                    {data.map((item, index) => <SelectInput key={index} {...item} form={form} type={item.label === "packageOffered" ? "number" : "text"} />)}
                </div>
                <div className='[&>*]:px-16 py-10 [&>*]:w-full'>
                    <TagsInput updateSkill={updateSkills} handleDelete={handleDelete} skills={job.skillRequired} />
                </div>
                <div className='px-16 py-3'>
                    <Textarea {...form.getInputProps('about')} value={form.getInputProps('about').value} label="About" autosize minRows={4} variant='filled' className='[&_*]:border-bright-sun-400' withAsterisk />
                </div>
                <div className='flex flex-col gap-3 [&_button[data-active="true"]]:text-bright-sun-400 [&_button[data-active="true"]]:bg-bright-sun-400/20'>
                    <div className='text-2xl font-semibold mt-3 border-t border-bright-sun-400 flex items-center justify-center'>
                        Job Description <span className='text-red-500'>*</span>
                    </div>
                    <TextEditorWindow form={form} />
                </div>
            </div>
            <div className='flex gap-10 m-10'>
                <Button onClick={handlePost} variant='light' color='brightSun.4' bg={"mineShaft.7"} >publish job</Button>
                <Button onClick={handleDraft} variant='outline' color='brightSun.4' >save as draft</Button>
            </div>
        </div>
    )
}

export default UploadJobs
