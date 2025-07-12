import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const links: { name: string, url: string }[] = [
    { name: "Find Jobs", url: "find-jobs" },
    { name: "Find Talent", url: "find-talent" },
    { name: "Post Jobs", url: "post-job/0" },
    { name: "Posted jobs", url: "posted-job/0" },
    { name: "Job history", url: "job-history" },
    { name: "sign-up", url: "sign-up" },
]
const renderlinks = (location: any) => {
    return (links.map((link, index) =>
        <div key={index} className={`${location.pathname === "/" + link.url ? "border-b-[3px] border-bright-sun-400 text-bright-sun-400 h-fit flex items-center [text-shadow:_0px_0px_1.6px_#f99b07,_-0px_-0px_1.6px_#f99b07,_-0px_0px_1.6px_#f99b07,_0px_-0px_1.6px_#f99b07]" : "hover:border-b-[3px] hover:border-bright-sun-400 hover:text-bright-sun-400 hover:h-fit hover:flex hover:items-center"}`}>
            <Link key={index} to={`/${link.url} `} >
                {link.name}
            </Link>
        </div>
    ));
}
const NavLinks = () => {
    const location = useLocation();
    return (
        <div className="flex gap-7 h-full items-center text-mine-shaft-200">
            {renderlinks(location)}
        </div>
    )
}
export default NavLinks
