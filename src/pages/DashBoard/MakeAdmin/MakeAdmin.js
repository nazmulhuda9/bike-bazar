import { TextField, Button } from '@mui/material';
import React, { useState } from 'react';

const MakeAdmin = () => {
    const [email, setEmail] = useState('')

    const handleOnBlur = (e) => {
        setEmail(e.target.value);
    }


    const handleAdminSubmit = e => {
        const user = { email }
        fetch(`https://obscure-headland-23600.herokuapp.com/users/admin`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    alert("Make Admin Successfully");
                    e.target.value = ""
                }
                console.log(data)
            })

        e.preventDefault();
    }
    return (
        <div className="container m-5 p-5">
            <h1 className="p-5">Make Admin</h1>

            <form onSubmit={handleAdminSubmit}>
                <TextField
                    onBlur={handleOnBlur}
                    id="standard-basic"
                    label="Email"
                    variant="standard" />

                <Button type="submit" variant="contained">submit</Button>

            </form>
        </div>
    );
};

export default MakeAdmin;