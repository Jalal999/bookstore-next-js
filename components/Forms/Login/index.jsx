import { Form, Input, LoginBtn, FormHeading } from "./LoginStyle";
import axios from "axios"
import { useForm } from "react-hook-form";
import { Alert, Container } from "@mui/material";
import { getSession, signIn } from "next-auth/react"
import { useRouter } from "next/router";
import { useState } from "react";
import { authConstants } from "../../../redux/userSlice";
import { useDispatch } from "react-redux";
import { LOGIN_SUCCESS } from "../../../redux/userSlice";
import Link from 'next/link'

const LoginForm = () => {
    const { register, handleSubmit, formState: { errors }, getValues } = useForm();
    const router = useRouter();
    const [errMsg, setErrMsg] = useState(null);
    const dispatch = useDispatch();
    const query = router.query;
    const name = query.name;

    const onSubmit = async (data) => {
        // console.log(data)
        const email = data.email;
        const password = data.password;
        const payload = { email, password };
        dispatch({ type: authConstants.LOGIN_REQUEST })
        const result = await signIn("credentials", { ...payload, redirect: false });
        console.log(result)

        if (!result.error) {
            const session = await getSession();
            console.log('session: ', session)
            dispatch(LOGIN_SUCCESS(session.user))
            console.log('query', query.fromCheckout)
            if(query.fromCheckout === "") {
                console.log("from checkout")
                router.replace('/checkout')
            } else {
                router.replace('/');
            }
        } else {
            dispatch({
                type: authConstants.LOGIN_FAILURE,
                payload: result.error
            })
            setErrMsg(result.error)
        }
        const session = await getSession();
        console.log('login', { session })
    }

    return (
        <Container maxWidth="xs">
            <FormHeading variant="h5" component="div">Log in...</FormHeading>
            {errMsg && <Alert severity="error">{errMsg}</Alert>}
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
                        }
                    })
                    }
                    error={!!errors?.email}
                    helperText={errors?.email ? errors.email.message : null}
                />
                <Input
                    variant="outlined"
                    fullWidth
                    type="password"
                    autoComplete="password"
                    autoFocus
                    placeholder="Password"
                    {...register("password", {
                        required: "Required",
                    })
                    }
                    error={!!errors?.password}
                    helperText={errors?.password ? errors.password.message : null}
                />
                <LoginBtn variant="contained" color="primary" type="submit">Login</LoginBtn>
                <p>You dont have an account? <Link href="/signup" passHref><b>Register now!</b></Link></p>
            </Form>
        </Container>
    )
}

export default LoginForm;