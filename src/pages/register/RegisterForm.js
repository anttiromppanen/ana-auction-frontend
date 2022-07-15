import React from 'react';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import Button from '@mui/material/Button';
import InputAdornment from '@mui/material/InputAdornment';

import PersonIcon from '@mui/icons-material/Person';
import LockIcon from '@mui/icons-material/Lock';
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';

import MessageAlert from '../../components/MessageAlert';
import { createUser } from '../../services/user';

const RegisterForm = () => {
  const [name, setName] = React.useState('');
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [passwordAgain, setPasswordAgain] = React.useState('');
  const [successMessage, setSuccessMessage] = React.useState(null);
  const [errorMessage, setErrorMessage] = React.useState(null);
  const [open, setOpen] = React.useState(true);

  const handleUsernameValidation = () =>
    username.length < 3 || username.length > 20;

  const handlePasswordValidation = () => password.length < 6;

  const handleValidate = () => {
    if (!name || !username || !password || !passwordAgain) return false;
    if (username.length < 3 || username.length > 20) return false;
    if (password !== passwordAgain) return false;

    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setOpen(true);

    try {
      await createUser({
        name,
        username,
        password,
        passwordAgain,
      });

      setName('');
      setUsername('');
      setPassword('');
      setPasswordAgain('');
      setErrorMessage(null);
      setSuccessMessage(`Account created successfully!`);

      setTimeout(() => {
        setOpen(false);
        setSuccessMessage(null);
      }, 5000);
    } catch (error) {
      setErrorMessage(error.response.data.error);

      setTimeout(() => {
        setOpen(false);
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
      <Grid item xs={4}>
        <TextField
          label="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          sx={{ m: 1, width: '480px' }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <DriveFileRenameOutlineIcon />
              </InputAdornment>
            ),
          }}
        />
      </Grid>
      <Grid item xs={4}>
        <TextField
          label="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          error={handleUsernameValidation() && username.length > 0}
          helperText={
            handleUsernameValidation() && username.length > 0
              ? 'Username must be between 3 and 20 characters'
              : ''
          }
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
          <InputLabel
            htmlFor="outlined-adornment-password"
            error={handlePasswordValidation() && password.length > 0}
          >
            Password
          </InputLabel>
          <OutlinedInput
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            error={handlePasswordValidation() && password.length > 0}
            startAdornment={
              <InputAdornment position="start">
                <LockIcon />
              </InputAdornment>
            }
          />
          {handlePasswordValidation() && password.length > 0 && (
            <FormHelperText error>
              Password must be at least 6 characters
            </FormHelperText>
          )}
        </FormControl>
      </Grid>
      <Grid item xs={4}>
        <FormControl sx={{ m: 1, width: '480px' }} variant="outlined">
          <InputLabel
            htmlFor="outlined-adornment-password-again"
            error={passwordAgain.length > password.length}
          >
            Enter password again
          </InputLabel>
          <OutlinedInput
            label="Enter password again"
            type="password"
            value={passwordAgain}
            onChange={(e) => setPasswordAgain(e.target.value)}
            error={passwordAgain.length > password.length}
            startAdornment={
              <InputAdornment position="start">
                <LockIcon />
              </InputAdornment>
            }
          />
          {passwordAgain.length > password.length && (
            <FormHelperText error>Passwords do not match</FormHelperText>
          )}
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
          type="submit"
          size="large"
          disabled={!handleValidate() && true}
        >
          {handleValidate() ? 'Register' : 'Fill all fields'}
        </Button>
      </Grid>
    </form>
  );
};

export default RegisterForm;
