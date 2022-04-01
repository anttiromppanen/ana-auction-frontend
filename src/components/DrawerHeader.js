import { styled } from '@mui/material';

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(-1, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

export default DrawerHeader;