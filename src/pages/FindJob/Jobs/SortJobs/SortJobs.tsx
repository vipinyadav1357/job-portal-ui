import React, { useEffect, useState } from 'react'
import { Select } from '@mantine/core'; // Example library import
import { IconAdjustments, IconChevronDown, } from '@tabler/icons-react';

const SortJobs: React.FC = () => {

    const [data, setData] = useState<string[]>([]);
    const [selected, setSelected] = useState<string | null>('Relevance');

    useEffect(() => {
        setData(["Relevance", "Most Recent", "Salary(low to high)", "Salary(high to low)"])
    }, [])

    return (
        <div className=''>
            <Select className='[&_.mantine-Select-input]:!text-bright-sun-400'
                key={selected}
                label={"Sort Jobs By"}
                data={data.map((option) => ({ value: option, label: option }))}
                value={selected}
                onChange={(selectedValues) => setSelected(selectedValues)}
                rightSection={<IconChevronDown size={14} />}
                icon={<IconAdjustments className='text-bright-sun-400 bg-mine-shaft-900 size-7 rounded-xl p-1' />}
                dropdownPosition="bottom"
            />
        </div>
    )
}

export default SortJobs
