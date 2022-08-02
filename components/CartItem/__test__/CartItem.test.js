import { fireEvent, render, screen } from "@testing-library/react";
import '@testing-library/jest-dom'
import { Provider } from "react-redux";
import store from "../../../redux/store";
import CartItem from "..";


const TestCartItem = () => {
    return (
        <Provider store={store}>
            <CartItem item={{ img: '', title: 'React JS', price: 10, quantity: 5 }} />
        </Provider>
    )
}

describe('CartItem', () => {
    it('renders a cart item component', () => {
        render(<TestCartItem />)
    })

    it('renders a input field to be in the doc', () => {
        render(<TestCartItem />)
        const inputField = screen.getByRole(/spinbutton/i);
        expect(inputField).toBeInTheDocument();
    })

    it('checks an input field to see if it accepts NaN value', () => {
        render(<TestCartItem />)
        const inputField = screen.getByRole(/spinbutton/i);
        fireEvent.change(inputField, { target: { value: -5 } })
        expect(inputField).toHaveValue(5);
    })
})

