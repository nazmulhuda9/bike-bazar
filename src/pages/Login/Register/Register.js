import { Container, Grid, TextField, Typography, Button, CircularProgress, Alert, } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';


const Register = () => {
    const [logInData, setLogInData] = useState({})
    const { registerUser, isLoading, user, authError, setAuthError } = useAuth()
    const history = useHistory()

    useEffect(() => {
        setAuthError("");

    }, []);

    const handleOnBlur = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        const newLogInData = { ...logInData };
        newLogInData[field] = value;
        setLogInData(newLogInData);
    }
    const handleLogin = e => {
        if (logInData.password !== logInData.password2) {
            alert("Please enter correct password");

            logInData("");
            return
        }
        if (logInData.password === logInData.password2) {
            registerUser(
                logInData.email,
                logInData.password,
                logInData.name,
                history
            );
        }
        e.preventDefault();
    }
    return (


        <Container  >
            <Grid container spacing={2} sx={{ justifyContent: 'center' }}>
                <Grid item xs={6} md={8} >
                    <Typography variant="subtitle2" gutterBottom component="div">
                        <h1>Register</h1>
                        {!isLoading &&
                            <form onSubmit={handleLogin} >

                                <TextField
                                    sx={{ width: " 50%", m: 2 }}
                                    id="filled-basic"
                                    label="your name"
                                    variant="filled"
                                    name="name"
                                    type="text"
                                    onBlur={handleOnBlur}

                                />

                                <TextField
                                    sx={{ width: " 50%", m: 2 }}
                                    id="filled-basic"
                                    label="your email"
                                    variant="filled"
                                    name="email"
                                    type="email"
                                    onBlur={handleOnBlur}

                                />

                                <TextField
                                    sx={{ width: " 50%", m: 2 }}
                                    id="filled-basic"
                                    label="your password"
                                    variant="filled"
                                    type="password"
                                    name="password"
                                    onBlur={handleOnBlur}
                                /> <br />
                                <TextField
                                    sx={{ width: " 50%", m: 2 }}
                                    id="filled-basic"
                                    label="your password"
                                    variant="filled"
                                    type="password"
                                    name="password2"
                                    onBlur={handleOnBlur}
                                /> <br />
                                <Button sx={{ width: " 25%", m: 2 }} variant="contained" type="submit">Register</Button> <br />
                                <NavLink style={{ textDecoration: "none", margin: '15px' }} to="/login">Already Register? Log in Please</NavLink>
                            </form>}
                        {isLoading && <CircularProgress />}
                        {user.email && (
                            <Alert severity="success">User Created successfully</Alert>
                        )}
                        {authError && <Alert severity="error">{authError}</Alert>}
                    </Typography>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Register;