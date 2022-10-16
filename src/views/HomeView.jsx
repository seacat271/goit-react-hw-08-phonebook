import { Container, Typography, Box } from '@mui/material';
import { useSelector } from 'react-redux';
import { loggedInSelector } from 'redux/auth/authSelectors';
const HomeView = () => {
  const isLoggedIn = useSelector(loggedInSelector);
  return (
    <Container
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#e0f0f9',
        height: '100vh',
        p: 2,
      }}
    >
      <Box sx={{ textAlign: 'center' }}>
        <Typography variant="h1" component="h1" sx={{ mt: 'auto', mb: 'auto' }}>
          Welcome to Private Phonebook Service
        </Typography>
        {!isLoggedIn && (
          <Typography variant="h5" component="p">
            To use our App, you need to register or log in.
          </Typography>
        )}
      </Box>
    </Container>
  );
};

export default HomeView;
