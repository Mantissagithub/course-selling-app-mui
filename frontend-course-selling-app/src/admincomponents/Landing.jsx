
import React from "react";
import { Container, Typography, Button, Box } from "@mui/material";
import { Link } from "react-router-dom"; 

/// This is the landing page. You need to add a link to the login page here.
/// Maybe also check from the backend if the user is already logged in and then show them a logout button
/// Logging a user out is as simple as deleting the token from the local storage.
function Landing() {
    return (
        <Container maxWidth="sm">
            <Box textAlign="center" mt={4}>
                <Typography variant="h4">Welcome to the Course Selling Website!(ADMINS)</Typography>
                <Box mt={2}>
                    <Button
                        component={Link}
                        to="/register"
                        variant="contained"
                        color="primary"
                    >
                        Register
                    </Button>
                </Box>
                <Box mt={2}>
                    <Button
                        component={Link}
                        to="/login"
                        variant="contained"
                        color="secondary"
                    >
                        Login
                    </Button>
                </Box>
            </Box>
        </Container>
    );
    }

export default Landing;
