import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, Typography, Grid, Button, Box } from "@mui/material";
import{makeStyles} from '@mui/styles'
import { LoginAppBar } from './CustomAppBar';
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  courseContainer: {
    maxHeight: "300px", // Set a maximum height for each course containere,vn vjebfjk
    overflow: "auto",  // Add scrollbars if content overflows
  },
}));

function ShowCourses() {
  const classes = useStyles();
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchCourses = async () => {
      const token = localStorage.getItem("token");
      try {
        const response = await axios.get("http://localhost:3000/admin/courses", {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        setCourses(response.data.courses);
      } catch (error) {
        console.error("Error fetching courses: ", error);
      }
    };

    fetchCourses();
  }, []);

  return (
    <div>
      <LoginAppBar />
      <Container maxWidth="md">
        <Typography variant="h4" align="center" gutterBottom>
          Course Page
        </Typography>
        <Grid container spacing={2}>
          {courses.map((course) => (
            <Grid item xs={12} sm={6} md={4} key={course.id}>
              <div className={classes.courseContainer}>
                <Course title={course.title} description={course.description} id={course.id} />
              </div>
            </Grid>
          ))}
        </Grid>
        <center>
                <Box mt={2}>
                    <Button
                        component={Link}
                        to="/create"
                        variant="contained"
                        color="primary"
                    >
                        CREATE A COURSE
                    </Button>
                </Box>
                <Box mt={2}>
                    <Button
                        component={Link}
                        to="/modifycourse"
                        variant="contained"
                        color="secondary"
                    >
                        MODIFY COURSE
                    </Button>
                </Box>
        </center>
      </Container>
    </div>
  );
}

function Course(props) {
  return (
    <div>
      <h1>{props.title}</h1>
      <h2>{props.description}</h2>
      <h2>{props.id}</h2>
    </div>
  );
}

export default ShowCourses;
