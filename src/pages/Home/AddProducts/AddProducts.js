import React from 'react';
import { useForm } from "react-hook-form";


const AddProducts = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        fetch("https://obscure-headland-23600.herokuapp.com/addProducts", {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data),
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {
                    alert("product successfully added")
                }
                reset()
            })
    }



    return (
        <>

            <div className="container mt-5 p-5">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input style={{ width: "290px", margin: 5 }} type="text" {...register("name")} placeholder="Name" /> <br />
                    <input style={{ width: "290px", margin: 5 }} type="text" {...register("company")} placeholder="company" /><br />
                    <input style={{ width: "290px", margin: 5 }} type="text" {...register("description")} placeholder="description" /><br />
                    <input style={{ width: "290px", margin: 5 }} type="number" {...register("price")} placeholder="price" /><br />
                    <input style={{ width: "290px", margin: 5 }} type="url" {...register("img")} placeholder="img" /><br />
                    {errors.exampleRequired && <span>This field is required</span>}
                    <input style={{ margin: 5 }} type="submit" />

                </form>
            </div>
        </>
    );
};

export default AddProducts;