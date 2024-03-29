import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { setAuctionData } from './reducers/ahDataReducer';
import { getProfessions } from './reducers/professionsReducer';
import { showAllCraftables } from './reducers/craftablesDataReducer';
import { setUser } from './reducers/userReducer';
import { Box, CssBaseline, ThemeProvider, createTheme } from '@mui/material';

import Home from './pages/home';
import Login from './pages/login';
import Register from './pages/register';
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
      error: {
        main: '#FF8070',
      },
      warning: {
        main: '#F0C6A6',
      },
      text: {
        primary: '#BEC5CC',
      },
      background: {
        paper: '#082032',
        default: '#082032',
      },
      starColor: {
        main: '#F9F871',
      },
    },
    typography: {
      h1: {
        color: '#FFF',
        margin: '2rem 0',
      },
      h2: {
        color: '#FFF',
        margin: '2rem 0',
      },
      h3: {
        color: '#00C6B6',
        margin: '2rem 0',
      },
      h4: {
        color: '#00C6B6',
        margin: '2rem 1rem',
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
    window.sessionStorage.clear();
    dispatch(setAuctionData());
  }, [dispatch]);

  useEffect(() => {
    const loggedUser = window.localStorage.getItem('user');

    if (loggedUser) {
      dispatch(setUser(JSON.parse(loggedUser)));
    }
  }, [dispatch]);

  return (
    <Router>
      <ThemeProvider theme={darkTheme}>
        <Box
          sx={{
            display: 'flex',
          }}
        >
          <CssBaseline />
          <AppBarRight open={open} handleDrawerOpen={handleDrawerOpen} />
          <SideDrawer
            theme={darkTheme}
            open={open}
            handleDrawerClose={handleDrawerClose}
          />
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/favorites" element={<Home />} />
            <Route path="/profession/alchemy" element={<Home />} />
            <Route path="/profession/tailoring" element={<Home />} />
            <Route path="/profession/jewelcrafting" element={<Home />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </Box>
      </ThemeProvider>
    </Router>
  );
};

export default App;
