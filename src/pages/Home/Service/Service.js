import React from 'react';
import { Link } from 'react-router-dom';

const Service = ({ product }) => {
    const { name, description, price, company, img, } = product;
    return (
        <>

            <div className=" col-lg-12 col-md-3 border p-3 shadow m-2 product">
                <div className=" ">
                    <img src={img} alt="..." />
                </div>
                <h3>{name}</h3>
                <h5>{company}</h5>
                <div className="d-grid justify-content-center align-items-center">
                    <p className="fw-bold mt-2">{description}</p>
                </div>
                <h4>Price: ${price}</h4>
                <Link to={`/orderProduct/${product._id}`}>
                    <button className="btn btn-success">Buy Now</button>
                </Link>
            </div>
        </>
    );
};

export default Service;