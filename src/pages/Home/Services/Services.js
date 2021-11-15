import React, { useState, useEffect } from 'react';
import Service from '../Service/Service';



const Services = () => {
    const [services, setServices] = useState([])

    useEffect(() => {
        fetch("https://obscure-headland-23600.herokuapp.com/allProducts")
            .then(res => res.json())
            .then(data => setServices(data.slice(0, 6)))
    }, [])

    return (
        <>

            <div className="container">
                <h1 className="text-center fw-bold">Our Services</h1>
                <div className="row g-2 d-flex  align-items-center">
                    {
                        services.map(product => <Service
                            product={product}

                        ></Service>)
                    }
                </div>
            </div></>
    );
};

export default Services;