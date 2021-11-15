import { Alert, CircularProgress, Container, Grid, TextField, Typography } from '@mui/material';
import Button from '@mui/material/Button';

import React, { useState } from 'react';
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Login = () => {
    const [logInData, setLogInData] = useState({})
    const { user, loginUserWithEmailPassword, isLoading, authError } = useAuth();

    const location = useLocation()
    const history = useHistory()

    const handleOnBlur = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        const newLogInData = { ...logInData };
        newLogInData[field] = value;
        setLogInData(newLogInData);
    }
    const handleLogin = e => {
        loginUserWithEmailPassword(logInData.email, logInData.password, location, history);
        e.preventDefault();
    }
    return (


        <Container>
            <Grid container spacing={2} sx={{ justifyContent: 'center' }}>
                <Grid item xs={6} md={8}>
                    <Typography variant="subtitle2" gutterBottom component="div">
                        <h1>
                            Log In Please
                        </h1>
                        <form onSubmit={handleLogin}>
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
                            <Button sx={{ width: " 25%", m: 2 }} variant="contained" type="submit">Log in</Button> <br />
                            <NavLink style={{ textDecoration: "none", margin: "14px" }} to="/register">New User? Register Please</NavLink>
                            {isLoading && <CircularProgress />}
                            {user.email && (
                                <Alert severity="success">Log in successfully</Alert>
                            )}
                            {authError && <Alert severity="error">{authError}</Alert>}
                        </form>

                    </Typography>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Login;