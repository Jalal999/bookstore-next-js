import { fireEvent, render, screen } from "@testing-library/react";
import UpdateProductForm from "../index";
import '@testing-library/jest-dom'
import store from "../../../../redux/store";
import { Provider } from "react-redux";


const TestUpdateProduct = () => {
    return (
        <Provider store={store}>
            <UpdateProductForm product={[{ _id: 'Obj2432', title: 'React js', description: 'js book', price: 10, amount: 10, img: "ddfds" }]} />
        </Provider>
    )
}

describe('UpdateProductForm', () => {
    it('renders a UpdateProduct component', () => {
        render(<TestUpdateProduct />)
    })

    it("checks if UpdateProduct component renders its product name input by its label", () => {
        render(<UpdateProductForm product={[{ _id: 'Obj2432', title: 'React js', description: 'js book', price: 10, amount: 10, img: "ddfds" }]} />)
        expect(screen.getByLabelText('Product Name'));
    })

    it("checks if UpdateProduct component's input field can change its value", () => {
        render(<TestUpdateProduct />)
        const input = screen.getByRole(/textbox/i, { name: 'Product Name' })
        fireEvent.change(input, { target: { value: "" } });
        fireEvent.click(screen.getByText(/update/i))
        expect(input).toHaveValue("")
    })
})
