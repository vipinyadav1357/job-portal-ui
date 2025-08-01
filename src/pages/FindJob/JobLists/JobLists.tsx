import React, { useEffect, useState } from 'react'

import JobCard from './JobCard/JobCard'
import SortJobs from './SortJobs/SortJobs'
import { getAllJob } from '../../../services/JobService'
import { useSelector } from 'react-redux'


const JobLists = () => {
    const [jobList, setJobList] = useState<any[]>([]);
    const filter = useSelector((state: any) => state.filter)
    const [filteredJobsList, setFilteredJobsList] = useState<any[]>([])
    useEffect(() => {
        getAllJob()
            .then((res) => {
                setJobList(res.filter((job: any) => job.jobStatus === 'ACTIVE'));
            })
            .catch(() => { });
    }, [])
    useEffect(() => {
        let filtered = jobList;
        setFilteredJobsList(filtered);
        if (filter["Job Title"] && filter["Job Title"].length > 0) {
            const locs = Array.isArray(filter["Job Title"])
                ? filter["Job Title"]
                : [filter["Job Title"]];

            filtered = filtered.filter((talent: any) =>
                !!talent.jobTitle &&
                locs.some(
                    (loc: string) =>
                        talent.jobTitle.toLowerCase().includes(loc.toLowerCase())
                )
            );

            setFilteredJobsList(filtered);
        }
        if (filter["Location"] && filter["Location"].length > 0) {
            const locs = Array.isArray(filter["Location"])
                ? filter["Location"]
                : [filter["Location"]];

            filtered = filtered.filter((talent: any) =>
                !!talent.location &&
                locs.some(
                    (loc: string) =>
                        talent.location.toLowerCase().includes(loc.toLowerCase())
                )
            );

            setFilteredJobsList(filtered);
        }
        if (filter["Experience"] && filter["Experience"].length > 0) {
            const locs = Array.isArray(filter["Experience"])
                ? filter["Experience"]
                : [filter["Experience"]];

            filtered = filtered.filter((talent: any) =>
                !!talent.experience &&
                locs.some(
                    (loc: string) =>
                        talent.experience.toLowerCase().includes(loc.toLowerCase())
                )
            );

            setFilteredJobsList(filtered);
        }
        if (filter["Job Type"] && filter["Job Type"].length > 0) {
            const locs = Array.isArray(filter["Job Type"])
                ? filter["Job Type"]
                : [filter["Job Type"]];

            filtered = filtered.filter((talent: any) =>
                !!talent.jobType &&
                locs.some(
                    (loc: string) =>
                        talent.jobType.toLowerCase().includes(loc.toLowerCase())
                )
            );

            setFilteredJobsList(filtered);
        }
        if (filter.sal && filter.sal.length > 0) {
            filtered = filtered.filter((job: any) => filter['sal'][0] <= job?.packageOffered && filter['sal'][1] >= job?.packageOffered)
            setFilteredJobsList(filtered);
        }
    }, [jobList, filter]);
    return (
        <div className='px-8 pt-16'>
            <div className='flex justify-between '>
                <div className='text-3xl font-semibold'>Recommended Job</div>
                <SortJobs />
            </div>
            <div className='mt-8 flex flex-wrap justify-center gap-10 '>
                {
                    filteredJobsList.map((job, index) => <div key={index}><JobCard {...job} /></div>)
                }
            </div>
        </div>
    )
}

export default JobLists
