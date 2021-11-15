import React, { useState, useEffect } from 'react';
import Menubar from '../../Shared/Menubar/Menubar';
import Product from '../Product/Product';
import './Products.css'



const Products = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch("https://obscure-headland-23600.herokuapp.com/allProducts")
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    return (
        <>
            <Menubar></Menubar>
            <div className="container">
                <h1 className="text-center">Our Products</h1>
                <div className="row g-2 d-flex  align-items-center">
                    {
                        products.map(product => <Product
                            product={product}

                        ></Product>)
                    }
                </div>
            </div></>
    );
};

export default Products;