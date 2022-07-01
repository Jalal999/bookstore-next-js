import * as React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, Alert } from '@mui/material';
import { ProductsContent, ProductsTableHeader } from './ProductTableStyle';
import Link from 'next/link'
import axios from 'axios';
import { useState } from 'react';
import AddProductForm from '../Forms/AddProductForm';
import ConfirmDialog from '../ConfirmDialog';

export const PanelProductTable = ({ data }) => {
  const [showAddForm, setShowAddForm] = useState(false);
  const [errorAlert, setErrorAlert] = useState(false);
  const [errorMsg, setErrorMsg] = useState("")
  const [successMsg, setSuccessMsg] = useState("")
  const [confirmDialog, setConfirmDialog] = useState(false);
  const [deletingProductID, setDeletingProductID] = useState("");

  const handleDelete = async (id) => {
    setConfirmDialog(false);
    try {
      await axios.delete(`http://localhost:3000/api/products/5`);
    } catch (err) {
      console.log(err)
      if (!!err) {
        setErrorAlert(true);
        setErrorMsg("There is an error while deleting product.")
      }
    }
  }

  const setAlert = (isSuccess) => {
    if (!isSuccess) {
      setErrorAlert(true);
      setErrorMsg("The new product is not added...")
    } else {
      setSuccessMsg("The new product is added successfully!")
    }
  }

  const handleClick = (id) => {
    console.log("Sdfdsf")
    setConfirmDialog(true);
    setDeletingProductID(id);
  }

  const confirmAction = (isConfirm) => {
    if (isConfirm) {
      handleDelete(deletingProductID);
    } else {
      setConfirmDialog(false)
    }
  }


  return (
    <ProductsContent>
      {errorAlert && <Alert severity="error">{errorMsg}</Alert>}
      {successMsg !== "" && <Alert severity="success">{successMsg}</Alert>}
      <ProductsTableHeader>
        <h1>Products</h1>
        <Button variant="outlined" onClick={() => setShowAddForm(true)}>Add Product</Button>
      </ProductsTableHeader>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Product ID</TableCell>
              <TableCell align="right">Title</TableCell>
              <TableCell align="right">Description</TableCell>
              <TableCell align="right">Price</TableCell>
              <TableCell align="right">Amount</TableCell>
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
                <TableCell align="right">{data.title}</TableCell>
                <TableCell align="right">{data.description.slice(0, 25)}...</TableCell>
                <TableCell align="right">{data.price}</TableCell>
                <TableCell align="right">{data.amount}</TableCell>
                <TableCell align='right'>
                  <Button variant="contained">
                    <Link href={`/admin/products/${data._id}`}>
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
      {showAddForm && <AddProductForm showDialog={showAddForm} setAlert={setAlert} />}
      {confirmDialog && <ConfirmDialog question={'Do you want to delete product?'} showDialog={confirmDialog} confirmAction={confirmAction} />}
    </ProductsContent>
  );
}

export default PanelProductTable;
