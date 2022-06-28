import * as React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from '@mui/material';
import { ProductsContent, ProductsTableHeader } from './ProductTableStyle';
import Link from 'next/link'
import axios from 'axios';


export const PanelProductTable = ({ data }) => {

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/api/products/${id}`);
    } catch(err) {
      console.log(err)
    }
  }

  return (
    <ProductsContent>
        <ProductsTableHeader>
          <h1>Products</h1>
          <Button variant="outlined">Add Product</Button>
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
                  <TableCell>
                    <Button variant="contained">
                      <Link href={`/admin/products/${data._id}`}>
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
    </ProductsContent>
  );
}

export default PanelProductTable;
