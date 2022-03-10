import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setAuctionData } from './reducers/ahDataReducer';
import { getProfessions } from './reducers/professionsReducer';
import { showAllCraftables } from './reducers/craftablesDataReducer';
import { Box, CssBaseline, ThemeProvider, createTheme } from '@mui/material';

import MainContent from './components/MainContent';
import AppBarRight from './components/AppBarRight';
import SideDrawer from './components/SideDrawer';

const App = () => {
  const dispatch = useDispatch();
  const [open, setOpen] = React.useState(false);

  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
      primary: {
        main: '#00C6B6',
      },
      secondary: {
        main: '#99AEC5',
      },
      text: {
        primary: '#BEC5CC',
      },
      background: {
        paper: '#082032',
        default: '#082032',
      },
    },
    typography: {
      h3: {
        color: '#00C6B6',
        margin: '2rem 0',
      },
    },
  });

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
    <ThemeProvider theme={darkTheme}>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBarRight open={open} handleDrawerOpen={handleDrawerOpen} />
        <SideDrawer
          theme={darkTheme}
          open={open}
          handleDrawerClose={handleDrawerClose}
        />
        <MainContent />
      </Box>
    </ThemeProvider>
  );
};

export default App;
