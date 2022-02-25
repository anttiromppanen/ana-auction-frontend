import React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';

import ShowAhData from './ShowAhData';

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const MainContent = () => {
  return (
    <Box component="main" sx={{ flexGrow: 1, p: 2 }}>
      <DrawerHeader />
      <ShowAhData />
    </Box>
  );
};

export default MainContent;
