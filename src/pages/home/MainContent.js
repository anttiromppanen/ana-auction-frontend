import React from 'react';
import Box from '@mui/material/Box';
import { useSelector } from 'react-redux';

import ShowAhData from './ShowAhData';
import DrawerHeader from '../../components/DrawerHeader';

const MainContent = () => {
  const user = useSelector((state) => state.user);

  return (
    <Box component="main" sx={{ flexGrow: 1, p: 2 }}>
      <DrawerHeader />
      <ShowAhData />
    </Box>
  );
};

export default MainContent;
