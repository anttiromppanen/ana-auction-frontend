import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import DrawerHeader from '../../components/DrawerHeader';

const Login = () => {
  return (
    <Box component="main" sx={{ marginLeft: '2rem', marginRight: '2rem' }}>
      <DrawerHeader />
      <Typography variant="h3">LOG IN</Typography>
    </Box>
)};

export default Login;