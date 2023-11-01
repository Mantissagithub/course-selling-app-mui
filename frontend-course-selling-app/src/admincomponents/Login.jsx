import React, { useState } from 'react';
import axios from 'axios';
import { Container, Typography, TextField, Button, Box, Link } from '@mui/material';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [token, setToken] = useState(''); // Define token state

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:3000/admin/login', { username, password });
      console.log(response.data.message);
      const { token } = response.data;
      localStorage.setItem('token', token); // Assign the token from the response
      setToken(token); // Update the token state
    } catch (error) {
      console.error(error); // Use console.error instead of console.log for errors
    }
  }

  return (
    <Container maxWidth="sm">
      <Box textAlign="center" mt={4}>
        <Typography variant="h4">Login to Admin Dashboard</Typography>
        <Box mt={2}>
          <TextField
            label="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            fullWidth
            variant="outlined"
          />
        </Box>
        <Box mt={2}>
          <TextField
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            fullWidth
            variant="outlined"
          />
        </Box>
        <Box mt={2}>
          <Button
            variant="contained"
            color="primary"
            onClick={handleLogin}
          >
            Login
          </Button>
        </Box>
        <Box mt={2}>
          New here? <Link href="/register">Register</Link>
        </Box>
      </Box>
    </Container>
  );
}

export default Login;