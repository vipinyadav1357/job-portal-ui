import React from 'react'
import Marquee from 'react-fast-marquee'
import { companies } from '../../../Data/Data'

const Companies = () => {
    return (
        <div className='text-mine-shaft-100 mt-20 pb-5'>
            <div className='text-4xl mb-10 font-semibold text-center'>
                Trusted By <span className='text-bright-sun-400 [text-shadow:_0px_1px_3px_#f99b07,_-0px_1px_3px_#f99b07,_-0px_1px_3px_#f99b07,_0px_-1px_3px_#f99b07] tracking-wider'>1000+</span> Companies
            </div>
            <Marquee pauseOnHover>
                {
                    companies
                        .map((company, index) =>
                        (
                            <div key={index} className='mx-8 my-8 px-2 py-2 hover:bg-mine-shaft-900 cursor-pointer rounded-xl border border-transparent hover:border-bright-sun-400 transition-all ease-in-out duration-500 shadow-lg hover:shadow-[0_0_15px_5px_rgba(255,223,0,0.5)] !shadow-red-500'>
                                <img className='h-16' src={`/Companies/${company}.png`} alt={company} />
                            </div>
                        ))
                }
            </Marquee>
        </div>
    )
}

export default Companies
