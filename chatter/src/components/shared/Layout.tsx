import { Box } from "@mui/material";
import React from "react";
import Sidebar from "./sidebar/Sidebar";
import Header from "./Header";

type ILayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: ILayoutProps) => {
  return (
    <Box className='flex flex-auto min-h-screen fixed w-full h-full top-0 flex-shrink antialiased bg-[#fafafa]'>
      <Sidebar />
      <Box className='flex flex-col flex-grow flex-1 h-full w-full overflow-y-scroll overflow-x-hidden '>
        <Header />
        <Box className='flex-1 min-h-0 h-full overflow-y-scroll '>
          {children}
        </Box>
      </Box>
    </Box>
  );
};

export default Layout;
