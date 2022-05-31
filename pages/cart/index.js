import { useDispatch, useSelector } from "react-redux"
import CartItem from "../../components/CartItem";
import { Typography } from '@mui/material';
import { BreakLine, CheckoutBtn, CartDesc } from "../../components/CartItem/CartItemStyle";
import Link from 'next/link'


const Index = () => {
    const dispatch = useDispatch();
    const cart = useSelector((state)=>state.cart);

    return (
        <>
            {cart.products.map(product => 
                <CartItem key={product.id} item={product} />
            )}
            <CartDesc>
                <BreakLine />
                {cart.total === 0 ?
                    <p>Cart is empty!!!</p>
                :
                    <div>
                        <Typography mb={0} variant="h5">Total cost: </Typography>
                        <Typography mt={0}>${cart.total}</Typography>
                        <CheckoutBtn variant="contained"><Link href='/checkout'>Checkout</Link></CheckoutBtn>
                    </div>
                }
            </CartDesc>
        </>
            
    )
}

export default Index