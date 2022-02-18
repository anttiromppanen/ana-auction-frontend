import {
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Toolbar,
} from '@mui/material';
import React from 'react';

const SideDrawer = ({ drawerWidth }) => {
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
        <ListItem button>
          <ListItemText>Alchemy</ListItemText>
        </ListItem>
      </List>
    </Drawer>
  );
};

export default SideDrawer;
