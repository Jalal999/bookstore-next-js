import { useState } from "react";
import { Dialog, TextField } from "@mui/material";
import { FormLayout, InputField, Form, UpdateBtn } from "./AddProductForm";
import { useForm } from "react-hook-form";
import axios from 'axios'


const AddProductForm = ({ showDialog, setAlert }) => {
    const { register, handleSubmit, formState: { errors }, getValues } = useForm();
    const [open, setOpen] = useState(showDialog);
    const [file, setFile] = useState(null);

    const handleClose = () => {
        setOpen(false)
    }

    const onSubmit = async (data) => {
        console.log(data)
        const title = data.title;
        const description = data.desc;
        const price = data.price;
        const amount = data.stock;

        const img = new FormData();
        img.append("file", file);
        img.append("upload_preset", "uploads")
        try {
            const uploadRes = await axios.post("https://api.cloudinary.com/v1_1/dr2q073z8/image/upload", img);
            const { url } = uploadRes.data;
            const newProduct = { title, description, img: url, price, amount };
            console.log(newProduct)
            const baseUrl = process.env.BASE_URL
            await axios.post(`http://localhost:3000/api/products`, newProduct);
        } catch (err) {
            console.log(err)
            passAlert(false)
        }
        setOpen(false);
        setAlert(true);
    }

    const passAlert = (isSuccess) => {
        setAlert(isSuccess)
    }

    return (
        <Dialog onClose={handleClose} open={open}csx={{display: 'flex'}}>
            <FormLayout>
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <InputField>
                        <TextField
                            style={{ width: "200px" }}
                            {...register("img", {
                                required: "Required"
                            }
                            )}
                            type="file"
                            variant="outlined"
                            error={!!errors?.img}
                            helperText={errors?.img ? errors.img.message : null}
                            onChange={(e) => setFile(e.target.files[0])}
                        />
                    </InputField>
                    <br />
                    <InputField>
                        <TextField
                            style={{ width: "200px" }}
                            label="Product Name"
                            {...register("title", {
                                required: "Required"
                            }
                            )}
                            type="text"
                            variant="outlined"
                            error={!!errors?.title}
                            helperText={errors?.title ? errors.title.message : null}
                        />
                    </InputField>
                    <br />
                    <InputField>
                        <TextField
                            label="Description"
                            {...register("desc", {
                                required: "Required"
                            }
                            )}
                            style={{ width: "200px" }}
                            type="text"
                            variant="outlined"
                            multiline
                            error={!!errors?.desc}
                            helperText={errors?.desc ? errors.desc.message : null}
                        />
                    </InputField>
                    <br />
                    <InputField>
                        <TextField
                            label="Price"
                            style={{ width: "200px" }}
                            {...register("price", {
                                required: "Required"
                            }
                            )}
                            type="number"
                            variant="outlined"
                            error={!!errors?.price}
                            helperText={errors?.price ? errors.price.message : null}
                        />
                    </InputField>
                    <br />
                    <InputField>
                        <TextField
                            label="Stock Amount"
                            {...register("stock", {
                                required: "Required"
                            }
                            )}
                            style={{ width: "200px" }}
                            type="number"
                            variant="outlined"
                            error={!!errors?.stock}
                            helperText={errors?.stock ? errors.stock.message : null}
                        />
                    </InputField>
                    <br />
                    <UpdateBtn variant="contained" color="primary" type="submit">
                        Add Product
                    </UpdateBtn>
                    <br />
                </Form>
                <br />
            </FormLayout>
        </Dialog>
    )
}

export default AddProductForm;