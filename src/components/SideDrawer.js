import {
  Divider,
  Drawer,
  List,
  ListItemButton,
  ListItemText,
  Toolbar,
} from '@mui/material';
import { filterByProfessionName } from '../reducers/craftablesDataReducer';
import { useSelector, useDispatch } from 'react-redux';
import React from 'react';

const SideDrawer = ({ drawerWidth }) => {
  const dispatch = useDispatch();
  const professions = useSelector((state) => state.professions);

  return (
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: drawerWidth,
          boxSizing: 'border-box',
        },
      }}
      variant="permanent"
      anchor="left"
    >
      <Toolbar />
      <Divider />
      <List>
        {professions &&
          professions.map((x) => (
            <ListItemButton
              key={x}
              onClick={() => dispatch(filterByProfessionName(x))}
            >
              <ListItemText>{x}</ListItemText>
            </ListItemButton>
          ))}
      </List>
    </Drawer>
  );
};

export default SideDrawer;
