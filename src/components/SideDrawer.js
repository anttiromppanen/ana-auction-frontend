import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, Link } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import MuiDrawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListItemButton from '@mui/material/ListItemButton';
import Divider from '@mui/material/Divider';

import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import IconButton from '@mui/material/IconButton';
import ScienceOutlinedIcon from '@mui/icons-material/ScienceOutlined';
import CheckroomIcon from '@mui/icons-material/Checkroom';
import AllInclusiveIcon from '@mui/icons-material/AllInclusive';
import StarBorderIcon from '@mui/icons-material/StarBorder';

import {
  filterByProfessionName,
  showAllCraftables,
  showFavorites,
} from '../reducers/craftablesDataReducer';
import { changeActiveProfession } from '../reducers/activeProfessionReducer';

const drawerWidth = 240;

const menuIconSelector = (profession) => {
  switch (profession) {
    case 'Alchemy':
      return (
        <ListItemIcon>
          <ScienceOutlinedIcon fontSize="large" />
        </ListItemIcon>
      );
    case 'Tailoring':
      return (
        <ListItemIcon>
          <CheckroomIcon fontSize="large" />
        </ListItemIcon>
      );
    default:
      return;
  }
};

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(9)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: 'nowrap',
  boxSizing: 'border-box',
  ...(open && {
    ...openedMixin(theme, drawerWidth),
    '& .MuiDrawer-paper': openedMixin(theme, drawerWidth),
  }),
  ...(!open && {
    ...closedMixin(theme),
    '& .MuiDrawer-paper': closedMixin(theme),
  }),
}));

const SideDrawer = ({ theme, open, handleDrawerClose }) => {
  const dispatch = useDispatch();
  const professions = useSelector((state) => state.professions);
  const user = useSelector((state) => state.user);
  const { pathname } = useLocation();

  if (pathname === '/login' || pathname === '/register') return null;

  return (
    <Drawer variant="permanent" open={open}>
      <DrawerHeader>
        <IconButton onClick={handleDrawerClose}>
          {theme.direction === 'rtl' ? (
            <ChevronRightIcon />
          ) : (
            <ChevronLeftIcon />
          )}
        </IconButton>
      </DrawerHeader>
      <Divider />
      <List>
        <ListItemButton
          component={Link}
          to="/"
          onClick={() => {
            dispatch(showAllCraftables());
            dispatch(changeActiveProfession('All items'));
          }}
        >
          <ListItemIcon>
            <AllInclusiveIcon fontSize="large" />
          </ListItemIcon>
          <ListItemText>All items</ListItemText>
        </ListItemButton>
        {professions &&
          professions.map((x) => (
            <ListItemButton
              component={Link}
              to={`/profession/${x}`.toLowerCase()}
              key={x}
              onClick={() => {
                dispatch(filterByProfessionName(x));
                dispatch(changeActiveProfession(x));
              }}
            >
              {menuIconSelector(x)}
              <ListItemText>{x}</ListItemText>
            </ListItemButton>
          ))}
        <Divider />
        {user && (
          <ListItemButton
            component={Link}
            to="/favorites"
            onClick={() => {
              dispatch(showFavorites(user && user.favorites));
              dispatch(changeActiveProfession('Favorites'));
            }}
          >
            <ListItemIcon>
              <StarBorderIcon fontSize="large" />
            </ListItemIcon>
            <ListItemText>Favorites</ListItemText>
          </ListItemButton>
        )}
      </List>
    </Drawer>
  );
};

export default SideDrawer;
