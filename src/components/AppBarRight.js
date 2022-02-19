import React from 'react';
import { Typography, Toolbar, AppBar } from '@mui/material';

const AppBarRight = ({ drawerWidth }) => {
  return (
    <AppBar
      position="fixed"
      sx={{
        width: `calc(100% - ${drawerWidth}px)`,
        ml: `${drawerWidth}px`,
      }}
    >
      <Toolbar style={{ justifyContent: 'center' }}>
        <Typography variant="h6" noWrap component="div">
          Auction house data
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default AppBarRight;
