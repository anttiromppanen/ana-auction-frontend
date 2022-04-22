import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Grid,
  TextField,
  InputAdornment,
  Button,
  InputLabel,
  OutlinedInput,
  FormControl,
  Alert,
  Collapse,
  IconButton,
} from '@mui/material';

import PersonIcon from '@mui/icons-material/Person';
import LockIcon from '@mui/icons-material/Lock';
import CloseIcon from '@mui/icons-material/Close';

import { setUser } from '../../reducers/userReducer';
import loginService from '../../services/login';

const LoginForm = () => {
  const dispatch = useDispatch();
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [errorMessage, setErrorMessage] = React.useState(null);
  const [open, setOpen] = React.useState(true);

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
      window.localStorage.setItem('user', JSON.stringify(loginUser));
      dispatch(setUser(loginUser));
    } catch (error) {
      setErrorMessage(error.response.data.error);
      setOpen(true);

      setTimeout(() => {
        setErrorMessage(null);
      }, 10000);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {errorMessage && (
        <Grid item xs={12}>
          <Collapse in={open}>
            <Alert
              action={
                <IconButton
                  aria-label="close"
                  color="inherit"
                  size="small"
                  onClick={() => setOpen(false)}
                >
                  <CloseIcon fontSize="inherit" />
                </IconButton>
              }
              sx={{ m: 1, marginTop: 0 }}
              variant="filled"
              severity="error"
            >
              {errorMessage}
            </Alert>
          </Collapse>
        </Grid>
      )}
      <Grid item xs={12}>
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
      <Grid item xs={12}>
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
      <Grid item xs={12}>
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
