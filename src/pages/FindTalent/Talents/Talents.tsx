import React, { useEffect, useState } from 'react'

import SortJobs from '../../FindJob/JobLists/SortJobs/SortJobs'
import TalentCard from './TalentCard/TalentCard'
import { getAllProfiles } from '../../../services/ProfileService'
import { useSelector } from 'react-redux'



const Talents = () => {
    const [talents, setTalents] = useState<any[]>([]);
    const filter = useSelector((state: any) => state.filter)
    const [filteredTalents, setFilteredTalents] = useState<any[]>([])
    useEffect(() => {
        getAllProfiles().then((data) => {
            setTalents(data);
        }).catch((error) => {
            console.error("error fetching talents:", error);
            setTalents([]);
        })
    }, []);

    useEffect(() => {
        let filtered = talents;
        setFilteredTalents(filtered)
        if (filter.name) {
            filtered = filtered.filter((talent: any) =>
                talent.name.toLowerCase().includes(filter.name.toLowerCase()));
            setFilteredTalents(filtered)
        }
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

            setFilteredTalents(filtered);
        }
        if (filter["location"] && filter["location"].length > 0) {
            const locs = Array.isArray(filter["location"])
                ? filter["location"]
                : [filter["location"]];

            filtered = filtered.filter((talent: any) =>
                !!talent.location &&
                locs.some(
                    (loc: string) =>
                        talent.location.toLowerCase().includes(loc.toLowerCase())
                )
            );

            setFilteredTalents(filtered);
        }
        if (filter["skills"] && filter["skills"].length > 0) {
            const filterSkills = Array.isArray(filter["skills"])
                ? filter["skills"]
                : [filter["skills"]];

            filtered = filtered.filter((talent: any) =>
                Array.isArray(talent.skills) && talent.skills.some(
                    (skill: string) =>
                        filterSkills.some(
                            (filterSkill: string) =>
                                skill.toLowerCase().includes(filterSkill.toLowerCase())
                        )
                )
            );

            setFilteredTalents(filtered);
        }
        if (filter.exp && filter.exp.length > 0) {
            filtered = filtered.filter((talent: any) => filter['exp'][0] <= talent?.totalExp && filter['exp'][1] >= talent?.totalExp)
        }
    }, [filter, talents])
    return (
        <div className='px-8 pt-16'>
            <div className='flex justify-between '>
                <div className='text-3xl font-semibold'>Talents</div>
                <SortJobs />
            </div>
            <div className='mt-8 flex flex-wrap justify-center gap-10 '>
                {
                    filteredTalents.map((job: any, index: any) => <div key={index}><TalentCard talent={job} /></div>)
                }
            </div>
        </div>
    )
}

export default Talents
