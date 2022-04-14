import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import Button from '@mui/material/Button';

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
        <Grid item container direction="column" alignItems="center" xs={6}>
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
            />
          </Grid>
          <Grid item xs={4}>
            <FormControl sx={{ m: 1, width: '640px' }} variant="outlined">
              <InputLabel htmlFor="outlined-adornment-password">
                Password
              </InputLabel>
              <OutlinedInput label="Password" />
            </FormControl>
          </Grid>
          <Grid item xs={4}>
            <Button
              sx={{ m: 1 }}
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
          container
          direction="column"
          alignItems="center"
          justifyContent="center"
          sx={{
            backgroundImage: `url(${bg_2})`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'right',
            height: '100vh',
            marginTop: -10,
          }}
          xs={6}
        >
          <Typography sx={{ marginBottom: 0 }} variant="h1" gutterBottom>
            Don't be a loser...
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
          <Illustration style={{ width: '80%' }} />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Login;
