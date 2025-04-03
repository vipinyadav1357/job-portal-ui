import { IconAnchor, IconBrandFacebookFilled, IconBrandInstagram, IconBrandX } from '@tabler/icons-react'
import React from 'react'
import { footerLinks } from '../Data/Data';

const Footer = () => {
    return (
        <div className="pt-20 font-['poppins'] bg-mine-shaft-950 text-mine-shaft-100 pb-10 px-20 flex items-start justify-between" >
            <div className='flex flex-col items-start mx-5 gap-4 w-1/4'>
                <div className="flex gap-1 items-center text-bright-sun-400">
                    <IconAnchor className="h-7 w-7" stroke={"4.5"} />
                    <div className=" text-3xl font-bold tracking-wider [text-shadow:_0px_1px_3px_#f99b07,_-0px_1px_3px_#f99b07,_-0px_1px_3px_#f99b07,_0px_-1px_3px_#f99b07]">ViJobS</div>
                </div>
                <div className=' text-sm text-pretty text-mine-shaft-300'> Job portal with user profiles, skill updates, certifications, work experience and admin job postings.</div>
                <div className='flex gap-3 items-center text-bright-sun-300 [&>div]:bg-mine-shaft-900 [&>div]:p-2 [&>div]:rounded-full [&>div]:cursor-pointer [&>div:hover]:bg-mine-shaft-700'>
                    <div><IconBrandFacebookFilled height={"30"} width={"30"} /></div>
                    <div><IconBrandInstagram height={"30"} width={"30"} /></div>
                    <div><IconBrandX height={"30"} width={"30"} /></div>
                </div>
            </div>
            <div className='flex justify-between w-3/5'>
                {
                    footerLinks.map((link, index) =>
                        <div key={index} className='flex flex-col mx-10'>
                            <div className='text-lg font-semibold text-mine-shaft-200'>{link.title}</div>
                            <div className='flex flex-col gap-1'>
                                {
                                    link.links.map((link, index) =>
                                        <div key={index} className='text-sm text-mine-shaft-300 hover:text-bright-sun-300 cursor-pointer hover:translate-x-2 transition duration-500 ease-in-out'>{link}</div>
                                    )
                                }
                            </div>
                        </div>
                    )
                }
            </div>
        </div >
    )
};

export default Footer;
