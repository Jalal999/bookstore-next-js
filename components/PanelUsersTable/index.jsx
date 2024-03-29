import * as React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, Alert } from '@mui/material';
import { UsersContent, UsersTableHeader } from './UsersTableStyle';
import Link from 'next/link'
import axios from 'axios';
import { useState } from 'react';
import AddUserForm from '../Forms/AddUserForm';
import ConfirmDialog from '../ConfirmDialog';
import { deleteItem } from '../../util/common';

export const PanelUsersTable = ({ data }) => {
  const [showAddForm, setShowAddForm] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null)
  const [successMsg, setSuccessMsg] = useState(null)
  const [confirmDialog, setConfirmDialog] = useState(false);
  const [deletingProductID, setDeletingProductID] = useState("");

  console.log(data)
  const handleDelete = async (id) => {
    setConfirmDialog(false);

    const result = await deleteItem('user', id);
    if (result.data.hasError) {
      setSuccessMsg(null)
      setErrorMsg("There is an error while deleting user.")
    } else {
      setErrorMsg(null);
      setSuccessMsg("The user is deleted succesfully!")
    }
  }

  const setAlert = (isSuccess) => {
    if (!isSuccess) {
      setErrorAlert(true);
      setErrorMsg("The new user is not added...")
    } else {
      setSuccessMsg("The new user is added successfully!")
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
    <UsersContent>
      {errorMsg && <Alert severity="error">{errorMsg}</Alert>}
      {successMsg && <Alert severity="success">{successMsg}</Alert>}
      <UsersTableHeader>
        <h1>Users</h1>
        <Button variant="outlined" onClick={() => setShowAddForm(true)}>Add User</Button>
      </UsersTableHeader>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>User ID</TableCell>
              <TableCell align="right">User Name</TableCell>
              <TableCell align="right">User Email</TableCell>
              <TableCell align="right">User Password</TableCell>
              <TableCell align="right">User Address</TableCell>
              <TableCell align="right">User Status</TableCell>
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
                <TableCell align="right">{data.name}</TableCell>
                <TableCell align="right">{data.email}</TableCell>
                <TableCell align="right">{data.password.slice(0, 10)}...</TableCell>
                <TableCell align="right">{data.address.slice(0, 20)}...</TableCell>
                <TableCell align="right">{data.status}</TableCell>
                <TableCell align='right'>
                  <Button variant="contained">
                    <Link href={`/admin/users/${data._id}`}>
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
      {showAddForm && <AddUserForm showDialog={showAddForm} setAlert={setAlert} />}
      {confirmDialog && <ConfirmDialog question={'Do you want to delete user?'} showDialog={confirmDialog} confirmAction={confirmAction} />}
    </UsersContent>
  );
}

export default PanelUsersTable;