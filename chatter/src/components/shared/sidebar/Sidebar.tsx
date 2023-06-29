import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { overviewMenu, personal, trendingTag } from "./sidebarData";
import SideBarLinks from "./SideBarLinks";
import { DB_USER } from "../../../constant/https/config";
import { useAppDispatch } from "../../../constant/redux/hooks";
import { setIsLogin } from "../../../constant/redux/auth/authSlice";
import { useNavigate } from "react-router-dom";
import { AiOutlineLogout } from "react-icons/ai";

const Sidebar = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const handleLogOut = () => {
    localStorage.removeItem(DB_USER);
    dispatch(setIsLogin(false));
    navigate("/auth/login");
  };
  return (
    <Box
      component='aside'
      className='w-[200px] bg-white border-r-2 border-solid border-r-gray-200 p-3 flex flex-col items-center'
    >
      <Box className='flex items-center gap-2 px-1 py-3'>
        <Typography variant='h4'>Chatter</Typography>
      </Box>
      <Box>
        {/* overview */}
        <Box>
          <Typography variant='h6' className='font-semibold my-2 text-lg'>
            Overview
          </Typography>
          <Box className='pl-2'>
            {overviewMenu.map((d) => {
              return <SideBarLinks key={d.key} link={d} />;
            })}
          </Box>
        </Box>
        {/* tasks */}
        <Box>
          <Typography variant='h6' className='font-semibold my-2 text-lg'>
            Trending
          </Typography>
          <Box className='pl-2'>
            {trendingTag.map((d) => {
              return <SideBarLinks key={d.key} link={d} />;
            })}
          </Box>
        </Box>
        {/* personal */}
        <Box>
          <Typography variant='h6' className='font-semibold my-2 text-lg'>
            Personal
          </Typography>
          <Box className='pl-2'>
            {personal.map((d) => {
              return <SideBarLinks key={d.key} link={d} />;
            })}
            <Button
              className='flex gap-x-2 font-light px-3 py-1 text-[14px] items-center hover:bg-red-300 hover:no-underline'
              onClick={handleLogOut}
            >
              <Box component='span'>
                <AiOutlineLogout />
              </Box>
              <Box component='span'>log out</Box>
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Sidebar;
