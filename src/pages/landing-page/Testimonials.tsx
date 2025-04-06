import { Avatar, Rating, Textarea } from '@mantine/core'
import React, { useState } from 'react'
import { testimonials } from '../../Data/Data'
import { Carousel } from '@mantine/carousel';

const Testimonials = () => {
    const [control, setControl] = useState(false);

    return (
        <div className='mt-10 text-mine-shaft-100 pb-10'>
            <div className='text-4xl font-semibold text-center'>
                What <span className='text-bright-sun-400 [text-shadow:_0px_1px_3px_#f99b07,_-0px_1px_3px_#f99b07,_-0px_1px_3px_#f99b07,_0px_-1px_3px_#f99b07] tracking-wider'>Users Talks</span> About Us
            </div>
            <Carousel onMouseEnter={() => {
                setControl(true)
            }} onMouseLeave={() => {
                setControl(false)
            }} className='mt-10' slideSize="22%" slideGap="xl" align={"center"} controlsOffset="xl" controlSize={50} loop dragFree withControls={control} >
                {
                    testimonials.map((testimonial, index) =>
                        <Carousel.Slide key={index}>
                            <div className='hover:cursor-pointer flex flex-col items-start gap-3  border border-bright-sun-300 rounded-xl mx-4 my-4 py-4 w-64 px-2 hover:shadow-[0_0_15px_5px_rgba(255,223,0,0.5)] !hover:shadow-bright-sun-300 transition-all duration-500 ease-in-out '>
                                <div className='flex items-center gap-2'>
                                    <Avatar className='!h-14 !w-14' src="avatar.png" alt='avatar' radius={"xl"} />
                                    <div>
                                        <div className='font-semibold text-lg [text-shadow:_0px_1px_3px_#f99b07,_-0px_1px_3px_#f99b07,_-0px_1px_3px_#f99b07,_0px_-1px_3px_#f99b07] tracking-wider'>
                                            {testimonial.name}
                                        </div>
                                        <Rating size={"lg"} defaultValue={testimonial.rating} fractions={2} readOnly color='brightSun.4' />
                                    </div>
                                </div>
                                <Textarea classNames={{
                                    input: 'w-[140%] px-1 bg-mine-shaft-950 text-mine-shaft-100 p-2 border-0 text-sm text-wrap overflow-y-auto scrollbar-hide'
                                }} minRows={4} maxRows={10} size='xl' bg="black" value={testimonial.testimonial} readOnly />
                            </div>
                        </Carousel.Slide>)
                }
            </Carousel>
        </div>
    )
}

export default Testimonials
