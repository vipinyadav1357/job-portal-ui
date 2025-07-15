import { Divider, Input, RangeSlider } from '@mantine/core'
import { IconUserCircle } from '@tabler/icons-react'
import React, { useState } from 'react'
import MultiSelectComponent from '../../../MultiSelect/MultiSelect'
import { searchFields } from '../../../Data/TalentData'
import { changeFilterTalent } from '../../../slices/FilterTalent'
import { useDispatch } from 'react-redux'

const SearchBar = () => {
    const [rangeValue, setRangeValue] = useState<[number, number]>([0, 15]);
    const [name, setName] = useState<string>("ja");
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
        <div className='flex justify-evenly items-end px-5 py-8'>
            <div className='flex items-end gap-3'>
                <div className='text-bright-sun-400 bg-mine-shaft-900 rounded-full p-1'>
                    <IconUserCircle size={20} />
                </div>
                <Input.Wrapper id={"vip"} label="Find Talent By Name">
                    <Input
                        defaultValue={name}
                        onChange={(e: any) => handleChange("name", e)}
                        type="text"
                        className='[&_input]:!placeholder-mine-shaft-300'
                        variant='unstyled'
                        id="vip"
                        placeholder="search talent" />
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
                    onChangeEnd={e => handleChange("exp", e)}
                />
            </div>
        </div>
    )
}

export default SearchBar
