import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const links: { name: string, url: string }[] = [
    { name: "Find Jobs", url: "find-jobs" },
    { name: "Find Talent", url: "find-talent" },
    { name: "Upload Jobs", url: "upload-jobs" },
    { name: "About Us", url: "about" }
]
const renderlinks = (location: any) => {
    return (links.map((link, index) =>
        <div className={`${location.pathname === "/" + link.url ? "border-b-[3px] border-bright-sun-400 text-bright-sun-400 h-fit flex items-center" : ""}`}>
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
