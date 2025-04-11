import { Select } from '@mantine/core';
import { IconChevronDown, IconAdjustments } from '@tabler/icons-react';
import React, { useEffect, useState } from 'react'

const SelectInput = ({ props }: any) => {
    const [data, setData] = useState<string[]>([]);
    const [selected, setSelected] = useState<string | null>('Relevance');

    useEffect(() => {
        setData(props.options);
    }, [props])

    return (
        <div className='[&_input]:font-medium'>
            <Select className='[&_.mantine-Select-input]:!text-bright-sun-400 [&_.mantine-Select-required]:!text-bright-sun-400'
                key={selected}
                label={props.label}
                data={data.map((option) => ({ value: option, label: option }))}
                value={selected}
                onChange={(selectedValues) => setSelected(selectedValues)}
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
