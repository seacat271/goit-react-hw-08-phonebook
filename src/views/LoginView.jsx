

import { useSelector } from 'react-redux';
import { loggedInSelector } from 'redux/auth/authSelectors';
import { Box, Button, TextField, Typography, Container } from '@mui/material';
import { IForm } from 'components/Form/IForm';

const LoginView = () => {


  const isLoggedIn = useSelector(loggedInSelector);
  if (isLoggedIn) return null;
 

  return (
    <Container sx={{display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "#e0f0f9", height: "100vh", p: 2,}}>

    <div>
      <Typography variant='h4'>Login page</Typography>
      <IForm buttonText = {"Login"}/>
    </div>
    </Container>
  );
};

export default LoginView;
