import * as React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, Alert } from '@mui/material';
import { OrdersContent } from './OrdersTableStyle';
import Link from 'next/link'
import axios from 'axios';
import { useState } from 'react';
import ConfirmDialog from '../ConfirmDialog';
import { deleteItem } from '../../util/common';


export const PanelOrdersTable = ({ data }) => {
  const [errorMsg, setErrorMsg] = useState(null)
  const [successMsg, setSuccessMsg] = useState(null)
  const [confirmDialog, setConfirmDialog] = useState(false);
  const [deletingOrderID, setDeletingOrderID] = useState("");

  const handleDelete = async (id) => {
    setConfirmDialog(false);

    const result = await deleteItem('orders', id);
    if (result.data.hasError) {
      setSuccessMsg(null)
      setErrorMsg("There is an error while deleting product.")
    } else {
      setErrorMsg(null)
      setSuccessMsg("The order is deleted successfully");
    }
  }

  const handleClick = (id) => {
    setConfirmDialog(true);
    setDeletingOrderID(id);
  }

  const confirmAction = (isConfirm) => {
    if (isConfirm) {
      handleDelete(deletingOrderID);
    } else {
      setConfirmDialog(false)
    }
  }

  return (
    <OrdersContent>
      {errorMsg && <Alert severity="error">{errorMsg}</Alert>}
      {successMsg && <Alert severity="success">{successMsg}</Alert>}
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
                <TableCell align="right">{data.status}</TableCell>
                <TableCell align='right'>
                  <Button variant="contained">
                    <Link href={`/admin/orders/${data._id}`}>
                      View
                    </Link>
                  </Button>
                </TableCell>
                <TableCell align='left'>
                  <Button variant="contained" color="error" onClick={() => handleClick(data._id)}>
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      {confirmDialog && <ConfirmDialog question={'Do you want to delete order?'} showDialog={confirmDialog} confirmAction={confirmAction} />}
    </OrdersContent>
  );
}

export default PanelOrdersTable;