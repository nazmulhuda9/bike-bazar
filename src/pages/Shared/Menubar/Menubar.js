import { AppBar, Button, IconButton, Toolbar, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';


const Menubar = () => {
    const { user, logOut } = useAuth()
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Bike Bazar
                    </Typography>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        <NavLink style={{ textDecoration: 'none', color: 'white', marginRight: 6 }} to="/home">Home</NavLink>
                        <NavLink style={{ textDecoration: 'none', color: 'white', marginLeft: 16 }} to="/products">Explore</NavLink>
                    </Typography>
                    {
                        user.email ?
                            <> <NavLink style={{ textDecoration: 'none', color: 'white' }} to="/dashBoard">
                                <Button color="inherit">DashBoard</Button>
                            </NavLink>

                                <h2 style={{ color: 'yellow', fontSize: '22px', }}>{user?.displayName}</h2>
                                <Button onClick={logOut} color="inherit"> log out</Button> </>
                            :
                            <NavLink style={{ textDecoration: 'none', color: 'white' }} to="/login">
                                <Button color="inherit">Login</Button>
                            </NavLink>
                    }


                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default Menubar;