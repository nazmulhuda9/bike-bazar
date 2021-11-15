import React, { useEffect, useState } from "react";
import "./Review.css"

const Review = () => {
    const [review, setReview] = useState([]);
    useEffect(() => {
        fetch("https://obscure-headland-23600.herokuapp.com/review")
            .then((res) => res.json())
            .then((data) => setReview(data));
    }, []);
    console.log(review);
    return (
        <div>
            <h1 className="text-center mt-4 pt-5">Customer Review</h1>
            <hr />
            <div className="container">
                <div className="row  d-flex justify-content-evenly ">
                    {review?.map((rv) => (
                        <div className="col-md-3  col-lg-2 text-center m-2 ">
                            <div className="service p-2 review">
                                <h3>{rv.name}</h3>
                                <hr />
                                <p>{rv.review}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Review;
