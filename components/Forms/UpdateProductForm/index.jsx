import { TextField, Alert } from "@mui/material";
import { Form, InputField, UpdateBtn, FormLayout } from "./ProductFormStyle";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { updateItem } from "../../../util/common";


const UpdateProductForm = ({ product }) => {
  const { register, handleSubmit, formState: { errors }, getValues } = useForm();
  const [errMsg, setErrMsg] = useState(null)
  const [succMsg, setSuccMsg] = useState(null)

  const onSubmit = async (data) => {
    console.log(data)
    const id = product._id;
    const title = data.title;
    const description = data.desc;
    const img = product.img;
    const price = data.price;
    const amount = data.stock;
    const updatedProduct = { id, title, description, img, price, amount };

    const result = await updateItem('products', updatedProduct);

    if (result.data.hasError) {
      setSuccMsg(null)
      setErrMsg("There is error while updating product...");
    } else {
      setErrMsg(null);
      setSuccMsg("The product is updated successfully!");
    }
  }

  return (
    <>
      {errMsg && <Alert severity="error">{errMsg}</Alert>}
      {succMsg && <Alert severity="success">{succMsg}</Alert>}
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
              data-testid="productName"
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
    </>
  );
}

export default UpdateProductForm;