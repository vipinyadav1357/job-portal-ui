import React from 'react'
import { companyData } from '../../Data/Company'
import { IconLink } from '@tabler/icons-react';

const AboutCompanycomponent = () => {
    const company: { [key: string]: any } = companyData;
    return (
        <div className='flex flex-col gap-5'>
            {
                Object
                    .keys(company)
                    .map((key, index) =>
                        key !== 'Name' &&
                        <div key={index}>
                            <div className='text-xl mb-1 font-semibold'>{key}</div>
                            {key !== 'Website' && <div className='text-sm text-mine-shaft-300 mx-2'>
                                {key !== 'Specialties' ? company[key] : company[key].map((item: string, index: number) => <span key={index}>&bull;  {item + " "}</span>)}
                            </div>
                            }
                            {
                                key === 'Website' &&
                                <div className='mx-2' key={index}>
                                    <IconLink stroke={2.5} className='inline-block pr-1' />
                                    <a href={company[key]} target='_blank' className='text-sm text-mine-shaft-300 hover:cursor-pointer underline hover:text-bright-sun-400' rel="noreferrer">
                                        {company[key]}
                                    </a>
                                </div>
                            }
                        </div>
                    )
            }
        </div >
    )
}

export default AboutCompanycomponent
