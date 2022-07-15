import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
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

import { setUser } from '../../reducers/userReducer';
import loginService from '../../services/login';
import MessageAlert from '../../components/MessageAlert';

const LoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [errorMessage, setErrorMessage] = React.useState(null);
  const [successMessage, setSuccessMessage] = React.useState(null);
  const [open, setOpen] = React.useState(true);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setOpen(true);

    try {
      const loginUser = await loginService.login({
        username,
        password,
      });

      setUsername('');
      setPassword('');
      window.localStorage.setItem('user', JSON.stringify(loginUser));
      dispatch(setUser(loginUser));
      setSuccessMessage(`Welcome ${loginUser.name}, redirecting...`);

      setTimeout(() => {
        setSuccessMessage(null);
        navigate('/');
      }, 5000);
    } catch (error) {
      setErrorMessage(error.response.data.error);

      setTimeout(() => {
        setErrorMessage(null);
      }, 10000);
    }
  };

  return (
    <form onSubmit={handleSubmit} autoComplete="off">
      {successMessage && (
        <Grid item xs={12}>
          <MessageAlert
            message={successMessage}
            open={open}
            setOpen={setOpen}
          />
        </Grid>
      )}
      {errorMessage && (
        <Grid item xs={12}>
          <MessageAlert
            message={errorMessage}
            open={open}
            setOpen={setOpen}
            error
          />
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
            type="password"
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
          disabled={user || !username || !password ? true : false}
        >
          LOG IN
        </Button>
      </Grid>
    </form>
  );
};

export default LoginForm;
