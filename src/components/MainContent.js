import { Box, Toolbar } from '@mui/material';
import React from 'react';
import ShowAhData from './ShowAhData';

const MainContent = () => {
  return (
    <Box component="main" sx={{ flexGrow: 1, bgcolor: 'background.default' }}>
      <Toolbar />
      <ShowAhData />
    </Box>
  );
};

export default MainContent;
