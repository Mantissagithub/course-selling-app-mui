import React, { useState } from 'react';
import axios from 'axios';
import { Container, Typography, TextField, Button, Box, Link } from '@mui/material';

function Register() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = () => {
    axios.post("http://localhost:3000/users/signup", { username, password }, { headers: { "Content-Type": "application/json" } })
      .then(response => {
        localStorage.setItem("token", response.data.token);
        console.log(response.data.message);
      });
  }

  return (
    <Container maxWidth="sm">
      <Box textAlign="center" mt={4}>
        <Typography variant="h4">Register to the Website</Typography>
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
            onClick={handleSignup}
          >
            Sign Up
          </Button>
        </Box>
        <Box mt={2}>
          Already a user? <Link href="/login">Login</Link>
        </Box>
      </Box>
    </Container>
  );
}

export default Register;
