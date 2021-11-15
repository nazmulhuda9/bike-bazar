import { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { dividerClasses } from '@mui/material';



const MyOrder = () => {
    const [order, setOrder] = useState([])
    const { user } = useAuth()
    const email = user.email;


    useEffect(() => {
        fetch(`https://obscure-headland-23600.herokuapp.com/myOrder?email=${email}`)
            .then(res => res.json())
            .then(data => setOrder(data))
    }, [])
    return (

        <TableContainer style={{ width: "75%", margin: "80px", padding: "10px" }} component={Paper}>
            <Table aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>serial</TableCell>
                        <TableCell>Name</TableCell>
                        <TableCell >Price</TableCell>
                        <TableCell >Status</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {order.map((row, index) => (
                        <TableRow
                            key={row.name}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell >{index + 1}</TableCell>
                            <TableCell component="th" scope="row">
                                {row.productName}
                            </TableCell>
                            <TableCell >{row.price}</TableCell>
                            <TableCell style={{ color: 'green' }}>{row.status}</TableCell>

                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default MyOrder;