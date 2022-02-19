import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setAuctionData } from './reducers/ahDataReducer';
import { filterByAlchemy } from './reducers/craftablesDataReducer';
import SideDrawer from './components/SideDrawer';
import AppBarRight from './components/AppBarRight';
import MainContent from './components/MainContent';

import { Box, CssBaseline } from '@mui/material';

const drawerWidth = 240;

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setAuctionData());
    dispatch(filterByAlchemy());
  }, [dispatch]);

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBarRight drawerWidth={drawerWidth} />
      <SideDrawer drawerWidth={drawerWidth} />
      <MainContent />
    </Box>
  );
};

export default App;
