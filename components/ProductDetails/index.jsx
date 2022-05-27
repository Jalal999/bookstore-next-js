import { Card, CardContent, CardMedia, Typography, Button, CardActionArea, CardActions, TextField, Rating  } from '@mui/material';
import { ProductHeading, ProductCard, ProductAmount, Amount, PriceRate, AddButton } from './ProductDetailsStyle';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addProduct } from '../../redux/cartSlice';
import AddCartDialog from '../AddCartDialog';

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
                        <Typography variant="body2" color="text.secondary">
                            {product.description}
                        </Typography>
                        <ProductAmount>
                            <Amount>
                                <label>Amount:</label>
                                <TextField
                                id="outlined-size-small"
                                type="number"
                                defaultValue="1"
                                size="small"
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