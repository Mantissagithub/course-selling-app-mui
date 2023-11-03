import React, { useEffect } from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import axios from 'axios'; // Make sure to import axios

const SignUpBar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component={Link} to="/" style={{ textDecoration: 'none', color: 'white', flexGrow: 1 }}>
          Course Selling Website
        </Typography>
        <div>
          <Button color="inherit" component={Link} to="/login">
            Login
          </Button>
          <Button color="inherit" component={Link} to="/register">
            Signup
          </Button>
        </div>
      </Toolbar>
    </AppBar>
  );
};

const LoginAppBar = () => {
    const [user, setUser] = React.useState('');
    
    useEffect(() => {
      fetchData();
    }, []); // Use an empty dependency array for the effect to run once
  
    async function fetchData() {
      const token = localStorage.getItem("token");
      try {
        const response = await axios.get('http://localhost:3000/admin/me', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setUser(response.data.username); // Assuming the username is in response.data
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
  
    return (
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component={Link} to="/landing" style={{ textDecoration: 'none', color: 'white', flexGrow: 1 }}>
            Course Selling Website
          </Typography>
          {user && (
            <Typography variant="h6" style={{ color: 'white' }}>
              {user}
            </Typography>
          )}
          <div>
          <Button color="inherit" component={Link} to="/login">
            Logout
          </Button>
        </div>
        </Toolbar>
      </AppBar>
    );
  };

export { SignUpBar, LoginAppBar };
