import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  Container,
  Typography,
  TextField,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Snackbar,
} from '@mui/material';

function ModifyCourse() {
  const [courseId, setCourseId] = useState('');
  const [newCourseData, setNewCourseData] = useState({});
  const [message, setMessage] = useState('');
  const [courses, setCourses] = useState([]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewCourseData({ ...newCourseData, [name]: value });
  };

  const handleSubmit = async () => {
    const token = localStorage.getItem('token');
    try {
      const response = await axios.put(
        `http://localhost:3000/admin/courses/${courseId}`,
        { ...newCourseData },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        }
      );
      if (response.status === 200) {
        setMessage('Course updated successfully');
      } else {
        setMessage('Error updating course');
      }
    } catch (error) {
      setMessage('Network error. Please try again.');
    }
  };

  useEffect(() => {
    const fetchCourse = async () => {
      const token = localStorage.getItem('token');
      const response = await axios.get('http://localhost:3000/admin/courses', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setCourses(response.data);
    };
    fetchCourse();
  }, []);

  return (
    <Container maxWidth="md">
      <Typography variant="h5" gutterBottom>
        Modify Course
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Course ID"
          fullWidth
          margin="normal"
          variant="outlined"
          value={courseId}
          onChange={(e) => setCourseId(e.target.value)}
        />
        <TextField
          label="New Title"
          fullWidth
          margin="normal"
          variant="outlined"
          name="title"
          onChange={handleInputChange}
        />
        <TextField
          label="New Description"
          fullWidth
          margin="normal"
          variant="outlined"
          name="description"
          onChange={handleInputChange}
        />
        <Button variant="contained" color="primary" type="submit">
          Modify Course
        </Button>
      </form>
      <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        open={message !== ''}
        autoHideDuration={3000}
        message={message}
        onClose={() => setMessage('')}
      />
    </Container>
  );
}

export default ModifyCourse;
