import { Modal, TextInput, Button } from '@mantine/core';
import React, { useState } from 'react'
import { sendOtp, verifyOtp } from '../../services/UserServices';
import OTPInput, { InputProps } from 'react-otp-input';
import { useNavigate } from 'react-router-dom';

interface Props {
    opened: boolean;
    close: () => void;
}
const ResetPassword = ({ opened, close }: Props) => {
    const naviagte = useNavigate();
    const [email, setEmail] = useState<string>("anvii0753@gmail.com");
    const [otpSent, setOtpSent] = useState<boolean>(false);
    const [otpSending, setOtpSending] = useState<boolean>(false);
    const [otp, setOtp] = useState<string>("");
    // const [otpVerifing, setOtpVerifing] = useState<boolean>(false);
    const handleOtpSend = async () => {
        // Logic to send OTP to the provided email
        setOtpSending(true);
        await sendOtp(email)
            .then((res) => {
                setOtpSent(true);
                setOtpSending(false);
                console.log("OTP sent successfully:", res);
            }).catch((err) => {
                setOtpSending(false);
                console.error("Error sending OTP:", err.response.data.error);
            });
        // Close the modal after sending OTP
    }
    const otpVerify = async () => {
        setOtpSending(true);
        await verifyOtp(otp, email)
            .then((res) => {
                setOtpSending(false);
                naviagte("/log-in"); // Redirect to reset password page
                close(); // Close the modal
                console.log("OTP verified successfully:", res);
                // Here you can redirect to the reset password page or show a success message
            }).catch((err) => {
                setOtpSending(false);
                console.error("Error verifying OTP:", err.response.data.error);
            });
    }
    return (
        <Modal
            opened={opened}
            title={otpSent ? "Enter OTP" : "Reset Password"}
            onClose={close}
            overlayOpacity={0.25}
            overlayBlur={1}
            centered
            overlayColor="#c5c5c5"
            size="lg"
        >
            <div className="flex flex-col items-center justify-center gap-6 ">
                {otpSent ? (
                    <><OTPInput
                        value={otp}
                        onChange={setOtp}
                        numInputs={6}
                        inputStyle={{
                            width: "3rem",
                            height: "3rem",
                            margin: "0 0.5rem",
                            fontSize: "1.5rem",
                            borderRadius: 4,
                            border: "3px solid #ffbd20",
                            color: "#3d3d3d",
                            backgroundColor: "white",
                        }}
                        renderInput={(props: InputProps) => <input {...props} />}
                    />
                        <Button
                            variant="filled"
                            className='w-3/5'
                            color="brightSun.4 "
                            bg={"brightSun.4/10"}
                            size="md"
                            loading={otpSending}
                            loaderPosition="center"
                            onClick={otpVerify}
                        >
                            verify otp
                        </Button>
                    </>
                ) : (
                    <div
                        className={`w-full ${otpSending ? '!cursor-not-allowed' : '!cursor-pointer'}`}
                    >
                        <div className="flex items-end justify-between border-2 border-gray-500 py-4 px-2 rounded-lg">
                            <TextInput
                                className="w-3/4"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                label="Email"
                                name="email"
                                placeholder="Enter your email"
                                size="md"
                                withAsterisk
                            />

                            <Button
                                className="w-1/6 p-0"
                                variant="filled"
                                color="brightSun.4"
                                bg={"brightSun.4/10"}
                                size="md"
                                loading={otpSending}
                                loaderPosition="center"
                                fullWidth
                                disabled={!email.endsWith("@gmail.com") || otpSent}
                                data-active={otpSent}
                                onClick={handleOtpSend}
                            >
                                Send OTP
                            </Button>
                        </div>
                    </div>
                )}
            </div>
        </Modal >
    )
}

export default ResetPassword


