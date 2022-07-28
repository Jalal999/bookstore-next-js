import { TextField, Alert } from "@mui/material";
import { Form, InputField, UpdateBtn, FormLayout } from "./UpdateUserFormStyle";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { updateItem } from "../../../util/common";


const UpdateUserForm = ({ user }) => {
    const { register, handleSubmit, formState: { errors }, getValues } = useForm();
    const [errMsg, setErrMsg] = useState(null);
    const [succMsg, setSuccMsg] = useState(null);

    const onSubmit = async (data) => {
        const id = user._id;
        const name = data.name;
        const email = data.email;
        const password = data.password;
        const address = data.address;
        const status = data.status
        const updatedUser = { id, name, email, password, address, status };

        const result = await updateItem('user', updatedUser)
        if (result.data.hasError) {
            setSuccMsg(null)
            setErrMsg("There is some problem while updating user...");
        } else {
            setErrMsg(null)
            setSuccMsg("User is updated successfully!")
        }
    }

    return (
        <>
            {errMsg && <Alert severity="error">{errMsg}</Alert>}
            {succMsg && <Alert severity="success">{succMsg}</Alert>}
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
                    <InputField>
                        <TextField
                            label="Status"
                            {...register("status")}
                            style={{ width: "300px" }}
                            type="text"
                            variant="outlined"
                            defaultValue={user.status}
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
        </>
    );
}

export default UpdateUserForm;