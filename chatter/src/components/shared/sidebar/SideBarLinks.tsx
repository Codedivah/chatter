import React from "react";
import { Link } from "react-router-dom";
import { IOverviewMenu } from "./sidebarData";
import { Box } from "@mui/material";

type ILinkProp = {
  link: IOverviewMenu;
};

const SideBarLinks = ({ link }: ILinkProp) => {
  return (
    <Link
      to={link.path}
      className='flex gap-x-2 font-light px-3 py-1 text-[14px] items-center hover:bg-red-300 hover:no-underline'
    >
      <Box component='span'>{link.icon}</Box>
      <Box component='span'>{link.label}</Box>
    </Link>
  );
};

export default SideBarLinks;
