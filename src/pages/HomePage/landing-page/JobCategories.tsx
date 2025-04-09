import { Carousel } from '@mantine/carousel'
import React, { useState } from 'react'
import { jobCategory } from '../../../Data/Data'


const JobCategories = () => {
    const [control, setControl] = useState(false);
    return (
        <div className='mt-10 text-mine-shaft-100 pb-10'>
            <div className='text-4xl mb-4 font-semibold text-center'>
                Browse <span className='text-bright-sun-400 [text-shadow:_0px_1px_3px_#f99b07,_-0px_1px_3px_#f99b07,_-0px_1px_3px_#f99b07,_0px_-1px_3px_#f99b07] tracking-wider'>Job</span> Categories
            </div>
            <div className='text-mine-shaft-300 text-lg text-center w-1/2 mx-auto mb-10'>Explore diverse job opportunities tailored to your skills. Start your career journey today!</div>
            <Carousel onMouseEnter={() => {
                setControl(true)
            }} onMouseLeave={() => {
                setControl(false)
            }} className='mt-5' slideSize="22%" slideGap="xs" align={"center"} controlsOffset="xl" controlSize={50} loop dragFree withControls={control} >
                {
                    jobCategory
                        .map((category, index) =>
                            <Carousel.Slide key={index}>
                                <div className='hover:cursor-pointer flex flex-col items-center border-bright-sun-300 border rounded-xl gap-2 my-4 w-64 py-4 px-2 hover:shadow-[0_0_15px_5px_rgba(255,223,0,0.5)] !hover:shadow-bright-sun-300 transition-all duration-500 ease-in-out'>
                                    <div className='bg-bright-sun-300 rounded-full p-2 '>
                                        <img className='h-10 w-10 ' src={`/Category/${category.name}.png`} alt="no" />
                                    </div>
                                    <div className='text-mine-shaft-100 font-semibold text-xl [text-shadow:_0px_1px_3px_#f99b07,_-0px_1px_3px_#f99b07,_-0px_1px_3px_#f99b07,_0px_-1px_3px_#f99b07] tracking-wider'>{category.name}</div>
                                    <div className='text-sm text-mine-shaft-300 text-center'>{category.desc}</div>
                                    <div className='text-bright-sun-300 text-lg '>{category.jobs}+ new Job Posted</div>
                                </div>
                            </Carousel.Slide>)
                }
            </Carousel>
        </div>
    )
}

export default JobCategories
