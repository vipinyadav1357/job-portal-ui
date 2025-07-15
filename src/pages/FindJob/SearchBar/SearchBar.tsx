import React, { useState } from 'react'
import { dropdownData } from '../../../Data/JobsData'
import MultiSelectComponent from '../../../MultiSelect/MultiSelect'
import { Divider, RangeSlider } from '@mantine/core'

const SearchBar = () => {
    const [rangeValue, setRangeValue] = useState<[number, number]>([0, 15]);
    return (
        <div className='flex justify-evenly items-center px-5 py-8'>
            {
                dropdownData.map((item, index) => <React.Fragment key={index}>
                    <div> <MultiSelectComponent item={item} />
                    </div>
                    <Divider size={"xs"} orientation='vertical' />
                </React.Fragment>)
            }
            <div className='flex flex-col gap-7 w-fit'>
                <div
                    className='text-1xl'>
                    Experience {rangeValue[0]} year - {rangeValue[1]} year
                </div>
                <RangeSlider
                    min={0}
                    max={15}
                    step={1}
                    value={rangeValue}
                    onChange={setRangeValue}
                    labelTransition={'skew-down'}
                    labelTransitionDuration={150}
                    labelTransitionTimingFunction='ease'
                    color='brightSun.4'
                />
            </div>
        </div>
    )
}

export default SearchBar
