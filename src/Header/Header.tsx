import { Avatar, Indicator, NavLink, } from "@mantine/core";
import { IconAnchor, IconBell, IconSettings } from "@tabler/icons-react";
import React from "react";
import dhoni from "./dhoni.jpg"
import NavLinks from "./NavLinks";
const Header = () => {
  return (
    <div className="w-full bg-mine-shaft-950 text-white h-24 px-8 flex justify-between items-center">
      <div className="flex gap-1 items-center text-bright-sun-400">
        <IconAnchor className="h-8 w-8" stroke={3} />
        <div className=" text-4xl font-semibold">ViJobS</div>
      </div>

      <NavLinks />

      <div className="flex gap-3 items-center">
        <div className="flex gap-3 items-center">
          <div>Marshal</div>
          <Avatar className="w-10 h-10 rounded-full overflow-hidden object-cover" src={dhoni} />
          {/* <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-fuchsia-500">
            <Avatar src={dhoni} />
            </div> */}
        </div>
        <div className="bg-mine-shaft-900 p-2 rounded-full">
          <Indicator color="brightSun.4" processing size={9} offset={3} disabled>
            <IconSettings stroke={1.25} />
          </Indicator>

        </div>
        <div className="bg-mine-shaft-900 p-2 rounded-full ">
          <Indicator color="brightSun.4" processing size={9} offset={3}>
            <IconBell stroke={1.25} />
          </Indicator>
        </div>
      </div>
    </div >
  );
};

export default Header;
