import { useSelector } from 'react-redux';
import { loggedInSelector } from 'redux/auth/authSelectors';
import { Box, Button, TextField, Typography, Container } from '@mui/material';
import { IForm } from 'components/Form/IForm';

const LoginView = () => {
  const isLoggedIn = useSelector(loggedInSelector);
  if (isLoggedIn) return null;

  return (
    <Container
      sx={{
        height: '92vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'center',
        p: 2,
        gap: '20px',
      }}
    >
      <Box
      component="div"
        sx={{
          width: '30%',
          height: '70%',
          textAlign: 'center',
          backgroundColor: '#ffffff',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          p: 2,
          gap: '20px',
          borderRadius: "4px",
        }}
      >
        <Typography variant="h4" >
          Login page
        </Typography>

        <IForm buttonText={'Login'} />
      </Box>
    </Container>
  );
};

export default LoginView;
