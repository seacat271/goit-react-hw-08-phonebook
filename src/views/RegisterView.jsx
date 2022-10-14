import { Button, TextField, Box, Typography, Container } from '@mui/material';
import { IForm } from 'components/Form/IForm';

const RegisterView = () => {

  return (
    <Container sx={{display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "#e0f0f9", height: "100vh", p: 2,  }}>
    <Box component="div">
        <Typography variant='h4'>Registration page</Typography>

      <IForm buttonText={"Registration"}/>
    </Box>
    </Container>
  );
};

export default RegisterView;
