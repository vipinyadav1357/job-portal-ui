import React, { useEffect, useState } from 'react'
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
    const [search, setSearch] = useState('');
    useEffect(() => {
        setData(item.options)
    }, [item])
    return (
        <div className='text-bright-sun-400'>
            <MultiSelect
                key={item.title}
                label={item.title}
                title={item.title}
                data={data.map((option) => ({ value: option, label: option }))}
                placeholder={`Select ${item.title}`}
                value={selected}
                onChange={(selectedValues) => {
                    setSelected(selectedValues)
                }}
                searchValue={search}
                onSearchChange={setSearch}
                searchable
                creatable
                clearable
                rightSection={<IconChevronDown size={14} />}
                icon={<item.icon className='text-bright-sun-400 bg-mine-shaft-900 size-7 rounded-xl p-1' />}
                getCreateLabel={(query: any) => `+ Create ${query}`}
                dropdownPosition="bottom"
                onCreate={(query: string) => {
                    setData((prevData) => [...prevData, query]);
                    return query;
                }}
            />
        </div>
    )
}

export default MultiSelectComponent
