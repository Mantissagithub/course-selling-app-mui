import React, { useState } from 'react';
import axios from 'axios';
import { Container, TextField, Button, Typography, Box } from '@mui/material';
import { LoginAppBar } from './CustomAppBar';
import {useNavigate} from 'react-router-dom';
import { Link } from "react-router-dom"; 

function BuyCourse() {
  const [courseId, setCourseId] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handlePurchase = async () => {
    const token = localStorage.getItem("token");
    try {
      const response = await axios.post(`http://localhost:3000/users/courses/${courseId}`, {}, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        }
      });
      if (response.status === 200) {
        setMessage("Course purchased successfully");
        navigate('/courses');
      } else {
        setMessage("Error purchasing course");
      }
    } catch (error) {
      setMessage("Error purchasing course");
      console.error(error);
    }
  }

  return (
    <div>
      <LoginAppBar />
      <Container maxWidth="sm">
      <Box textAlign="center" mt={4}>
        <Typography variant="h4">Buy a Course</Typography>
        <TextField
          label="Enter Course ID"
          fullWidth
          value={courseId}
          onChange={(e) => setCourseId(e.target.value)}
          variant="outlined"
          mt={2}
        />
        <Button
          variant="contained"
          color="primary"
          onClick={handlePurchase}
          mt={2}
        >
          Purchase This Course
        </Button>
        {message && <Typography mt={2} color={message.includes("successfully") ? "success" : "error"}>{message}</Typography>}
      </Box>
    </Container>
    </div>
  );
}

export default BuyCourse;
