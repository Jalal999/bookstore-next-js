import { Form, Input, LoginBtn } from "./LoginStyle";
import axios from "axios"
import { useForm } from "react-hook-form";
import { Container } from "@mui/material";

const LoginForm = () => {
    const { register, handleSubmit, formState: { errors }, getValues } = useForm();

    const onSubmit = async (data) => {
        console.log(data)
    }
   
    return (
        <Container maxWidth="xs">
            <Form onSubmit={handleSubmit(onSubmit)}>
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
                        }})
                    }
                    error={!!errors?.email}
                    helperText={errors?.email ? errors.email.message : null}
                />
                <Input
                    variant="outlined"
                    fullWidth
                    autoComplete="password"
                    autoFocus
                    placeholder="Password"
                    {...register("password", { 
                        required: "Required"})
                    }
                    error={!!errors?.password}
                    helperText={errors?.password ? errors.password.message : null}
                />
                <LoginBtn variant="contained" color="primary" type="submit">Login</LoginBtn>
            </Form>
        </Container>
    )
}

export default LoginForm;