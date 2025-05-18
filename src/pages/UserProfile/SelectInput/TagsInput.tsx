import { useState } from 'react';
import { Input, Badge, CloseButton } from '@mantine/core';
import { IconAsterisk } from '@tabler/icons-react';

const TagsInput = (props: any) => {
    const [tags, setTags] = useState<string[]>(props.skills || []);
    const [inputValue, setInputValue] = useState('');

    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if ((event.key === 'Enter' || event.key === ' ') && inputValue.trim() !== '') {
            event.preventDefault();
            if (!tags.includes(inputValue.trim())) {
                setTags([...tags, inputValue.trim()]);
                props.updateSkill(inputValue.trim());
                setInputValue('');
            }
        }
    };

    const removeTag = (tagToRemove: string) => {
        setTags(tags.filter((tag) => tag !== tagToRemove));
        props.handleDelete(tagToRemove);
    };

    return (
        <div>
            <label className=" text-sm mb-1">Enter Skills <IconAsterisk height={10} width={10} className='inline-block text-bright-sun-400' /> </label>
            <div className="flex flex-wrap gap-2 mb-2">
                {tags.map((tag) => (
                    <Badge
                        key={tag}
                        variant="filled"
                        color="brighSun.4"
                        rightSection={
                            <CloseButton
                                onClick={() => removeTag(tag)}
                                size="xs"
                                style={{ marginLeft: 4 }}
                            />
                        }
                        className='[&_.mantine-Badge-root]:!bg-bright-sun-300 [&_.mantine-Badge-root]:!text-bright-sun-400 [&_.mantine-Badge-root]:!border-bright-sun-400 [&_.mantine-Badge-root]:!border-2'
                    >
                        {tag}
                    </Badge>
                ))}
            </div>

            <Input
                placeholder="Type something and press Enter or space"
                value={inputValue}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setInputValue(e.currentTarget.value)}
                onKeyDown={handleKeyDown}
                className='[&_.mantine-Input-input]:!text-bright-sun-400  focus:[&_.mantine-Input-input]:!border-bright-sun-400 '
            />
        </div>
    );
};

export default TagsInput;
