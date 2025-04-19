import React from "react";
import axios from 'axios';
import { Container, TextField, Button, Typography, Box } from '@mui/material';
import {LoginAppBar} from './CustomAppBar';
import { useNavigate}  from "react-router-dom";

function CreateCourse() {
    const [title, setTitle] = React.useState("");
    const [description, setDescription] = React.useState("");
    const [message, setMessage] = React.useState(""); // Define message in the state
    const token = localStorage.getItem("token");
    const navigate = useNavigate();

    const addCourse = async() => {
        try {
            const response = await axios.post("http://localhost:3000/admin/courses", { title, description }, {
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "application/json"
                }
            });

            // Assuming the API response contains a success message
            setMessage(response.data.message);
            navigate('/courses');
        } catch (error) {
            // Handle error and set an error message
            setMessage("An error occurred while adding the course.");
        }
    }

    return (
        <div>
            <LoginAppBar />
            <Container maxWidth="sm">
            <Box textAlign="center" mt={4}>
                <Typography variant="h4">Add a Course</Typography>
                <TextField
                    label="Title"
                    fullWidth
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    variant="outlined"
                    margin="normal" // Use margin instead of mt
                />
                <TextField
                    label="Description"
                    fullWidth
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    variant="outlined"
                    margin="normal" // Use margin instead of mt
                />
                <Button
                    variant="contained"
                    color="primary"
                    onClick={addCourse}
                    margin="normal" // Use margin instead of mt
                >
                    Add this course
                </Button>
                {message && (
                    <Typography
                        variant="body1"
                        color={message.includes("successfully") ? "success" : "error"}
                    >
                        {message}
                    </Typography>
                )}
            </Box>
        </Container>
        </div>
    );
}

export default CreateCourse;
