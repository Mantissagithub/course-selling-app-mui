import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, Outlet } from 'react-router-dom';
import { AppBar, Container, CssBaseline, Toolbar, Typography, Button, Paper } from '@mui/material';
import Login from './usercomponents/Login';
import Landing from './usercomponents/Landing';
import BuyCourse from './usercomponents/BuyCourse';
import Register from './usercomponents/Register';
import ShowCourses from './usercomponents/ShowCourses';
import PurchasedCourses from './usercomponents/PurchasedCourses';

function App() {
  return (
    <Router>
      <CssBaseline />
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component={Link} to="/landing" style={{ textDecoration: 'none', color: 'white', flexGrow: 1 }}>
            Course Selling Website
          </Typography>
          <div>
            <Button color="inherit" component={Link} to="/login">
              Login
            </Button>
            <Button color="inherit" component={Link} to="/register">
              Signup
            </Button>
            <Button color="inherit" component={Link} to="/buy">
              Buy Course
            </Button>
          </div>
        </Toolbar>
      </AppBar>
      <Container maxWidth="md">
        <Paper elevation={3} style={{ padding: '1rem', marginTop: '2rem' }}>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/buy" element={<BuyCourse />} />
            <Route path="/courses" element={<ShowCourses />} />
            <Route path="/purchased" element={<PurchasedCourses />} />
          </Routes>
        </Paper>
      </Container>
    </Router>
  );
}

export default App;
