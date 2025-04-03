import React from 'react'
import { dropdownData } from '../../../Data/JobsData'
import MultiSelectComponent from './MultiSelect/MultiSelect'

const SearchBar = () => {
    return (
        <div className='flex justify-evenly'>
            {
                dropdownData.map((item, index) => <div key={index}> <MultiSelectComponent item={item} /></div>)
            }
        </div>
    )
}

export default SearchBar
