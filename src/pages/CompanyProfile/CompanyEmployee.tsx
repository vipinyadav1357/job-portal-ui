import React from 'react'
import { talents } from '../../Data/TalentData'
import TalentCard from '../FindTalent/Talents/TalentCard/TalentCard'

const CompanyEmployee = () => {
    return (
        <div className=' flex flex-wrap gap-10 '>
            {
                talents.map((job, index) => <div key={index}><TalentCard talent={job} /></div>)
            }
        </div>
    )
}

export default CompanyEmployee
