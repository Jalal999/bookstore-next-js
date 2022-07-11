import { useState } from "react";
import { Dialog, TextField } from "@mui/material";
import { FormLayout, InputField, Form, AddBtn } from "./AddUserFormStyle";
import { useForm } from "react-hook-form";
import axios from 'axios'


const AddUserForm = ({ showDialog, setAlert }) => {
    const { register, handleSubmit, formState: { errors }, getValues } = useForm();
    const [open, setOpen] = useState(showDialog);

    const handleClose = () => {
        setOpen(false)
    }

    const onSubmit = async (data) => {
        console.log(data)
        const name = data.name;
        const email = data.email;
        const password = data.password;
        const address = data.address;
        try {
            const newUser = { name, email, password, address };
            console.log(newUser)
            const baseUrl = process.env.BASE_URL
            await axios.post(`http://localhost:3000/api/user`, newUser);
        } catch (err) {
            console.log(err)
            passAlert(false)
        }
        setOpen(false);
        setAlert(true);
    }

    const passAlert = (isSuccess) => {
        setAlert(isSuccess)
    }

    return (
        <Dialog onClose={handleClose} open={open} csx={{ display: 'flex' }}>
            <FormLayout>
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <InputField>
                        <TextField
                            style={{ width: "200px" }}
                            label="User Name"
                            {...register("name", {
                                required: "Required"
                            }
                            )}
                            type="text"
                            variant="outlined"
                            error={!!errors?.name}
                            helperText={errors?.name ? errors.name.message : null}
                        />
                    </InputField>
                    <br />
                    <InputField>
                        <TextField
                            label="Email"
                            {...register("email", {
                                required: "Required"
                            }
                            )}
                            style={{ width: "200px" }}
                            type="text"
                            variant="outlined"
                            multiline
                            error={!!errors?.email}
                            helperText={errors?.email ? errors.email.message : null}
                        />
                    </InputField>
                    <br />
                    <InputField>
                        <TextField
                            label="Password"
                            style={{ width: "200px" }}
                            {...register("password", {
                                required: "Required"
                            }
                            )}
                            variant="outlined"
                            error={!!errors?.password}
                            helperText={errors?.password ? errors.password.message : null}
                        />
                    </InputField>
                    <br />
                    <InputField>
                        <TextField
                            label="Address"
                            {...register("address", {
                                required: "Required"
                            }
                            )}
                            style={{ width: "200px" }}
                            variant="outlined"
                            error={!!errors?.address}
                            helperText={errors?.address ? errors.address.message : null}
                        />
                    </InputField>
                    <br />
                    <AddBtn variant="contained" color="primary" type="submit">
                        Add User
                    </AddBtn>
                    <br />
                </Form>
                <br />
            </FormLayout>
        </Dialog>
    )
}

export default AddUserForm;