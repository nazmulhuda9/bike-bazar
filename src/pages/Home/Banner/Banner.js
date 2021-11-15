import * as React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import img from "../../../images/moto.jpg"
import Button from '@mui/material/Button';
import { NavLink } from 'react-router-dom';
import "./Banner.css"


const Banner = () => {
    return (
        <Box sx={{ width: '100%', backgroundColor: 'white', padding: 4 }}>
            <Grid className=" align-items-center" container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid item xs={10} md={6} className="image" >
                    <img src={img} alt="" />
                </Grid>
                <Grid item xs={4} md={6} >
                    <h1 >Bike Bazar</h1>
                    <h2>What Do You Want?</h2>
                    <p>Save some money, go for a ride with your favorite bike.</p>
                    <p>If you’ve got a soft spot for sportbike design and Grand Prix stylings, then the 2021 Honda CBR300R is your sweet spot between form and function.  </p>
                    <NavLink to="/Products"><Button variant="contained">More Products</Button></NavLink>


                </Grid>
            </Grid>
        </Box>
    );
};

export default Banner;