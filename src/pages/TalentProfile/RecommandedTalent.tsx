import React from 'react'
import { talents } from '../../Data/TalentData'
import TalentCard from '../FindTalent/Talents/TalentCard/TalentCard'

const RecommandedTalent = () => {
    return (
        <div className='w-1/3'>
            <div className='font-semibold text-xl mb-5 ml-5'>Recommanded Talents</div>
            <div className='flex flex-wrap flex-col items-center gap-5'>
                {
                    talents.map((job, index) => index < 5 && <div key={index}><TalentCard talentData={job} /></div>
                    )
                }
            </div>
        </div>
    )
}

export default RecommandedTalent
