import React from 'react';
import {
  Grid,
  TextField,
  InputAdornment,
  Button,
  InputLabel,
  OutlinedInput,
  FormControl,
} from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import LockIcon from '@mui/icons-material/Lock';

import loginService from '../../services/login';

const LoginForm = () => {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [user, setUser] = React.useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const loginUser = await loginService.login({
        username,
        password,
      });
      setUser(loginUser);
      setUsername('');
      setPassword('');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Grid item xs={4}>
        <TextField
          label="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          id="outlined-start-adornment"
          sx={{ m: 1, width: '480px' }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <PersonIcon />
              </InputAdornment>
            ),
          }}
        />
      </Grid>
      <Grid item xs={4}>
        <FormControl sx={{ m: 1, width: '480px' }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">
            Password
          </InputLabel>
          <OutlinedInput
            label="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            startAdornment={
              <InputAdornment position="start">
                <LockIcon />
              </InputAdornment>
            }
          />
        </FormControl>
      </Grid>
      <Grid item xs={4}>
        <Button
          sx={{
            m: 1,
            p: 1.5,
            width: '480px',
          }}
          variant="contained"
          color="primary"
          type="submit"
          size="large"
        >
          LOG IN
        </Button>
      </Grid>
    </form>
  );
};

export default LoginForm;
