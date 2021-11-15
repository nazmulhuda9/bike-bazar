import React, { useState, useEffect } from 'react';


const ManageProducts = () => {
    const [products, setProducts] = useState([])
    const [control, setControl] = useState(false);


    useEffect(() => {
        fetch("https://obscure-headland-23600.herokuapp.com/allProducts")
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [control])

    const handleDelete = (id) => {
        fetch(`https://obscure-headland-23600.herokuapp.com/deleteProduct/${id}`, {
            method: "DELETE",
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.deletedCount) {
                    setControl(!control);
                    alert("are you sure you want to delete?")
                }
            });
        console.log(id);
    };

    return (
        <div className="container p-5">

            <h1 className="text-center">Manage Products</h1>
            <div className="row g-2 d-flex  align-items-center">
                {
                    products.map(product => (
                        <div className=" col-lg-12 col-md-3 border p-3 shadow m-2 product">
                            <div className=" ">
                                <img src={product.img} alt="..." />
                            </div>
                            <h2>{product.name}</h2>
                            <h5>{product.company}</h5>
                            <div className="d-grid justify-content-center align-items-center">
                                <p className="fw-bold mt-2">{product.description}</p>
                            </div>
                            <h3>Price: ${product.price}</h3>

                            <button
                                onClick={() => handleDelete(product?._id)}
                                className="btn btn-danger"
                            >
                                Delete
                            </button>

                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default ManageProducts;