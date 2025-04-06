import { Divider } from '@mantine/core'
import React from 'react'
import SearchBar from '../FindJob/SearchBar/SearchBar'

const FindTalent = () => {
    return (
        <div className="min-h-[100vh] text-mine-shaft-100 bg-mine-shaft-950 font-['poppins'] pt-16 " >
            <Divider size={"xs"} mr="md" mb={20} />
            <SearchBar />
        </div >
    )
}

export default FindTalent
