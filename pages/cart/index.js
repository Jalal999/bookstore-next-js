import { useDispatch, useSelector } from "react-redux"

const index = () => {
    const dispatch = useDispatch();
    const cart = useSelector((state)=>state.cart);

    return (
        <>
            {cart.products.map(product => (
                <div>
                    <p>{product.title}</p>
                    <p>{product.amount}</p>
                </div>
            ))}
        </>
            
    )
}

export default index