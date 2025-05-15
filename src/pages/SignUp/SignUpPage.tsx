import { IconAnchor } from '@tabler/icons-react'
import React from 'react'
import SignUpComponent from './SignUpComponent'
import LogInComponent from '../LogIn/LogInComponent'
import { useLocation } from 'react-router-dom'

const SignUpPage = () => {
    const location = useLocation();
    return (
        <div className="min-h-[100vh] text-mine-shaft-100 bg-mine-shaft-950 font-['poppins'] overflow-hidden" >
            <div className={`w-[100vw] h-[100vh] flex [&>*]:flex-shrink-0 ${location.pathname === "/sign-up" ? "-translate-x-1/2" : " "} transition-all duration-500 ease-in-out `}>
                <LogInComponent />
                <div className={`w-1/2 h-full ${location.pathname === "/log-in" ? "rounded-l-[200px]" : "rounded-r-[200px]"} transition-all duration-500 ease-in-out bg-mine-shaft-900 flex flex-col justify-center items-center gap-5`}>
                    <div className="flex gap-1 items-center text-bright-sun-400">
                        <IconAnchor className="h-14 w-14" stroke={"4.5"} />
                        <div className=" text-6xl font-bold tracking-wider [text-shadow:_0px_1px_3px_#f99b07,_-0px_1px_3px_#f99b07,_-0px_1px_3px_#f99b07,_0px_-1px_3px_#f99b07]">ViJobS</div>
                    </div>
                    <div className='text-2xl text-mine-shaft-300 font-semibold'>Find the job made fou you</div>
                </div>
                <SignUpComponent />
            </div>
        </div>
    )
}

export default SignUpPage
