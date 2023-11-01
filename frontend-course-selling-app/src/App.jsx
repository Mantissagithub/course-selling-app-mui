import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, Container, CssBaseline, Paper } from '@mui/material';
import Landing from './admincomponents/Landing';
import Login from './admincomponents/Login';
import CreateCourse from './admincomponents/CreateCourse';
import Register from './admincomponents/Register';
import ShowCourses from './admincomponents/ShowCourses';
import ModifyCourse from './admincomponents/ModifyCourse';

function App() {
  return (
    <div>
      <Router>
        <CssBaseline />
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" style={{ flexGrow: 1 }}>
              Course Management System
            </Typography>
            <Button color="inherit" component={Link} to="/login">
              Login
            </Button>
            <Button color="inherit" component={Link} to="/register">
              Register
            </Button>
            <Button color="inherit" component={Link} to="/create">
              Create Course
            </Button>
            <Button color="inherit" component={Link} to="/courses">
              Show Courses
            </Button>
            <Button color="inherit" component={Link} to="/modifycourse">
              Modify Course
            </Button>
          </Toolbar>
        </AppBar>

        <Container maxWidth="md">
          <Paper elevation={3} style={{ padding: '1rem', marginTop: '2rem' }}>
            <Routes>
              <Route path="/" element={<Landing />} />
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
