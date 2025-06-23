import { Select } from '@mantine/core'
import { IconChevronDown } from '@tabler/icons-react';
import React, { useEffect, useState } from 'react'

const SelectInput = (props: any) => {
    const [data, setData] = useState<string[]>([]);
    const selected = props.form.values[props.name];
    const setSelected = (value: string | null) => props.form.setFieldValue(props.name, value);
    useEffect(() => {
        // let updatedOptions = [...props.options]
        // if (props.value && !updatedOptions.includes(props.value)) {
        //     console.log("Adding value to options:", props.value);
        //     updatedOptions.push(props.value);
        // }
        setData(props.options);
    }, [props.options]);

    return (
        <div className=''>
            <Select className='[&_.mantine-Select-input]:!text-bright-sun-400'
                key={selected}
                label={props.label}
                name={props.label}
                placeholder={props.placeholder}
                data={data.map((option) => ({ value: option, label: option }))}
                value={selected}
                onChange={setSelected}
                rightSection={<IconChevronDown size={14} />}
                icon={<props.leftSection className='text-bright-sun-400 bg-mine-shaft-900 size-7 rounded-xl p-1' />}
                dropdownPosition="bottom"
                withAsterisk
            />
        </div>
    )
}

export default SelectInput
