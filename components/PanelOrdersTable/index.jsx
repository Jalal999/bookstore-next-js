import * as React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from '@mui/material';
import { OrdersContent } from './OrdersTableStyle';
import Link from 'next/link'
import axios from 'axios';
import { useState } from 'react';


export const PanelOrdersTable = ({ data }) => {
    const [orderState, setOrderState] = useState('pending');

    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:3000/api/orders/${id}`);
        } catch(err) {
            console.log(err)
        }
    }
  return (
    <OrdersContent>
        <h1>Orders</h1>
        <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
            <TableRow>
                <TableCell>Order ID</TableCell>
                <TableCell align="right">Customer</TableCell>
                <TableCell align="right">Email</TableCell>
                <TableCell align="right">Total Cost</TableCell>
                <TableCell align="right">Ordered At</TableCell>
                <TableCell align='right'>Order Status</TableCell>
            </TableRow>
            </TableHead>
            <TableBody>
            {data.map((data) => (
                <TableRow
                key={data._id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                <TableCell component="th" scope="row">
                    {data._id.slice(0, 5)}...
                </TableCell>
                <TableCell align="right">{data.customer}</TableCell>
                <TableCell align="right">{data.email}</TableCell>
                <TableCell align="right">{data.total}</TableCell>
                <TableCell align="right">{data.createdAt}</TableCell>
                <TableCell align="right">{orderState}</TableCell>
                <TableCell>
                    <Button variant="contained">
                      <Link href={`/admin/orders/${data._id}`}>
                        View
                      </Link>
                    </Button>
                  </TableCell>
                  <TableCell>
                    <Button variant="outlined" color="error" onClick={()=>handleDelete(data._id)}>
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
            ))}
            </TableBody>
        </Table>
        </TableContainer>
    </OrdersContent>
  );
}

export default PanelOrdersTable;
