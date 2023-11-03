import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, Outlet } from 'react-router-dom';
import { AppBar, Container, CssBaseline, Toolbar, Typography, Button, Paper } from '@mui/material';
import Login from './usercomponents/Login';
import Landing from './usercomponents/Landing';
import BuyCourse from './usercomponents/BuyCourse';
import Register from './usercomponents/Register';
import ShowCourses from './usercomponents/ShowCourses';
import PurchasedCourses from './usercomponents/PurchasedCourses';
import LandingCourses from './usercomponents/LandingCourses';

function App() {
  return (
    <Router>
      <CssBaseline />
      <Container maxWidth="md">
        <Paper elevation={3} style={{ padding: '1rem', marginTop: '2rem' }}>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path = "/landing" element = {<LandingCourses/>} />
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
