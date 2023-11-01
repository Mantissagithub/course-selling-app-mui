import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Typography, Box, Paper, Grid } from '@mui/material';

function ShowCourses() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchCourses = async () => {
      const token = localStorage.getItem("token");
      const response = await axios.get("http://localhost:3000/users/courses", {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      setCourses(response.data.courses);
    }

    fetchCourses();
  }, []);

  return (
    <Container maxWidth="md">
      <Typography variant="h4" align="center" mt={4}>Course Page</Typography>
      <Grid container spacing={2}>
        {courses.map(course => (
          <Grid item xs={12} sm={6} md={4} key={course.id}>
            <Course title={course.title} description={course.description} id={course.id} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

function Course(props) {
  return (
    <Paper elevation={3} sx={{ p: 2 }}>
      <Typography variant="h5">{props.title}</Typography>
      <Typography variant="body1">{props.description}</Typography>
      <Typography variant="body2">ID: {props.id}</Typography>
    </Paper>
  );
}

export default ShowCourses;
