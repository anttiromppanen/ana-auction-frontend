import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';

import LoginForm from './LoginForm';
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
              LOG IN
            </Typography>
          </Grid>
          <LoginForm />
        </Grid>
        <Grid
          item
          sx={{
            backgroundImage: `url(${bg_2})`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'right',
            borderRadius: '0 0 0 0.5rem',
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
              marginTop: 8,
            }}
          >
            <Typography
              sx={{ marginBottom: 0, fontFamily: ['Lora', 'serif'] }}
              variant="h2"
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
                backgroundColor: 'rgba(8, 32, 50, 0.7)',
                borderRadius: '0.5rem',
                fontWeight: 'bold',
              }}
              variant="h2"
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
