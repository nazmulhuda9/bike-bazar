import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div className='container-fluid footer'>
            <div className='row '>
                <div className="col-md-4 col-sm-10 p-3">
                    <h4>Update with us</h4>
                    <input type="email" placeholder="Enter email" /> <input type="submit" value="Subscribe" />
                </div>
                <div className='col-md-4 col-sm-10 p-3'>
                    <h2>Bike Bazar</h2>
                    <h6>Contact us</h6>
                    <h6>about us</h6>
                    <h6>services</h6>

                </div>
                <div className='col-md-4 col-sm-10 p-3'>
                    <h3>Follow Us</h3>
                    <i className="fab fa-facebook-square me-4"></i>
                    <i className="fab fa-instagram-square m-4"></i>
                    <i className="fab fa-twitter-square m-3 "></i>
                    <i className="fab fa-youtube-square ms-4"></i>
                </div>
            </div>
        </div>
    );
};

export default Footer;