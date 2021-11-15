import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

import {

    Switch,
    Route,
    Link,

    useRouteMatch
} from "react-router-dom";
import { Button } from '@mui/material';

import MyOrder from '../../Home/MyOrder/MyOrder';
import AddProducts from '../../Home/AddProducts/AddProducts';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import useAuth from '../../../hooks/useAuth';
import AddReview from '../AddReview/AddReview';
import ManageOrders from '../ManageOrders/ManageOrders';
import Payment from '../Payment/Payment';
import ManageProducts from '../ManageProducts/ManageProducts';
import ManageProduct from '../ManageProduct/ManageProduct';
const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: `-${drawerWidth}px`,
        ...(open && {
            transition: theme.transitions.create('margin', {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen,
            }),
            marginLeft: 0,
        }),
    }),
);

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
    transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: `${drawerWidth}px`,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
}));

export default function DashBoard() {
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);
    const { admin, logOut, user } = useAuth()

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };
    let { path, url } = useRouteMatch();
    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar position="fixed" open={open}>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        sx={{ mr: 2, ...(open && { display: 'none' }) }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div">
                        DashBoard
                    </Typography>
                </Toolbar>
            </AppBar>
            <Drawer
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                        boxSizing: 'border-box',
                    },
                }}
                variant="persistent"
                anchor="left"
                open={open}
            >
                <DrawerHeader>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                    </IconButton>
                </DrawerHeader>
                <Divider />
                <Link style={{ margin: 12, textDecoration: "none" }} to="/home">Home</Link>




                {
                    admin ? <>
                        <Link style={{ margin: 12, textDecoration: "none" }} to={`${url}/addProducts`}>Add Product</Link>
                        <Link style={{ margin: 12, textDecoration: "none" }} to={`${url}/makeAdmin`}>Make Admin</Link>
                        <Link style={{ margin: 12, textDecoration: "none" }} to={`${url}/manageOrders`}>Manage Orders</Link>
                        <Link style={{ margin: 12, textDecoration: "none" }} to={`${url}/manageProducts`}>Manage Products</Link>
                    </> : user.email &&
                    <>
                        <Link style={{ margin: 12, textDecoration: "none" }} to={`${url}/addReview`}>Add Review</Link>
                        <Link style={{ margin: 12, textDecoration: "none" }} to={`${url}/myOrder`}>My Order</Link>
                        <Link style={{ margin: 12, textDecoration: "none" }} to={`${url}/payment`}>Payment</Link>
                    </>
                }


                <Button style={{ backgroundColor: "red" }} onClick={logOut} color="inherit"> log out</Button>


                <Divider />

            </Drawer>
            <Main open={open}>

                <Switch>
                    {admin ?
                        <Route exact path={path}>
                            <ManageProduct></ManageProduct>
                        </Route> : user.email && !admin &&
                        <Route exact path={path}>
                            <MyOrder></MyOrder>
                        </Route>
                    }


                    <Route path={`${path}/myOrder`}>
                        <MyOrder></MyOrder>
                    </Route>
                    <Route path={`${path}/addProducts`}>
                        <AddProducts></AddProducts>
                    </Route>
                    <Route path={`${path}/makeAdmin`}>
                        <MakeAdmin></MakeAdmin>
                    </Route>
                    <Route path={`${path}/addReview`}>
                        <AddReview></AddReview>
                    </Route>
                    <Route path={`${path}/payment`}>
                        <Payment></Payment>
                    </Route>
                    <Route path={`${path}/manageProducts`}>
                        <ManageProducts></ManageProducts>
                    </Route>

                    <Route path={`${path}/manageOrders`}>
                        <ManageOrders></ManageOrders>
                    </Route>
                </Switch>
            </Main>
        </Box>
    );
}
