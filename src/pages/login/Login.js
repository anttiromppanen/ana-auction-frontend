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
import bg_2 from '../../img/bg_2.png';

const Login = () => {
  return (
    <Box
      sx={{
        width: '100%',
      }}
    >
      <DrawerHeader />
      <Grid justifyContent="center" alignItems="center" container>
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
              LOG IN
            </Typography>
          </Grid>
          <Grid item xs={4}>
            <TextField
              label="Username"
              id="outlined-start-adornment"
              sx={{ m: 1, width: '640px' }}
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
            <FormControl sx={{ m: 1, width: '640px' }} variant="outlined">
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
            <FormControl sx={{ m: 1, width: '640px' }} variant="outlined">
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
                width: '640px',
              }}
              variant="contained"
              color="primary"
              type="submit"
              size="large"
            >
              LOG IN
            </Button>
          </Grid>
        </Grid>
        <Grid
          item
          sx={{
            backgroundImage: `url(${bg_2})`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'right',
            height: '100vh',
            marginTop: -10,
          }}
          xs={6}
        >
          <Stack
            sx={{
              height: '100vh',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Typography
              sx={{ marginBottom: 0, fontFamily: ['Lora', 'serif'] }}
              variant="h1"
              gutterBottom
            >
              Don't be a loser,
            </Typography>
            <Typography
              sx={{
                m: 0,
                paddingLeft: 4,
                paddingRight: 4,
                color: '#F0C6A6',
                backgroundColor: '#082032',
              }}
              variant="h1"
              gutterBottom
            >
              LOG IN
            </Typography>
            <Illustration
              style={{
                width: '60%',
                height: '60%',
              }}
            />
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Login;
