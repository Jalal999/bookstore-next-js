import { Form, Input, OrderBtn } from "./OrderForm";
import axios from "axios"
import { useForm } from "react-hook-form";
import { Container } from "@mui/material";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux"
import ThankDialog from "./ThankDialog";
import { reset } from "../../../redux/cartSlice";
import { postOrder } from "../../../util/common";

const OrderForm = () => {
    const { register, handleSubmit, formState: { errors }, getValues } = useForm();
    const [showDialog, setShowDialog] = useState(false);
    const cart = useSelector((state)=>state.cart);
    const userState = useSelector((state)=>state.user);
    const dispatch = useDispatch();

    const onSubmit = async (data) => {
        console.log(data)
        const email = userState.user.email;
        console.log('order form', email)
        const total = cart.total;
        const address = data.address;
        const res = await axios.get(`http://localhost:3000/api/user`);
        const customer = res.data.filter(data => data.email === email)[0]._id;

        const newOrder = { customer, email, total, address };
        const result = await postOrder(newOrder);
        setShowDialog(true)
        dispatch(reset());
    }
   
    return (
        <Container maxWidth="xs">
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Input
                    variant="outlined"
                    fullWidth
                    autoComplete="email"
                    disabled
                    autoFocus
                    placeholder="Email"
                    defaultValue={userState.user.email}
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
                            emailMatch: value => (value === userState.user.email) || 'Emails do NOT match!',
                        }
                    })
                    }
                    error={!!errors?.confirmEmail}
                    helperText={errors?.confirmEmail ? errors.confirmEmail.message : null}
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
                <Input
                    variant="outlined"
                    fullWidth
                    autoComplete="address"
                    autoFocus
                    placeholder="Address"
                    {...register("address", { 
                        required: "Required"})
                    }
                    error={!!errors?.address}
                    helperText={errors?.address ? errors.address.message : null}
                />
                <OrderBtn variant="contained" color="primary" type="submit">Order</OrderBtn>
            </Form>
            {showDialog && <ThankDialog showDialog={showDialog}/> }
        </Container>
    )
}

export default OrderForm;