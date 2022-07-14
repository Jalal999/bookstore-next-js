import { useState } from "react";
import { Dialog, TextField, Alert } from "@mui/material";
import { FormLayout, InputField, Form, AddBtn } from "./AddUserFormStyle";
import { useForm } from "react-hook-form";
import { signup } from "../../../util/common";


const AddUserForm = ({ showDialog, setAlert }) => {
    const { register, handleSubmit, formState: { errors }, getValues } = useForm();
    const [open, setOpen] = useState(showDialog);
    const [msgType, setMsgType] = useState(null);
    const [alertMsg, setAlertMsg] = useState(null);


    const handleClose = () => {
        setOpen(false)
    }

    const onSubmit = async (data) => {
        console.log(data)
        const name = data.name;
        const email = data.email;
        const password = data.password;
        const address = data.address;
        // const status = data.status;
        const newUser = { name, email, password, address };
        const result = await signup(newUser)

        if (result.data.hasError) {
            setMsgType('error');
            setAlertMsg("There is already registered user with " + result.data.errorMessage.keyValue.email);
        } else {
            setOpen(false);
            setAlert(true);
        }
    }


    return (
        <Dialog onClose={handleClose} open={open} csx={{ display: 'flex' }}>
            {msgType === 'error' && <Alert severity="error">{alertMsg}</Alert>}
            <FormLayout>
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <InputField>
                        <TextField
                            style={{ width: "200px" }}
                            label="User Name"
                            {...register("name", {
                                required: "Required",
                                pattern: {
                                    value: /^[A-Za-z]+(\s+[A-Za-z]+)+$/,
                                    message: "Invalid Name and Surname(at least TWO words)!",
                                }
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
                                required: "Required",
                                pattern: {
                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                    message: "Invalid email address",
                                }
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
                                required: "Required",
                                pattern: {
                                    value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,8}$/i,
                                    message: "Password should be 6-8 characters containing at least one uppercase letter, \none lowercase letter, \none number \nand one special character..."
                                }
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