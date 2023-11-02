import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Typography, Box, Grid, Paper } from '@mui/material';
import { LoginAppBar } from './CustomAppBar';

function PurchasedCourses() {
  const [purchasedCourses, setPurchasedCourses] = useState([]);

  useEffect(() => {
    const fetchPurchased = async () => {
      const token = localStorage.getItem("token");
      const response = await axios.get("http://localhost:3000/users/purchasedCourses", {
        headers: {
          Authorization: `Bearer ${token}`,
        }
      });
      setPurchasedCourses(response.data.purchasedCourses);
    }
    fetchPurchased();
  }, []);

  return (
    <div>
      <LoginAppBar />
      <Container maxWidth="md">
      <Typography variant="h4" align="center" mt={4}>Purchased Courses</Typography>
      <Grid container spacing={2}>
        {purchasedCourses.map(course => (
          <Grid item xs={12} sm={6} md={4} key={course.id}>
            <Course title={course.title} description={course.description} id={course.id} />
          </Grid>
        ))}
      </Grid>
    </Container>
    </div>
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

export default PurchasedCourses;
