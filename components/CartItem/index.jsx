import { CardContent, CardMedia, Typography, TextField } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { Item, ItemDesc, ItemAmount } from './CartItemStyle';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateAmount, removeItem } from '../../redux/cartSlice';
import { ProductAmount } from '../ProductDetails/ProductDetailsStyle';


const CartItem = ({ item }) => {
    const [amount, setAmount] = useState(item.amount);
    const dispatch = useDispatch();

    const handleChange = (e) => {
        setAmount(e.target.value)
        dispatch(updateAmount({
            id: item.id,
            title: item.title,
            img: item.img,
            price: item.price,
            quantity: e.target.value
        }
        ));
    }

    const deleteItem = () => {
        dispatch(removeItem(item.id));
    }

    return (
        <Item>
            <CardMedia
                component="img"
                sx={{ width: 100 }}
                image={item.img}
                alt="cart item img alt"
            />
            <CardContent sx={{ flex: '1 0 auto' }}>
                <ItemDesc>
                    <Typography component="div" variant="h5">
                        {item.title}
                    </Typography>
                    <CloseIcon onClick={deleteItem} />
                </ItemDesc>
                <ItemAmount>
                    <Typography component="div" variant="h5">
                        ${item.price}
                    </Typography>
                    <TextField sx={{width: '55px'}}
                        id="outlined-size-small"
                        type="number"
                        InputProps={{ inputProps: { min: "1", max: "10", step: "1" } }}
                        defaultValue={item.quantity}
                        size="small"
                        onChange={(e)=>handleChange(e)}
                    />
                </ItemAmount>
            </CardContent>
        </Item>
    );
};

export default CartItem;