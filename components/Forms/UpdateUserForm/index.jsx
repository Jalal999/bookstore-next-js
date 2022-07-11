import {
    TextField,
    Box
} from "@mui/material";
import * as React from "react";
import { Form, InputField, UpdateBtn, FormLayout } from "./UpdateUserFormStyle";
import { useForm } from "react-hook-form";
import axios from "axios";


const UpdateUserForm = ({ user }) => {
    const { register, handleSubmit, formState: { errors }, getValues } = useForm();

    const onSubmit = async (data) => {
        console.log(data)
        const name = data.name;
        const email = data.email;
        const password = data.password;
        const address = data.address;

        try {
            const updatedUser = { name, email, password, address };
            console.log(updatedUser)
            const baseUrl = process.env.BASE_URL
            await axios.put(`http://localhost:3000/api/user/${user._id}`, updatedUser);
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <FormLayout>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <InputField>
                    <TextField
                        disabled
                        label="User ID"
                        style={{ width: "300px" }}
                        type="text"
                        variant="outlined"
                        value={user._id}
                    />
                </InputField>
                <br />
                <InputField>
                    <TextField
                        style={{ width: "300px" }}
                        label="User Name"
                        {...register("name")}
                        type="text"
                        variant="outlined"
                        defaultValue={user.name}
                    />
                </InputField>
                <br />
                <InputField>
                    <TextField
                        label="Email"
                        style={{ width: "300px" }}
                        {...register("email")}
                        variant="outlined"
                        defaultValue={user.email}
                    />
                </InputField>
                <br />
                <InputField>
                    <TextField
                        disabled
                        label="Password"
                        {...register("password")}
                        style={{ width: "300px" }}
                        variant="outlined"
                        defaultValue={user.password}
                    />
                </InputField>
                <br />
                <InputField>
                    <TextField
                        label="Address"
                        {...register("address")}
                        style={{ width: "300px" }}
                        type="text"
                        variant="outlined"
                        multiline
                        defaultValue={user.address}
                    />
                </InputField>
                <br />
                <UpdateBtn variant="contained" color="primary" type="submit">
                    Update User
                </UpdateBtn>
                <br />
            </Form>
            <br />
        </FormLayout>
    );
}

export default UpdateUserForm;