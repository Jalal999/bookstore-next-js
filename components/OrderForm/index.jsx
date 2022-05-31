import { Form, Input } from "./OrderForm";
// import { regexEmail, regexName } from "./Regex";
import { useForm } from "react-hook-form";
import { Button, Container } from "@mui/material";
import { CheckoutBtn } from "../CartItem/CartItemStyle";
import { useState } from "react";
import ThankDialog from "./ThankDialog";

const OrderForm = () => {
    const { register, handleSubmit, formState: { errors }, getValues } = useForm();
    const [showDialog, setShowDialog] = useState(false);

    const onSubmit = (data) => {
        console.log(data)
        setShowDialog(true)
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
                    // error={email === ""}
                />
                <Input
                    variant="outlined"
                    fullWidth
                    autoComplete="confirmEmail"
                    autoFocus
                    placeholder="Confirm Email"
                    {...register("confirmEmail", { 
                        required: "Required",
                        validate: {
                            emailMatch: value => (value === getValues().email) || 'Emails do NOT match!',
                        }
                    })
                    }
                    error={!!errors?.confirmEmail}
                    helperText={errors?.confirmEmail ? errors.confirmEmail.message : null}
                    // error={email === ""}
                />
                <Input
                    variant="outlined"
                    fullWidth
                    autoComplete="nameSurname"
                    autoFocus
                    placeholder="Name and Surname"
                    {...register("nameSurname", { 
                        required: "Required",
                        pattern: {
                            value: /^[A-Za-z]+(\s+[A-Za-z]+)+$/,
                            message: "Invalid Name and Surname(at least TWO words)!",
                        }})
                    }
                    error={!!errors?.nameSurname}
                    helperText={errors?.nameSurname ? errors.nameSurname.message : null}
                />
                <CheckoutBtn variant="outlined" color="primary" type="submit">Submit</CheckoutBtn>
            </Form>
            {showDialog && <ThankDialog showDialog={showDialog}/> }
        </Container>
    )
}

export default OrderForm;