import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, Container, CssBaseline, Paper } from '@mui/material';
import Landing from './admincomponents/Landing';
import Login from './admincomponents/Login';
import CreateCourse from './admincomponents/CreateCourse';
import Register from './admincomponents/Register';
import ShowCourses from './admincomponents/ShowCourses';
import ModifyCourse from './admincomponents/ModifyCourse';
import LandingCourses from './admincomponents/LandingCourses';

function App() {
  return (
    <div>
      <Router>
        <CssBaseline />
        <Container maxWidth="md">
          <Paper elevation={3} style={{ padding: '1rem', marginTop: '2rem' }}>
            <Routes>
              <Route path="/" element={<Landing />} />
              <Route path="/landing" element = {<LandingCourses />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/create" element={<CreateCourse />} />
              <Route path="/courses" element={<ShowCourses />} />
              <Route path="/modifycourse" element={<ModifyCourse />} />
            </Routes>
          </Paper>
        </Container>
      </Router>
    </div>
  );
}

export default App;
