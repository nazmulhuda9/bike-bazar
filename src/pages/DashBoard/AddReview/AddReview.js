import React from 'react';
import { useForm } from "react-hook-form";
import useAuth from '../../../hooks/useAuth';


const AddReview = () => {
    const { user } = useAuth()
    const name = user?.displayName;
    // const photo = user?.photoURL;

    console.log(user)
    const { register, handleSubmit, watch, reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        // data.photo = photo;
        data.name = name;
        fetch("https://obscure-headland-23600.herokuapp.com/review", {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data),
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert("review added successfully")
                    reset()
                }
                console.log(data)
            })
    }



    return (
        <>

            <div className="container mt-5 p-5">
                <h2>Add YOur Review</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input defaultValue={name} type='text' {...register("name")} /> <br />

                    {/* <input defaultValue={photo}  {...register("photo")} /> <br /> */}

                    <input style={{ width: "400px", height: "106px" }} type='text' {...register("review")} /> <br />
                    {errors.exampleRequired && <span>This field is required</span>}
                    <input type="submit" />
                </form>
            </div>
        </>
    );
};

export default AddReview;