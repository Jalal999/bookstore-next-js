import { useSelector } from "react-redux"
import OrderItem from "../../components/OrderItem";
import { CheckoutBtn } from "../../components/CartItem/CartItemStyle";
import { Checkout, OrderDesc, BreakLine } from "../../components/OrderItem/OrderItemStyle";
import { Typography } from "@mui/material";
import { useState } from "react";
import OrderForm from "../../components/OrderForm";


const Index = () => {
    const cart = useSelector((state)=>state.cart);
    const [showOrderForm, setShowOrderForm] = useState(false)

    return (
        <div>
            {cart.products.map(item =>
                <OrderItem key={item.id} item={item} />
            )}
            <Checkout>
                <OrderDesc>
                    <Typography mb={0}>Total cost: </Typography>
                    <Typography mt={0} variant="h5">${cart.total}</Typography>
                </OrderDesc>
                <BreakLine />
                {showOrderForm && <OrderForm />}
                {!showOrderForm && <CheckoutBtn variant="contained" onClick={()=>setShowOrderForm(true)}>Checkout</CheckoutBtn>}
            </Checkout>
        </div>
    )
}

export default Index;