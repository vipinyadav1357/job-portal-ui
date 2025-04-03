import React, { useEffect, useMemo, useState } from 'react'
import { MultiSelect } from '@mantine/core'; // Example library import
import { IconChevronDown, IconProps, } from '@tabler/icons-react';
interface DropdownItem {
    title: string;
    icon: React.FC<IconProps>;
    options: string[];
}

// Define props type
interface DropdownFiltersProps {
    item: DropdownItem;
}
const MultiSelectComponent: React.FC<DropdownFiltersProps> = ({ item }) => {
    const [data, setData] = useState<string[]>([]);
    const [selected, setSelected] = useState<string[]>([]);
    // const [search, setSearch] = useState('');
    useEffect(() => {
        setData(item.options)

    }, [item.options])
    useEffect(() => {
        console.log("Updated Data:", data);
    }, [data]);
    // const [disabled, setDisabled] = useState(false);
    // const [label, setLabel] = useState('Creatable MultiSelect');
    // const [placeholder, setPlaceholder] = useState('Select items');
    // const [clearableValue, setClearableValue] = useState(false);
    // const [valueLabel, setValueLabel] = useState('Selected items');
    // const [searchableValue, setSearchableValue] = useState('Searchable');
    // const [disabledValue, setDisabledValue] = useState('Disabled');
    // const [labelValue, setLabelValue] = useState('Label');
    return (
        <div className=''>
            <MultiSelect
                key={item.title}
                label={item.title}
                data={data.map((option, index) => ({ value: option, label: option }))}
                placeholder={`Select ${item.title}`}
                value={selected}
                onChange={(selectedValues) => {
                    console.log("New selection:", selectedValues);
                    setSelected(selectedValues)
                }}
                searchable
                creatable
                clearable
                rightSection={<IconChevronDown size={14} />}
                icon={<item.icon className='text-bright-sun-400 bg-mine-shaft-900 size-7 rounded-xl p-1' />}
                getCreateLabel={(query: any) => `+ Create ${query}`}
                onCreate={(query: string) => {
                    const newItem = { value: query, label: query };
                    // setSelected((prevData) => [...prevData, query]);
                    return newItem;
                }}
                maxSelectedValues={5}
            />
        </div>
    )
}

export default MultiSelectComponent
