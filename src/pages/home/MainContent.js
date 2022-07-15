import React from 'react';
import Box from '@mui/material/Box';

import ShowAhData from './ShowAhData';
import DrawerHeader from '../../components/DrawerHeader';

const MainContent = () => {
  return (
    <Box component="main" sx={{ flexGrow: 1, p: 2 }}>
      <DrawerHeader />
      <ShowAhData />
    </Box>
  );
};

export default MainContent;
