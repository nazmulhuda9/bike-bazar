import React from 'react';
import Menubar from '../../Shared/Menubar/Menubar';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';
import Review from '../Review/Review';
import Footer from '../../Shared/Footer/Footer';
import Style from '../Style/Style';

const Home = () => {
    return (
        <div>

            <Menubar />

            <Banner></Banner>
            <Services></Services>
            <Review></Review>
            <Style></Style>
            <Footer></Footer>
        </div>
    );
};

export default Home;