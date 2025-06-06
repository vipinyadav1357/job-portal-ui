import { Modal, TextInput, Button } from '@mantine/core'
import React, { useState } from 'react'

interface Props {
    opened: boolean;
    close: () => void;
}
const ResetPassword = ({ opened, close }: Props) => {
    const [email, setEmail] = useState<string>("");
    return (
        <div>
            <Modal
                opened={opened}
                title="Enter your email"
                onClose={close}
                overlayOpacity={0.25}
                overlayBlur={1}
                centered
                overlayColor="#c5c5c5"
                size="lg"

            >
                <div className='flex items-end justify-between border-2 border-gray-500 py-4 px-2 rounded-lg'>
                    <TextInput
                        className='w-3/4'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        label="Email"
                        name="email"
                        placeholder="Enter your email"
                        size='md'
                        withAsterisk />

                    <Button
                        className='w-1/6 p-0'
                        variant='filled'
                        color='brightSun.4'
                        bg={"brightSun.4/10"}
                        size='md'

                    >
                        Send Otp</Button>
                </div>
            </Modal>
        </div>
    )
}

export default ResetPassword


