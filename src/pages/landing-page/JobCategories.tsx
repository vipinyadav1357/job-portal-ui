import { Carousel } from '@mantine/carousel'
import React from 'react'
import { jobCategory } from '../../Data/Data'

const JobCategories = () => {
    return (
        <div className='mt-10 text-mine-shaft-100 pb-5'>
            <div className='text-4xl mb-4 font-semibold text-center'>
                Browsed <span className='text-bright-sun-400'>Job</span> Categories
            </div>
            <div className='text-mine-shaft-300 text-lg text-center w-1/2 mx-auto'>Explore diverse job opportunities tailored to your skills. Start your career journey today!</div>
            <Carousel className='mt-5' slideSize="22%" slideGap="xs" align={"center"} controlsOffset="xl" controlSize={40} loop dragFree>
                {
                    jobCategory
                        .map((category, index) =>
                            <Carousel.Slide key={index}>
                                <div className='flex flex-col items-center border-bright-sun-300 border rounded-xl gap-2 w-64 py-2'>
                                    <div className='bg-bright-sun-300 rounded-full p-2 '>
                                        <img className='h-10 w-10 ' src="/Category/Digital Marketing.png" alt="" />
                                    </div>
                                    <div className='text-mine-shaft-100 font-semibold text-xl'>Digital Marketing</div>
                                    <div className='text-sm text-mine-shaft-300 text-center'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem ullam corrupti obcaecati?</div>
                                    <div className='text-bright-sun-300 text-lg '>1k+ new Job Posted</div>
                                </div>
                            </Carousel.Slide>)
                }
            </Carousel>
        </div>
    )
}

export default JobCategories
