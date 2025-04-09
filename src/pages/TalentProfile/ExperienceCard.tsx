import { IconMapPin } from '@tabler/icons-react'
import React from 'react'

const ExperienceCard = (props: any) => {
    return (
        <div className='bg-mine-shaft-900  p-4 rounded-xl flex flex-col gap-5'>
            <div className='flex items-center justify-between'>
                <div className='flex items-center gap-2'>
                    <div className='p-2 bg-mine-shaft-800 rounded-md'>
                        <img className='h-10' src={`/Icons/netflix.png`} alt="hi" />
                    </div>
                    <div className='flex flex-col gap-1'>
                        <div className=' font-semibold tracking-wide'>Software Engineer</div>
                        <div className='text-sm text-mine-shaft-300 flex gap-2 items-center'>
                            Netflix
                            <div className='flex items-center gap-1'>
                                <IconMapPin height={16} width={16} className='text-bright-sun-400' stroke={1.5} /> NewYork, USA
                            </div>
                        </div>
                    </div>
                </div>
                <div className='text-sm text-bright-sun-400 underline '>2021 - 2024</div>
            </div>
            <div className='text-mine-shaft-300 text-sm text-justify p-1'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi, earum molestias et, ex perspiciatis sint omnis porro quisquam alias voluptatibus suscipit exercitationem placeat corporis inventore fugiat iure pariatur animi esse laborum dolore numquam consectetur? Aliquid reiciendis, culpa tenetur eaque, et nemo velit deleniti, suscipit repellat aliquam ratione eum quae non dolores corrupti hic iusto autem nisi. Aspernatur corporis natus fugit?</div>
        </div>
    )
}

export default ExperienceCard
