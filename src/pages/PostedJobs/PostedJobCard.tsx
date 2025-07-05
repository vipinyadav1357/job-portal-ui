import React from 'react'
import { formatDateToDayFromCurrentDate } from '../../services/Utilities/Utilities'
import { Link, useParams } from 'react-router-dom'

const PostedJobCard = (props: any) => {
    const { id } = useParams();
    return (

        <Link to={`/posted-job/${props.id}`} className={`${props.id === Number(id) ? 'flex flex-col items-start justify-center gap-2 border-l-2 border-l-bright-sun-400 bg-bright-sun-400 rounded-lg p-4 text-mine-shaft-700' : 'flex flex-col items-start justify-center gap-2 border-l-2 border-l-bright-sun-400 bg-mine-shaft-900 rounded-lg p-4'}`}>
            <div className='text-sm font-semibold'>{props.jobTitle}</div>
            <div className='text-xs text-mine-shaft-500 font-medium'>{props.location}</div>
            <div className='text-xs text-mine-shaft-500'>{formatDateToDayFromCurrentDate(props.postTime) + " "} ago</div>
        </Link>
    )
}

export default PostedJobCard
