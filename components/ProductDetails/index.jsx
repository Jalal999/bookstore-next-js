import { CardContent, CardMedia, Typography, CardActionArea, TextField, Rating  } from '@mui/material';
import { ProductHeading, ProductCard, ProductAmount, Amount, PriceRate, AddButton, ProductDesc } from './ProductDetailsStyle';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addProduct } from '../../redux/cartSlice';
import AddCartDialog from './AddCartDialog';

const ProductDetails = ({ product }) => {
    const [quantity, setQuantity] = useState(1);
    const dispatch = useDispatch();
    const [showDialog, setShowDialog] = useState(false);

    const handleClick = () => {
        dispatch(addProduct({
            id: product._id,
            title: product.title,
            img: product.img,
            price: product.price,
            quantity: quantity
        }
        ));
        setShowDialog(true);
    }

    return (
        <div>
            <ProductCard>
                <CardActionArea>
                    <ProductHeading>
                        {product.title}
                    </ProductHeading>
                    <CardMedia
                    component="img"
                    width="100%"
                    image={product.img}
                    alt="book1"
                    />
                    <CardContent>
                        <ProductDesc variant="body2" color="text.secondary">
                            {product.description}
                        </ProductDesc>
                        <ProductAmount>
                            <Amount>
                                <label>Amount:</label>
                                <TextField
                                id="outlined-size-small"
                                type="number"
                                InputProps={{ inputProps: { min: "1", max: "10", step: "1" } }}
                                defaultValue="1"
                                size="small"
                                style={{width: 70}}
                                onChange={(e)=>setQuantity(e.target.value)}
                                />
                            </Amount>
                            <PriceRate>
                                <Typography gutterBottom variant="h5" component="div">
                                    ${product.price}
                                </Typography>
                                <Rating name="read-only" value={2} readOnly />
                            </PriceRate>
                        </ProductAmount> 
                    </CardContent>
                </CardActionArea>
                <AddButton variant="contained" onClick={handleClick}>Add To Cart</AddButton>
            </ProductCard>
            {showDialog && <AddCartDialog showDialog={showDialog}/> }
        </div>
    )
}

export default ProductDetails