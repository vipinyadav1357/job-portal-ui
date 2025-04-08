import React from 'react'

import SortJobs from '../../FindJob/Jobs/SortJobs/SortJobs'
import { talents } from '../../../Data/TalentData'
import TalentCard from './TalentCard/TalentCard'



const Talents = () => {
    return (
        <div className='px-8 pt-16'>
            <div className='flex justify-between '>
                <div className='text-3xl font-semibold'>Talents</div>
                <SortJobs />
            </div>
            <div className='mt-8 flex flex-wrap justify-center gap-10 '>
                {
                    talents.map((job, index) => <div key={index}><TalentCard talentData={job} /></div>)
                }
            </div>
        </div>
    )
}

export default Talents
