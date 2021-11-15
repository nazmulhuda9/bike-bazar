import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";

const ManageOrders = () => {
    const [orders, setOrders] = useState([])
    const [orderId, setOrderId] = useState('')

    useEffect(() => {
        fetch("https://obscure-headland-23600.herokuapp.com/allOrders")
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [])


    const { register, handleSubmit } = useForm();

    const handleOrderId = id => {
        setOrderId(id)
    }

    const onSubmit = data => {
        console.log(data);
        fetch(`https://obscure-headland-23600.herokuapp.com/statusUpdate/${orderId}`, {
            method: "PUT",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data),
        })
            .then(res => res.json())
            .then(data => console.log(data))
    }

    return (
        <div className="container p-5">
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">Serial</th>
                        <th scope="col">Product </th>
                        <th scope="col">Price </th>
                        <th scope="col">User</th>
                        <th scope="col">Status</th>

                    </tr>
                </thead>
                {
                    orders.map((order, index) => (
                        <tbody>
                            <tr>

                                <td>{index + 1}</td>
                                <td>{order.productName}</td>
                                <td>{order.price}</td>
                                <td>{order.name}</td>
                                <td>
                                    <form onSubmit={handleSubmit(onSubmit)}>

                                        <select onClick={() => handleOrderId(order._id)} {...register("status")}>
                                            <option defaultValue={order?.status}>{order?.status}</option>
                                            <option value="approved">Approved</option>
                                            <option value="done">Done</option>
                                        </select>
                                        <input type="submit" />
                                    </form>

                                </td>
                            </tr>

                        </tbody>
                    ))
                }
            </table>
        </div>
    );
};

export default ManageOrders;