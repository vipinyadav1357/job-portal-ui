import React, { useEffect } from 'react'
import SearchBar from './SearchBar/SearchBar'
import { Divider } from '@mantine/core'
import JobLists from './JobLists/JobLists'

const FindJobPage = () => {
    useEffect(() => {
        window.scroll(0, 0);
    })
    return (
        <div className="min-h-[100vh] text-mine-shaft-100 bg-mine-shaft-950 font-['poppins'] pt-16 " >
            <Divider size={"xs"} mx="md" />
            <SearchBar />
            <Divider size={"xs"} mx="md" />
            <JobLists />
        </div >
    )
}

export default FindJobPage
