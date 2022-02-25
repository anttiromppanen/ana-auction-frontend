import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setAuctionData } from './reducers/ahDataReducer';
import { getProfessions } from './reducers/professionsReducer';
import { showAllCraftables } from './reducers/craftablesDataReducer';
import { Box, CssBaseline, useTheme } from '@mui/material';

import MainContent from './components/MainContent';
import AppBarRight from './components/AppBarRight';
import SideDrawer from './components/SideDrawer';

const App = () => {
  const dispatch = useDispatch();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    dispatch(showAllCraftables());
    dispatch(getProfessions());
    dispatch(setAuctionData());
  }, [dispatch]);

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBarRight open={open} handleDrawerOpen={handleDrawerOpen} />
      <SideDrawer
        theme={theme}
        open={open}
        handleDrawerClose={handleDrawerClose}
      />
      <MainContent />
    </Box>
  );
};

export default App;
