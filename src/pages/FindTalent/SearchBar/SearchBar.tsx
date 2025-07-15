import { Divider, Input, RangeSlider } from '@mantine/core'
import { IconCurrencyRupee, IconUserCircle } from '@tabler/icons-react'
import React, { useState } from 'react'
import MultiSelectComponent from '../../../MultiSelect/MultiSelect'
import { searchFields } from '../../../Data/TalentData'

const SearchBar = () => {
    const [rangeValue, setRangeValue] = useState<[number, number]>([1, 100]);

    return (
        <div className='flex justify-evenly items-end px-5 py-8'>
            <div className='flex items-end gap-3'>
                <div className='text-bright-sun-400 bg-mine-shaft-900 rounded-full p-1'>
                    <IconUserCircle size={20} />
                </div>
                <Input.Wrapper id={"vip"} label="Find Talent By Name">
                    <Input type="text" className='[&_input]:!placeholder-mine-shaft-300' variant='unstyled' id="vip" placeholder="search talent" />
                </Input.Wrapper>
            </div>
            {
                searchFields.map((item, index) => <React.Fragment key={index}>
                    <div>
                        <MultiSelectComponent item={item} />
                    </div>
                    <Divider size={"xs"} orientation='vertical' />
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
