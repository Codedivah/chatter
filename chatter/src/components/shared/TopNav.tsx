import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

const menuData = [
  { title: "Home", link: "/" },
  { title: "About us", link: "/about" },
  { title: "Contact ", link: "/contact" },
  { title: "Blogs", link: "/blog" },
];

const TopNav = () => {
  const navigate = useNavigate();
  return (
    <Box className='flex items-center justify-between px-5 shadow w-full py-3'>
      <Box>
        <Typography
          variant='h5'
          className='font-bold text-purple-500 text-[20px]'
        >
          Chatter
        </Typography>
      </Box>
      <Box className='flex items-center gap-10'>
        {menuData.map((menu) => (
          <NavLink key={menu.title} to={menu.link}>
            {menu.title}
          </NavLink>
        ))}
      </Box>
      <Box className='flex items-center gap-10'>
        <Button variant='outlined' onClick={() => navigate("/auth/login")}>
          Log in
        </Button>
        <Button
          variant='contained'
          onClick={() => navigate("/auth")}
          className='text-white bg-purple-500 hover:bg-purple-500/80'
        >
          Sign Up
        </Button>
      </Box>
    </Box>
  );
};

export default TopNav;
