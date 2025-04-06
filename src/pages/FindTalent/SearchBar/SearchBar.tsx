import { Divider, RangeSlider } from '@mantine/core'
import { IconCurrencyRupee } from '@tabler/icons-react'
import React, { useState } from 'react'
import MultiSelectComponent from '../../../MultiSelect/MultiSelect'
import { searchFields } from '../../../Data/TalentData'

const SearchBar = () => {
    const [rangeValue, setRangeValue] = useState<[number, number]>([1, 100]);

    return (
        <div className='flex justify-evenly px-5 py-8'>
            {
                searchFields.map((item, index) => <React.Fragment key={index}>
                    <div> <MultiSelectComponent item={item} />
                    </div>
                    <Divider mr="xs" size={"xs"} orientation='vertical' />
                </React.Fragment>)
            }
            <div className='flex flex-col gap-7 w-fit'>
                <div className='text-1xl'>Salary<IconCurrencyRupee className='inline-block' /> {rangeValue[0]} lpa - {rangeValue[1]} lpa</div>
                <RangeSlider min={1} max={100} value={rangeValue} onChange={setRangeValue} labelTransition={'skew-down'} labelTransitionDuration={150} labelTransitionTimingFunction='ease' step={1} color='brightSun.4' />
            </div>
        </div>
    )
}

export default SearchBar
