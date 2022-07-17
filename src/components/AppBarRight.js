import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { styled, alpha } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Toolbar from '@mui/material/Toolbar';
import MuiAppBar from '@mui/material/AppBar';
import IconButton from '@mui/material/IconButton';
import InputBase from '@mui/material/InputBase';
import Box from '@mui/material/Box';
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';

import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import PersonIcon from '@mui/icons-material/Person';
import EventNoteIcon from '@mui/icons-material/EventNote';
import LogoutIcon from '@mui/icons-material/Logout';

import MenuButton from './MenuButton';

import { setUser } from '../reducers/userReducer';
import { changeActiveProfession } from '../reducers/activeProfessionReducer';
import { showAllCraftables } from '../reducers/craftablesDataReducer';
import isAdmin from '../utils/isAdmin';

const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

const AppBarRight = ({ open, handleDrawerOpen }) => {
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);

  const handleLogout = () => {
    window.localStorage.removeItem('user');
    dispatch(setUser(null));
    navigate('/');
    dispatch(showAllCraftables());
    dispatch(changeActiveProfession('All items'));
  };

  const handleLogoClick = () => {
    dispatch(changeActiveProfession('All items'));
    dispatch(showAllCraftables());
  };

  return (
    <AppBar
      position="fixed"
      open={open}
      sx={{
        borderBottom: '1px solid rgba(255, 255, 255, 0.12)',
        background: '#082032',
      }}
    >
      <Toolbar>
        {(pathname !== '/login' || pathname !== 'register') && (
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: '36px',
              ...(open && { display: 'none' }),
            }}
          >
            <MenuIcon />
          </IconButton>
        )}
        <Box
          sx={{
            p: 0,
            m: 0,
            width: '100%',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <MenuButton
            text="Ana | Auction"
            urlTo="/"
            handleClick={handleLogoClick}
          />
          <Box sx={{ display: 'flex' }}>
            <Search sx={{ marginRight: '1rem' }}>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search..."
                inputProps={{ 'aria-label': 'search' }}
              />
            </Search>
            {!user ? (
              <ButtonGroup variant="contained">
                <MenuButton
                  text="Log in"
                  urlTo="/login"
                  startIcon={<PersonIcon />}
                />
                <MenuButton
                  color="warning"
                  text="Register"
                  urlTo="/register"
                  startIcon={<EventNoteIcon />}
                />
              </ButtonGroup>
            ) : (
              <ButtonGroup variant="contained">
                <Button color="primary">
                  <Typography variant="button">{`Hello, ${user.username}`}</Typography>
                </Button>
                <Button
                  color="error"
                  onClick={handleLogout}
                  endIcon={<LogoutIcon />}
                >
                  <Typography variant="button">Logout</Typography>
                </Button>
              </ButtonGroup>
            )}
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default AppBarRight;
