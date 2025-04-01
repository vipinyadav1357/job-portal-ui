import React from 'react'
import { work } from '../../Data/Data'
import { Avatar } from '@mantine/core'

const Working = () => {
    return (
        <div className='mt-10 text-mine-shaft-100 pb-10'>
            <div className='text-4xl mb-4 font-semibold text-center'>
                How It <span className='text-bright-sun-400 [text-shadow:_0px_1px_3px_#f99b07,_-0px_1px_3px_#f99b07,_-0px_1px_3px_#f99b07,_0px_-1px_3px_#f99b07] tracking-wider'>Works!</span>
            </div>
            <div className='text-mine-shaft-300 text-lg text-center w-1/2 mx-auto'>Explore diverse job opportunities tailored to your skills. Start your career journey today!</div>
            <div className='mt-10 flex items-center px-16 justify-between'>
                <div className='w-[30rem] relative'>
                    <img src="/Working/Girl.png" alt="girl.png" />
                    <div className='w-36 flex flex-col gap-1 items-center border border-bright-sun-300 rounded-lg backdrop-blur-md py-3 px-1 absolute top-20 right-0'>
                        <Avatar className='!h-16 !w-16' src="avatar1.png" alt='its me' radius={"xl"} />
                        <div className='font-sm text-center font-semibold text-mine-shaft-200'>Complete Your Profile</div>
                        <div className='text-xs text-mine-shaft-300 '>70% completed</div>
                    </div>
                </div>

                <div className='flex flex-col gap-16 w-[45%] '>
                    {work.map((work, index) =>
                        <div key={index} className='flex items-center gap-3'>
                            <div className='bg-bright-sun-300 rounded-full p-2.5'>
                                <img className='h-12 w-12' src={`/Working/${work.name}.png`} alt="build your resume.png" />
                            </div>

                            <div className=''>
                                <div className='text-mine-shaft-200 font-semibold text-xl'>
                                    {work.name}
                                </div>
                                <div className='text-mine-shaft-300 '>
                                    {work.desc}
                                </div>
                            </div>
                        </div>)}
                </div>
            </div>
        </div >
    )
}

export default Working
