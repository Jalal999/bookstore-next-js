import { render, screen } from "@testing-library/react";
import CustomerMenu from "../CustomerMenu";
import '@testing-library/jest-dom'
import { Provider } from "react-redux";
import store from "../../../redux/store";

const TestCustomerMenu = () => {
    return (
        <Provider store={store}>
            <CustomerMenu />
        </Provider>
    )
}

describe('Customer Menu', () => {
  it('renders a customer menu', () => {
    render(<TestCustomerMenu />)
  })

  it('CustomerMenu Element', () => {
    render(<TestCustomerMenu />)
    const menuElement = screen.getByText(/my orders/i);
    expect(menuElement).toBeInTheDocument();
  })

  it('CustomerMenu Element Test 2', () => {
    render(<TestCustomerMenu />)
    const menuElement = screen.getByRole("list")
    expect(menuElement).toBeInTheDocument();
  })
})
