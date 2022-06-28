import {
  TextField,
  Box
} from "@mui/material";
import * as React from "react";
import { Form, InputField, UpdateBtn, FormLayout } from "./ProductFormStyle";
import { useForm } from "react-hook-form";
import axios from "axios";


const ProductForm = ({ product }) => {
  const { register, handleSubmit, formState: { errors }, getValues } = useForm();

  const onSubmit = async (data) => {
    console.log(data)
    const productID = product._id;
    const title = data.title;
    const description = data.desc;
    const img = product.img;
    const price = data.price;
    const amount = data.stock;

    try {
        const updatedProduct = { title, description, img, price, amount };
        console.log(updatedProduct)
        const baseUrl = process.env.BASE_URL
        await axios.put(`http://localhost:3000/api/products/${product._id}`, updatedProduct);
    } catch(err) {
        console.log(err)
    }
  }

  return (
    <FormLayout>
      <img width='200px' height='300px' src={product.img} />
      <Form onSubmit={handleSubmit(onSubmit)}>
        <InputField>
            <TextField
            disabled
            label="Product ID"
            style={{ width: "300px" }}
            type="text"
            variant="outlined"
            value={product._id}
            />
        </InputField>
        <br />
        <InputField>
            <TextField
            style={{ width: "300px" }}
            label="Product Name"
            {...register("title")}
            type="text"
            variant="outlined"
            defaultValue={product.title}
            />
        </InputField>
        <br />
        <InputField>
            <TextField
            label="Price"
            style={{ width: "300px" }}
            {...register("price")}
            type="number"
            variant="outlined"
            defaultValue={product.price}
            />
        </InputField>
        <br />
        <InputField>
            <TextField
            label="Stock Amount"
            {...register("stock")}
            style={{ width: "300px" }}
            type="number"
            variant="outlined"
            defaultValue={product.amount}
            />
        </InputField>
        <br />
        <InputField>
            <TextField
            label="Description"
            {...register("desc")}
            style={{ width: "300px" }}
            type="text"
            variant="outlined"
            multiline
            defaultValue={product.description}
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

export default ProductForm;