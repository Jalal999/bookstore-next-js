import { useDispatch, useSelector } from "react-redux"
import CartItem from "../../components/CartItem";
import { Typography } from '@mui/material';
import { BreakLine, CheckoutBtn } from "../../components/CartItem/CartItemStyle";


const index = () => {
    const dispatch = useDispatch();
    const cart = useSelector((state)=>state.cart);
    console.log(cart.products)

    return (
        <>
            {cart.products.map(product => 
                <CartItem key={product.id} item={product} />
            )}
            <BreakLine />
            {cart.total === 0 ?
                <p>Cart is empty!!!</p>
            :
                <div>
                    <Typography mb={0} variant="h5">Total cost: </Typography>
                    <Typography mt={0}>${cart.total}</Typography>
                    <CheckoutBtn variant="contained">Checkout</CheckoutBtn>
                </div>
            }
        </>
            
    )
}

export default index