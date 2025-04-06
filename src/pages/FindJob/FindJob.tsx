import React from 'react'
import SearchBar from './FilterJobs/SearchBar'
import { Divider } from '@mantine/core'
import Jobs from './Jobs/Jobs'

const FindJob = () => {
    return (
        <div className="min-h-[100vh] text-mine-shaft-100 bg-mine-shaft-950 font-['poppins'] pt-16 " >
            <Divider size={"xs"} mr="md" mb={20} />
            <SearchBar />
            <Divider mr="xs" mt={20} size={"xs"} />
            <Jobs />
        </div >
    )
}

export default FindJob
