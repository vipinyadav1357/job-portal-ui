import React from 'react'
import CompaniesCards from './CompaniesCards'
import { similar } from '../../Data/Company'

const SimilarCompanies = (props: any) => {
    return (
        <div className='w-1/4'>
            <div className='font-semibold text-xl mb-5 ml-5'>Similar Companies</div>
            <div className='flex flex-wrap flex-col items-center gap-5'>
                {
                    similar.map((job, index) => <div key={index}><CompaniesCards {...job} /></div>)
                }
            </div>
        </div>

    )
}

export default SimilarCompanies
