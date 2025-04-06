import React, { useEffect, useState } from 'react'
import { Select } from '@mantine/core'; // Example library import
import { IconAdjustments, IconChevronDown, } from '@tabler/icons-react';
// interface DropdownItem {
//     title: string;
//     icon: React.FC<IconProps>;
//     options: string[];
// }

// Define props type
// interface DropdownFiltersProps {
//     item: DropdownItem;
// }
const SelectComponent: React.FC = () => {
    const [data, setData] = useState<string[]>([]);
    const [selected, setSelected] = useState<string | null>('Relevance');
    useEffect(() => {
        setData(["Relevance", "Most Recent", "Salary(low to high)", "Salary(high to low)"])
    }, [])
    // const [disabled, setDisabled] = useState(false);
    // const [label, setLabel] = useState('Creatable MultiSelect');
    // const [placeholder, setPlaceholder] = useState('Select items');
    // const [clearableValue, setClearableValue] = useState(false);
    // const [valueLabel, setValueLabel] = useState('Selected items');
    // const [searchableValue, setSearchableValue] = useState('Searchable');
    // const [disabledValue, setDisabledValue] = useState('Disabled');
    // const [labelValue, setLabelValue] = useState('Label');
    return (
        <div className='text-bright-sun-400'>
            <Select
                key={selected}
                label={"Sort Jobs By"}
                data={data.map((option) => ({ value: option, label: option }))}
                value={selected}
                onChange={(selectedValues) => setSelected(selectedValues)}
                rightSection={<IconChevronDown size={14} />}
                icon={<IconAdjustments className='text-bright-sun-400 bg-mine-shaft-900 size-7 rounded-xl p-1' />}
            />
        </div>
    )
}

export default SelectComponent
