import React, { useEffect, useState } from 'react'

import SortJobs from '../../FindJob/JobLists/SortJobs/SortJobs'
import { talents } from '../../../Data/TalentData'
import TalentCard from './TalentCard/TalentCard'
import { getAllProfiles } from '../../../services/ProfileService'



const Talents = () => {
    const [talents, setTalents] = useState<any[]>([]);
    useEffect(() => {
        getAllProfiles().then((data) => {
            setTalents(data);
        }).catch((error) => {
            console.error("error fetching talents:", error);
            setTalents([]);
        })
    }, []);
    return (
        <div className='px-8 pt-16'>
            <div className='flex justify-between '>
                <div className='text-3xl font-semibold'>Talents</div>
                <SortJobs />
            </div>
            <div className='mt-8 flex flex-wrap justify-center gap-10 '>
                {
                    talents.map((job, index) => <div key={index}><TalentCard talent={job} /></div>)
                }
            </div>
        </div>
    )
}

export default Talents
