import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from 'redux/auth/authOperations';
import { useSelector } from 'react-redux';
import { authSelector } from 'redux/auth/authSelectors';
import { Box, Button, TextField, Typography, Container } from '@mui/material';

const LoginView = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = event => {
    const { name, value } = event.target;
    switch (name) {
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = event => {
    event.preventDefault();
    dispatch(login({ email, password }));

    setEmail('');
    setPassword('');
  };

  const isLoggedIn = useSelector(authSelector);
  if (isLoggedIn) return null;

  return (
    <Container sx={{display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "#e0f0f9", height: "100vh", p: 2,  }}>

    <div>
      <Typography variant='h4'>Login page</Typography>
      <Box component="form" onSubmit={handleSubmit}>
        <label>
          <TextField
            type="text"
            label="Email"
            name="email"
            value={email}
            onChange={handleChange}
          />
        </label>
        <label>
          <TextField
            type="text"
            label="Name"
            id="outlined-password-input"
            variant='outlined'
            name="password"
            value={password}
            onChange={handleChange}
          />
        </label>
        <Button variant="contained" type="submit">
          <Typography>Log In</Typography>
        </Button>
      </Box>
    </div>
    </Container>
  );
};

export default LoginView;
