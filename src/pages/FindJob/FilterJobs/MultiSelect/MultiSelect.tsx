import React, { useState } from 'react'
import { MultiSelect } from '@mantine/core'; // Example library import
import { IconChevronDown, IconSearch } from '@tabler/icons-react';

const MultiSelectComponent = () => {
    const [data, setData] = useState([
        { value: 'react', label: 'React' },
        { value: 'ng', label: 'Angular' },
    ]);
    // const [value, setValue] = useState<string[]>([]);
    // const [searchValue, setSearchValue] = useState('');
    // const [searchable, setSearchable] = useState(false);
    // const [disabled, setDisabled] = useState(false);
    // const [label, setLabel] = useState('Creatable MultiSelect');
    // const [placeholder, setPlaceholder] = useState('Select items');
    // const [clearableValue, setClearableValue] = useState(false);
    // const [valueLabel, setValueLabel] = useState('Selected items');
    // const [searchableValue, setSearchableValue] = useState('Searchable');
    // const [disabledValue, setDisabledValue] = useState('Disabled');
    // const [labelValue, setLabelValue] = useState('Label');
    return (
        <div className='w-1/3'>
            <MultiSelect
                data={data}
                placeholder="Select items"
                searchable
                creatable
                clearable
                rightSection={<IconChevronDown size={14} />}
                icon={<IconSearch className='text-bright-sun-400 bg-mine-shaft-900 size-7 rounded-xl p-1' />}
                getCreateLabel={(query: any) => `+ Create ${query}`}
                onCreate={(query: any) => {
                    const item = { value: query, label: query };
                    setData((current) => [...current, item]);
                    return item;
                }}
            />
        </div>
    )
}

export default MultiSelectComponent
