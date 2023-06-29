import { Box, Button, Typography } from "@mui/material";
import React from "react";

const Hero = () => {
  return (
    <Box className='relative h-[600px]'>
      <Box
        component='img'
        src='https://images.unsplash.com/photo-1595479310824-2dfe9df03cb9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHByZXR0eXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60'
        className='absolute pointer-events-none w-full h-[600px] object-cover'
      />
      <Box className='bg-black/20 w-full h-full absolute inset-0' />
      <Box className='h-full relative'>
        <Box className='px-20 pt-32'>
          <Typography variant='h3'>
            Welcome to Chatter: A Haven for Text-Based Content
          </Typography>
          <Typography variant='body1'>
            Unleash the Power of Words, Connect with Like-minded Readers and
            Writers
          </Typography>
          <Button>Get Started</Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Hero;
