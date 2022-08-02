import { fireEvent, render, screen } from "@testing-library/react";
import '@testing-library/jest-dom'
import { Provider } from "react-redux";
import store from "../../../redux/store";
import { BrowserRouter, Router } from "react-router-dom";
import ProductDetails from "..";


const TestProductDetails = () => {
    return (
        <Provider store={store}>
            <ProductDetails product={{ title: 'React JS', img: '', description: 'react js book', price: 10 }} />
        </Provider>
    )
}

describe('ProductDetails', () => {
    it('renders a product details', () => {
        render(<TestProductDetails />)
    })

    it('renders a input field to be in the doc', () => {
        render(<TestProductDetails />)
        const inputField = screen.getByRole(/spinbutton/i);
        expect(inputField).toBeInTheDocument();
    })

    it('checks an input field to see if it accepts NaN value', () => {
        render(<TestProductDetails />)
        const inputField = screen.getByRole(/spinbutton/i);
        fireEvent.change(inputField, { target: { value: -5 } })
        expect(inputField).toHaveValue(1);
    })

    it('checks if dialog pops up when button is clicked', () => {
        render(<TestProductDetails />)
        fireEvent.click(screen.getByText(/add to cart/i))
        expect(screen.getByText(/go to cart/i))
    })

})

