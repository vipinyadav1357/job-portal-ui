import { ActionIcon, Avatar, Button, Divider, Tooltip } from '@mantine/core'
import { IconBookmark, IconBookmarkFilled, IconClockHour3, IconPointFilled } from '@tabler/icons-react'
import { Link, useParams } from 'react-router-dom'
import { card } from '../../Data/JobDescData'
//@ts-ignore
import DOMPurify from 'dompurify';
import { formatDateToDayFromCurrentDate } from '../../services/Utilities/Utilities'
import { useDispatch, useSelector } from 'react-redux';
import { changeProfile } from '../../slices/ProfileSlice';
import { useEffect, useState } from 'react';
import { postJob } from '../../services/JobService';

const JobProfile = ({ edit, props, job }: any) => {
    const { id } = useParams();
    const userProfile = useSelector((state: any) => state.profile);
    const data = DOMPurify.sanitize(job?.description);
    const [applied, setApplied] = useState<boolean>(false);
    const dispatch = useDispatch();

    useEffect(() => {
        if (job?.applicants?.filter((applicant: any) => applicant.applicantId === 1).length > 0) {
            setApplied(true);
        } else {
            setApplied(false);
        }
    }, [job?.applicants, applied]);
    const handleSavedJob = () => {
        let savedJobs = [...userProfile?.savedJobs || []];
        const index = savedJobs.indexOf(job?.id);
        if (index > -1) {
            savedJobs.splice(index, 1);
            console.log(savedJobs);
            let updatedProfile = { ...userProfile, savedJobs: savedJobs }
            dispatch(changeProfile(updatedProfile));
        } else {
            savedJobs = [...savedJobs, job?.id];
            console.log(savedJobs);
            let updatedProfile = { ...userProfile, savedJobs: savedJobs }
            dispatch(changeProfile(updatedProfile));
        }
    }
    const handleCloseJob = () => {
        const updatedJob = { ...job, jobStatus: "CLOSED" };
        postJob(updatedJob).then((res) => console.log("ho gail", res)).catch((e) => console.log(e))
    }
    return (
        <div className='w-2/3 mx-5 pb-3'>
            <div className='flex justify-between '>
                <div className='flex items-center gap-2'>
                    <div className='p-4 bg-mine-shaft-700 rounded-md'>
                        <img className='h-16' src={`/Icons/${job?.company}.png`} alt="hi" />
                    </div>
                    <div className='flex flex-col gap-1'>
                        <div className=' font-semibold text-2xl tracking-wide'>{job?.jobTitle}</div>
                        <div className='text-lg text-mine-shaft-300'>{job?.company} <IconPointFilled width={16} height={16} className='inline-block text-bright-sun-400' /> {job?.applicants ? job.applicants.length : 0} applicants</div>
                        <div className='text-sm text-mine-shaft-300'>
                            <IconClockHour3 className='inline-block text-bright-sun-400' />{" " + formatDateToDayFromCurrentDate(job?.postTime)}ago
                        </div>
                    </div>
                </div>
                <div className='flex flex-col justify-between items-center '>
                    <div className='text-sm'>
                        {(!applied || edit) && <Link to={edit || job?.jobStatus === "CLOSED" ? `/post-job/${id}` : `/apply-job/${id}`} >
                            <Button onClick={() => { }} variant='light' color='brightSun.4' bg={"mineShaft.7"} >{edit ? job?.jobStatus === "CLOSED" ? "reopen" : "edit" : "Apply"}</Button>
                        </Link>}
                        {
                            applied && !edit && <Button variant='outline' disabled  >Applied</Button>
                        }
                    </div>
                    {
                        edit ? job?.jobStatus === "CLOSED" ? <></> :
                            <Button onClick={() => { handleCloseJob() }} variant='outline' color='red.5' bg={"mineShaft.7"} >close</Button>
                            :
                            userProfile?.savedJobs?.includes(Number(id)) ? <IconBookmarkFilled onClick={handleSavedJob} className='text-bright-sun-400 transition-all duration-200' stroke={1.5} /> : <IconBookmark onClick={handleSavedJob} className='text-bright-sun-400 hover:fill-bright-sun-400 hover:stroke-bright-sun-400 transition-all duration-200' stroke={1.5} />
                    }
                </div>
            </div>
            <Divider size={"sm"} my="md" color='brightSun.0' />
            <div className='flex items-center py-10 justify-around'>
                {
                    card
                        .map((item) =>
                            <div key={item.id} className='flex flex-col w-fit items-center'>
                                <ActionIcon className='h-12 w-12' color="brightSun.4" radius="xl" variant="light" bg={"mineShaft.7"} >
                                    <item.icon size={30} />
                                </ActionIcon>
                                <div className='text-sm font-semibold'>{item.name}</div>
                                <div className='font-semibold'>{job?.[item.id] ?? " "}{" "}{item.id === "packageOffered" && <>lpa</>}</div>
                            </div>
                        )}
            </div>
            <Divider size={"sm"} my="md" color='brightSun.0' />
            <div>
                <div className='font-semibold text-2xl mb-3'>Required Skills</div>
                <div className='flex flex-wrap gap-3  px-10'>
                    {
                        job?.skillRequired?.map((skill: any, index: any) =>
                            <div key={index} className='bg-bright-sun-300 font-medium bg-opacity-15 rounded-3xl px-3 py-1 text-center'><ActionIcon className='h-fit w-fit' color="brightSun.4" variant="transparent" >
                                {skill}
                            </ActionIcon>
                            </div>
                        )}
                </div>
            </div>
            <Divider size={"sm"} my="md" color='brightSun.0' />
            <div>
                <div className='font-semibold text-2xl mb-3'> Job Description</div>
                <div className='[&_h4]:text-xl [&_*]:text-mine-shaft-300 [&_h4]:my-5 [&_h4]:font-semibold [&_h4]:text-mine-shaft-200 [&_p]:text-justify [&_ul]:mx-5 [&_li]:marker:text-bright-sun-400 [&_li]:mb-1' dangerouslySetInnerHTML={{ __html: data }}></div>
            </div>
            <Divider size={"sm"} my="md" color='brightSun.0' />
            <div className='flex flex-col gap-2'>
                <div className='font-semibold text-2xl mb-4'> About The Company</div>
                <div className='flex justify-between '>
                    <div className='flex items-center gap-2'>
                        <div className='p-4 bg-mine-shaft-700 rounded-md'>
                            <img className='h-10' src={`/Icons/${job?.company}.png`} alt="hi" />
                        </div>
                        <div className='flex flex-col gap-1'>
                            <div className=' font-medium text-lg tracking-wide'>{job?.company}</div>
                            <div className='text-lg text-mine-shaft-300 flex gap-1 items-center'>
                                <Avatar.Group spacing="sm">
                                    <Tooltip label="Vipin Yadav" withArrow>
                                        <Avatar src="avatar.png" radius="xl" />
                                    </Tooltip>
                                    <Tooltip label="Deepak Yadav" withArrow>
                                        <Avatar src="avatar1.png" radius="xl" />
                                    </Tooltip>
                                    <Tooltip label="Kamalesh Yadav" withArrow>
                                        <Avatar src="avatar2.png" radius="xl" />
                                    </Tooltip>
                                    <Tooltip
                                        withArrow
                                        label={
                                            <>
                                                <div>and more...</div>
                                            </>
                                        }
                                    >
                                        <Avatar radius="xl" bg={"mineShaft.7"} >+10k</Avatar>
                                    </Tooltip>
                                </Avatar.Group>employees</div>
                        </div>
                    </div>
                    <Link to={`/company-profile/${job?.company}`} >
                        <Button variant='light' color='brightSun.4' bg={"mineShaft.7"} >visit </Button>
                    </Link>
                </div>
                <div className='text-justify text-mine-shaft-300'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus laborum nam dolore fugit hic autem itaque expedita quam sapiente officiis repellendus velit voluptatibus reprehenderit, voluptatem doloribus tempora maxime esse. Natus iusto nam voluptas aperiam atque. Ab enim aliquam, nesciunt, eum fuga sed voluptatum modi aspernatur officia itaque hic doloremque ipsam?</div>
            </div>
            <Divider size={"sm"} my="md" color='brightSun.0' />

        </div >
    )
}

export default JobProfile

