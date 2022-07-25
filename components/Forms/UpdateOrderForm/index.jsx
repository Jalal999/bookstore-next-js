import { TextField, Alert } from "@mui/material";
import { Form, InputField, UpdateBtn, FormLayout } from "./UpdateOrderFormStyle";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { updateItem } from "../../../util/common";

const UpdateOrderForm = ({ order }) => {
    const { register, handleSubmit, formState: { errors }, getValues } = useForm();
    const [errMsg, setErrMsg] = useState(null)
    const [succMsg, setSuccMsg] = useState(null)

    const onSubmit = async (data) => {
        const id = order._id
        const customer = order.customer;
        const email = order.email;
        const total = order.total;
        const status = data.orderStatus;
        const updatedOrder = { id, customer, email, total, status };

        const result = await updateItem('orders', updatedOrder)
        if (result.data.hasError) {
            setSuccMsg(null)
            setErrMsg("There is error while updating order's status...");
        } else {
            setErrMsg(null);
            setSuccMsg("The order's status is updated successfully!");
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
                            label="Order ID"
                            {...register("orderID")}
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
        </>
    );
}

export default UpdateOrderForm;