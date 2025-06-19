import { Indicator, } from "@mantine/core";
import { IconAnchor, IconBell, IconSettings } from "@tabler/icons-react";
import React, { useEffect, useRef } from "react";
import NavLinks from "./NavLinks";
import gsap from "gsap";
import { Link, useLocation } from "react-router-dom";
import ProfileMenu from "./ProfileMenu";
import { useSelector } from "react-redux";
const Header = () => {
  const divRef = useRef<HTMLDivElement | null>(null);
  const location = useLocation();
  const user = useSelector((state: any) => state.user);

  useEffect(() => {
    const timeout = setTimeout(() => {
      const ref = divRef.current;
      if (!ref) return;
      // const children = Array.from(ref.children);

      const children = ref.querySelectorAll('*');
      const tl = gsap.timeline();
      tl.from(children, {
        y: -30,
        opacity: 0,
        duration: 0.5,
        stagger: 0.05,
        ease: "power2.out",
      });
    }, 100); // Delay to wait for full mount
    return () => clearTimeout(timeout);
  }, [])
  return (
    (location.pathname !== "/sign-up" && location.pathname !== "/log-in") ? <div ref={divRef} className="w-full font-['poppins'] bg-mine-shaft-950 text-white h-24 px-8 flex justify-between items-center">
      <div className="flex gap-1 items-center text-bright-sun-400">
        <IconAnchor className="h-9 w-9" stroke={"4.5"} />
        <div className=" text-4xl font-bold tracking-wider [text-shadow:_0px_1px_3px_#f99b07,_-0px_1px_3px_#f99b07,_-0px_1px_3px_#f99b07,_0px_-1px_3px_#f99b07]">ViJobS</div>
      </div>
      <div >
        <NavLinks />
      </div>

      <div className="flex gap-3 items-center">
        {
          user ?
            <ProfileMenu />
            :
            <Link
              to="/log-in"
              className="text-bright-sun-400 hover:text-bright-sun-500 transition-colors duration-200"
            >
              log-in
            </Link>}
        {/* <div className="bg-mine-shaft-900 p-2 rounded-full">
          <Indicator color="brightSun.4" processing size={9} offset={3} disabled>
            <IconSettings stroke={1.25} />
          </Indicator>
        </div> */}
        <div className="bg-mine-shaft-900 p-2 rounded-full ">
          <Indicator color="brightSun.4" processing size={9} offset={3}>
            <IconBell stroke={1.25} />
          </Indicator>
        </div>
      </div>
    </div > : <></>
  );
};

export default Header;
