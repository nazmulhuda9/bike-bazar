import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory, useParams } from "react-router";
import useAuth from '../../../hooks/useAuth';
import Menubar from '../../Shared/Menubar/Menubar';

const OrderProduct = () => {
    const { serviceId } = useParams()
    const [product, setProduct] = useState({})
    const { user } = useAuth()
    const email = user.email;
    const history = useHistory()

    useEffect(() => {
        fetch(`https://obscure-headland-23600.herokuapp.com/singleProduct/${serviceId}`)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [])

    // form   
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        data.status = "pending"
        data.email = email;
        data.price = product.price;
        data.productName = product.name;

        fetch("https://obscure-headland-23600.herokuapp.com/orderPlace/", {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {

                setProduct(result)

                if (result.insertedId) {
                    alert('success')
                    history.push("/dashBoard")
                }


            })
        reset()
    };



    return (
        <>          <Menubar />

            <div className="container m-5">

                <div className="row">
                    <div className="col-md-6">
                        <img src={product.img} alt="" />
                        <h2>{product.name}</h2>

                        <h3>{product.price} tk/=</h3>
                        <h4>{product.company}</h4>
                        <h6>{product.description}</h6>

                    </div>
                    <div className="col-md-6"><h1>Purchase Your Favourite Product</h1>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <input style={{ width: "290px", margin: 7 }} type='text' Value={product.name} {...register('productName')} /> <br />

                            <input style={{ width: "290px", margin: 7 }} type="number" defaultValue={product.price} {...register("price")} /> <br />

                            {/* <input type="url" defaultValue={product.img} {...register("name")} placeholder="img" disabled /> <br /> */}

                            <input style={{ width: "290px", margin: 7 }} type="text" defaultValue={user.displayName} {...register("name")} /> <br />

                            <input style={{ width: "290px", margin: 7 }} type="text"  {...register("address")} placeholder="Address" />  <br />
                            <input style={{ width: "290px", margin: 7 }} type="number"  {...register("phone")} placeholder="Phone" />  <br />
                            <input style={{ width: "290px", margin: 7 }} type="email" defaultValue={user.email}   {...register("email")} />  <br />
                            <input style={{ margin: 7 }} type="submit" />
                        </form>

                    </div>

                </div>


            </div></>
    );
};

export default OrderProduct;