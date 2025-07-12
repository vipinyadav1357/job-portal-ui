import { Select } from '@mantine/core';
import { IconChevronDown, IconAdjustments } from '@tabler/icons-react';
import React, { useEffect, useState } from 'react'

const SelectInput = (props: any) => {
    const [data, setData] = useState<string[]>([]);
    const selected = props.form.values[props.label];
    const setSelected = (value: string | number | null) => props.form.setFieldValue(props.label, value);
    useEffect(() => {
        // let updatedOptions = [...props.options]
        // if (props.value && !updatedOptions.includes(props.value)) {
        //     console.log("Adding value to options:", props.value);
        //     updatedOptions.push(props.value);
        // }
        setData(props.options);
    }, [props.options]);
    return (
        <div className='[&_input]:font-medium'>
            <Select className='[&_.mantine-Select-input]:!text-bright-sun-400 [&_.mantine-Select-required]:!text-bright-sun-400'
                key={selected}
                label={props.label}
                type={props.type}
                data={data.map((option) => ({ value: option, label: option }))}
                value={props.type === "number" ? String(selected) : selected}
                onChange={setSelected}
                rightSection={<IconChevronDown size={14} />}
                icon={<IconAdjustments className='text-bright-sun-400 bg-mine-shaft-900 size-7 rounded-xl p-1' />}
                dropdownPosition="bottom"
                nothingFound="Nothing found"
                placeholder={`Select ${props.placeholder}`}
                searchable
                creatable
                getCreateLabel={(query) => `+ Create ${query}`}
                onCreate={(query) => {
                    setData((current) => [...current, query]);
                    return query;
                }}
                withAsterisk
            />
        </div>
    )
}

export default SelectInput
