import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import Button from '@mui/material/Button';

import DrawerHeader from '../../components/DrawerHeader';

const Login = () => {
  return (
    <Box 
      component="main"
      sx={{ marginLeft: '2rem', marginRight: '2rem' }}
    >
      <DrawerHeader />
      <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
        <div>
          <Typography variant="h3" gutterBottom>LOG IN</Typography>
          <TextField
            label="With normal TextField"
            id="outlined-start-adornment"
            sx={{ m: 1 }}
          />
          <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
          <OutlinedInput
            label="Password"
          />
        </FormControl>
        <Button variant="contained" color="primary" type="submit">LOG IN</Button>
        </div>
      </Box>
    </Box>
)};

export default Login;