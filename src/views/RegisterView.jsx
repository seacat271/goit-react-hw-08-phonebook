import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/authOperations';
import { Button, TextField, Box, Typography, Container } from '@mui/material';

const RegisterView = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = event => {
    const { name, value } = event.target;
    switch (name) {
      case 'name':
        return setName(value);
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
    dispatch(register({ name, email, password }));
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <Container sx={{display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "#e0f0f9", height: "100vh", p: 2,  }}>
    <Box component="div">
        <Typography variant='h4'>Registration page</Typography>

      <Box component="form" onSubmit={handleSubmit}>
        <label>
          <TextField
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
            variant="outlined"
            label="Name"
            id="outlined-password-input"
          />
        </label>
        <label>
          <TextField
            type="text"
            name="email"
            value={email}
            onChange={handleChange}
            variant="outlined"
            label="Email"
            id="outlined-password-input"
          />
        </label>
        <label>
          <TextField
            type="text"
            name="password"
            value={password}
            onChange={handleChange}
            variant="outlined"
            label="Password"
            id="outlined-password-input"
          />
        </label>
        <Button variant="contained" type="submit">
          Registration
        </Button>
      </Box>
    </Box>
    </Container>
  );
};

export default RegisterView;
