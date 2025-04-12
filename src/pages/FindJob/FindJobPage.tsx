import React from 'react'
import SearchBar from './SearchBar/SearchBar'
import { Divider } from '@mantine/core'
import Jobs from './JobLists/JobLists'

const FindJobPage = () => {
    return (
        <div className="min-h-[100vh] text-mine-shaft-100 bg-mine-shaft-950 font-['poppins'] pt-16 " >
            <Divider size={"xs"} mx="md" />
            <SearchBar />
            <Divider size={"xs"} mx="md" />
            <Jobs />
        </div >
    )
}

export default FindJobPage
