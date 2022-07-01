import {
    TextField,
    Box
} from "@mui/material";
import { Form, InputField, UpdateBtn, FormLayout } from "./UpdateOrderFormStyle";
import { useForm } from "react-hook-form";
import axios from "axios";


const UpdateOrderForm = ({ order }) => {
    const { register, handleSubmit, formState: { errors }, getValues } = useForm();

    const onSubmit = async (data) => {
        console.log(data)
        const customer = data.customer;
        const email = data.customerEmail;
        const total = data.totalCost;
        const status = data.orderStatus;

        try {
            const updatedOrder = { customer, email, total, status };
            console.log(updatedOrder)
            const baseUrl = process.env.BASE_URL
            await axios.put(`http://localhost:3000/api/orders/${order._id}`, updatedOrder);
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
                        label="Order ID"
                        style={{ width: "300px" }}
                        type="text"
                        variant="outlined"
                        value={order._id}
                    />
                </InputField>
                <br />
                <InputField>
                    <TextField
                        disabled
                        style={{ width: "300px" }}
                        label="Customer"
                        {...register("customer")}
                        type="text"
                        variant="outlined"
                        defaultValue={order.customer}
                    />
                </InputField>
                <br />
                <InputField>
                    <TextField
                        disabled
                        label="Customer Email"
                        style={{ width: "300px" }}
                        {...register("customerEmail")}
                        type="text"
                        variant="outlined"
                        defaultValue={order.email}
                    />
                </InputField>
                <br />
                <InputField>
                    <TextField
                        disabled
                        label="Total Cost"
                        {...register("totalCost")}
                        style={{ width: "300px" }}
                        type="number"
                        variant="outlined"
                        defaultValue={order.total}
                    />
                </InputField>
                <br />
                <InputField>
                    <TextField
                        label="Order Status"
                        {...register("orderStatus", {
                            required: "Required"
                        }
                        )}
                        style={{ width: "300px" }}
                        type="text"
                        variant="outlined"
                        multiline
                        defaultValue={order.status}
                        error={!!errors?.stock}
                        helperText={errors?.stock ? errors.stock.message : null}
                    />
                </InputField>
                <br />
                <UpdateBtn variant="contained" color="primary" type="submit">
                    Update
                </UpdateBtn>
                <br />
            </Form>
            <br />
        </FormLayout>
    );
}

export default UpdateOrderForm;