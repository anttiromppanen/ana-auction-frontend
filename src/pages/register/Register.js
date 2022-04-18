import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import InputAdornment from '@mui/material/InputAdornment';
import PersonIcon from '@mui/icons-material/Person';
import LockIcon from '@mui/icons-material/Lock';

import DrawerHeader from '../../components/DrawerHeader';
import { ReactComponent as Illustration } from '../../img/login_img_3.svg';
import bg_2 from '../../img/register_bg.jpg';

const Login = () => {
  return (
    <Box
      sx={{
        width: '100%',
      }}
    >
      <DrawerHeader />
      <Grid justifyContent="center" alignItems="center" container height="100%">
        <Grid
          item
          container
          direction="column"
          alignItems="center"
          xs={6}
          spacing={1}
        >
          <Grid item xs={4}>
            <Typography variant="h1" gutterBottom>
              REGISTER
            </Typography>
          </Grid>
          <Grid item xs={4}>
            <TextField
              label="Username"
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
                startAdornment={
                  <InputAdornment position="start">
                    <LockIcon />
                  </InputAdornment>
                }
              />
            </FormControl>
          </Grid>
          <Grid item xs={4}>
            <FormControl sx={{ m: 1, width: '480px' }} variant="outlined">
              <InputLabel htmlFor="outlined-adornment-password">
                Enter password again
              </InputLabel>
              <OutlinedInput
                label="Enter password again"
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
              type="submit"
              size="large"
            >
              CREATE ACCOUNT
            </Button>
          </Grid>
        </Grid>
        <Grid
          container
          item
          direction="row"
          sx={{
            alignItems: 'flex-end',
            backgroundImage: `url(${bg_2})`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            borderRadius: '0 0 0 0.5rem',
            height: '80vh',
          }}
          xs={6}
        >
          <Grid item xs={12}>
            <Typography
              sx={{
                marginBottom: 2,
                marginTop: 0,
                padding: '0 1rem',
                lineHeight: '0.8',
                fontFamily: ['Lora', 'serif'],
                textShadow: '3px 3px 0px rgba(0,0,0,0.1)',
                color: '#FFF',
              }}
              variant="h3"
              gutterBottom
            >
              Get access to all features by signing up
            </Typography>
            <Typography
              sx={{
                m: 0,
                paddingLeft: 4,
                paddingRight: 4,
                color: '#F0C6A6',
                borderRadius: '0.5rem',
                fontWeight: 'bold',
                textShadow: '0px 0px 6px rgba(0,0,0,0.4)',
              }}
              variant="h2"
              gutterBottom
            >
              SIGN UP NOW
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Login;
