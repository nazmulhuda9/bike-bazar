import React from 'react';
import image from '../../../images/biker-speed-rider-helmet.jpg'

const Style = () => {
    return (
        <div className="container my-5 p-3">
            <h1 className="text-center p-2">Life is Beautiful with Bike</h1>
            <div className="row g-2 d-flex justify-content-evenly align-items-center">
                <div className="col-lg-4 col-12">
                    <div className=" border">
                        <img src={image} className="img-fluid" alt="..." />
                    </div>
                </div>
                <div className="col-lg-5 col-12">
                    <div className="p-3">
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">bike is a most stylish component</li>
                            <li className="list-group-item">with a bike, you are looking handsome</li>
                            <li className="list-group-item">you feel bore.. just bike riding</li>
                            <li className="list-group-item">without bike, a life is not life</li>
                            <li className="list-group-item">a lover's first choice is bike</li>
                            <li className="list-group-item"></li>
                        </ul>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default Style;