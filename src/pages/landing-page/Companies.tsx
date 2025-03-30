import React from 'react'
import Marquee from 'react-fast-marquee'
import { companies } from '../../Data/Data'

const Companies = () => {
    return (
        <div className='text-mine-shaft-100 mt-20 '>
            <div className='text-4xl mb-10 font-semibold text-center'>
                Trusted By <span className='text-bright-sun-400'>1000+</span> Companies
            </div>
            <Marquee pauseOnHover>
                {
                    companies
                        .map((company, index) =>
                        (
                            <div key={index} className='mx-8 px-2 py-2 hover:bg-mine-shaft-900 cursor-pointer rounded-xl border border-transparent hover:border-bright-sun-400 transition-all duration-300'>
                                <img className='h-16' src={`/Companies/${company}.png`} alt={company} />
                            </div>
                        ))
                }
            </Marquee>
        </div>
    )
}

export default Companies
