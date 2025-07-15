import React, { useState } from 'react'
import { dropdownData } from '../../../Data/JobsData'
import MultiSelectComponent from '../../../MultiSelect/MultiSelect'
import { Divider, RangeSlider } from '@mantine/core'
import { IconCurrencyRupee } from '@tabler/icons'
import { useDispatch } from 'react-redux'
import { changeFilterTalent } from '../../../slices/FilterTalent'

const SearchBar = () => {
    const [rangeValue, setRangeValue] = useState<[number, number]>([0, 100]);
    const [name, setName] = useState<string>("vipin");
    const dispatch = useDispatch();
    const handleChange = (name: string, e: any) => {
        if (name === "exp") {
            dispatch(changeFilterTalent({ [name]: e }))
        } else {
            setName(e.target.value)
            dispatch(changeFilterTalent({ [name]: e.target.value }))
        }
    }
    return (
        <div className='flex justify-evenly items-center px-5 py-8'>
            {
                dropdownData.map((item, index) => <React.Fragment key={index}>
                    <div>
                        <MultiSelectComponent item={item} />
                    </div>
                    <Divider size={"xs"} orientation='vertical' />
                </React.Fragment>)
            }
            <div className='flex flex-col gap-7 w-fit'>
                <div className='text-1xl'>
                    Salary<IconCurrencyRupee className='inline-block' />
                    {rangeValue[0]} lpa - {rangeValue[1]} lpa
                </div>
                <RangeSlider
                    min={1}
                    max={100}
                    value={rangeValue}
                    onChange={setRangeValue}
                    labelTransition={'skew-down'}
                    labelTransitionDuration={150}
                    labelTransitionTimingFunction='ease'
                    step={1} color='brightSun.4'
                    onChangeEnd={e => handleChange("exp", e)}
                />

            </div>
        </div>
    )
}

export default SearchBar
function dispatch(arg0: any) {
    throw new Error('Function not implemented.')
}

