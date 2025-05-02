import React from 'react'

const PostedJobCard = (props: any) => {
    return (
        <div className='flex flex-col items-start justify-center gap-2 border-l-2 border-l-bright-sun-400 bg-mine-shaft-900 rounded-lg p-4'>
            <div className='text-sm font-semibold'>{props.jobTitle}</div>
            <div className='text-xs text-mine-shaft-300 font-medium'>{props.location}</div>
            <div className='text-xs text-mine-shaft-300'>{props.posted}</div>
        </div>
    )
}

export default PostedJobCard
