import { Form, Input, SignUpBtn, SignUpH2 } from "./SingUpStyle";
import axios from "axios"
import { useForm } from "react-hook-form";
import { Container, Alert } from "@mui/material";
import { useState } from "react";
import { signup } from "../../../util/common";

const SingUpForm = () => {
    const { register, handleSubmit, formState: { errors }, getValues } = useForm();
    const [msgType, setMsgType] = useState(null);
    const [alertMsg, setAlertMsg] = useState(null);

    const onSubmit = async (data) => {
        const name = data.name;
        const email = data.email;
        const password = data.password;
        const address = data.address;
        const newUser = { name, email, password, address };

        const result = await signup(newUser)
        if (result.data.hasError) {
            setMsgType('error');
            setAlertMsg("There is already registered user with " + result.data.errorMessage.keyValue.email);
        } else {
            setMsgType('success');
            setAlertMsg('You have successfully registered. You can log in!')
        }
    }

    return (
        <Container maxWidth="xs">
            <SignUpH2>Sign Up</SignUpH2>
            {msgType === 'error' && <Alert severity="error">{alertMsg}</Alert>}
            {msgType === 'success' && <Alert severity="success">{alertMsg}</Alert>}
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Input
                    variant="outlined"
                    fullWidth
                    autoComplete="name"
                    autoFocus
                    placeholder="Name and Surname"
                    {...register("name", {
                        required: "Required",
                        pattern: {
                            value: /^[A-Za-z]+(\s+[A-Za-z]+)+$/,
                            message: "Invalid Name and Surname(at least TWO words)!",
                        }
                    })
                    }
                    error={!!errors?.name}
                    helperText={errors?.name ? errors.name.message : null}
                />
                <Input
                    variant="outlined"
                    fullWidth
                    autoComplete="email"
                    autoFocus
                    placeholder="Email"
                    {...register("email", {
                        required: "Required",
                        pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: "Invalid email address",
                        }
                    })
                    }
                    error={!!errors?.email}
                    helperText={errors?.email ? errors.email.message : null}
                />
                <Input
                    variant="outlined"
                    type='password'
                    fullWidth
                    autoComplete="password"
                    autoFocus
                    placeholder="Password"
                    {...register("password", {
                        required: "Required",
                        pattern: {
                            value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,8}$/i,
                            message: "Password should be 6-8 characters containing at least one uppercase letter, \none lowercase letter, \none number \nand one special character..."
                        }
                    })
                    }
                    error={!!errors?.password}
                    helperText={errors?.password ? errors.password.message : null}
                />
                <Input
                    variant="outlined"
                    fullWidth
                    autoComplete="address"
                    autoFocus
                    placeholder="Your Address"
                    {...register("address", {
                        required: "Required"
                    })
                    }
                    error={!!errors?.address}
                    helperText={errors?.address ? errors.address.message : null}
                />
                <SignUpBtn variant="contained" color="primary" type="submit">Sign Up</SignUpBtn>
            </Form>
        </Container>
    )
}

export default SingUpForm;