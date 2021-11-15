import React from 'react';
import { Link } from 'react-router-dom';
import "./Product.css"

const Product = ({ product }) => {
    const { name, description, price, company, img, } = product;
    return (
        <>

            <div className=" col-lg-12 col-md-3 border p-3 shadow m-2 product">
                <div className=" ">
                    <img src={img} alt="..." />
                </div>
                <h2>{name}</h2>
                <h5>{company}</h5>
                <div className="d-grid justify-content-center align-items-center">
                    <p className="fw-bold mt-2">{description}</p>
                </div>
                <h3>Price: ${price}</h3>
                <Link to={`/orderProduct/${product._id}`}>
                    <button className="btn btn-success">Buy Now</button>
                </Link>
            </div>
        </>
    );
};

export default Product;