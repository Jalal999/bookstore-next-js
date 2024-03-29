import { useSelector } from "react-redux"
import OrderItem from "../../components/OrderItem";
import { CheckoutBtn } from "../../components/CartItem/CartItemStyle";
import { Checkout, OrderDesc, BreakLine } from "../../components/OrderItem/OrderItemStyle";
import { Typography } from "@mui/material";
import { useState } from "react";
import OrderForm from "../../components/Forms/OrderForm";
import { useRouter } from "next/router";
import Link from "next/link";


const Index = () => {
    const cart = useSelector((state) => state.cart);
    const [showOrderForm, setShowOrderForm] = useState(false)
    const [userLoggedIn, setUserLoggedIn] = useState(null);
    const userState = useSelector((state) => state.user);
    const user = userState.user;

    // if (user && user.authenticated) {
    //     router.replace('/');
    //     return null;
    // }
    // setUserLoggedIn({user});

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
                {!user.authenticated ?
                    <Link
                        href={{
                            pathname: "/login",
                            query: "fromCheckout",
                        }}
                    >
                        Login to complete your order!
                    </Link>
                    :
                    !showOrderForm && <CheckoutBtn variant="contained" onClick={() => setShowOrderForm(true)}>Checkout</CheckoutBtn>}
            </Checkout>
        </div>
    )
}

// export const getServerSideProps = async (context) => {
//     const baseUrl = process.env.BASE_URL

//     try {
//         const session = await getSession({ req: context.req })
//         if (session && session.user.status === 'customer') {

//             return {
//                 props: {
//                     user: session.user
//                 }
//             }
//         } else {
//             return {
//                 redirect: {
//                     destination: '/login',
//                     permanent: false
//                 }
//             }
//         }
//     } catch (error) {
//         return {
//             redirect: {
//                 destination: '/login',
//                 permanent: false
//             }
//         }
//     }
// };

export default Index;