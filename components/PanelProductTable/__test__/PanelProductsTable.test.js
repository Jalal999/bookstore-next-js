import { fireEvent, render, screen } from "@testing-library/react";
import '@testing-library/jest-dom'
import { Provider } from "react-redux";
import store from "../../../redux/store";
import PanelProductTable from "..";
import { createMemoryHistory } from 'history';


const TestProductTable = () => {
    return (
        <Provider store={store}>
            <PanelProductTable data={[{_id:'Obj2432', title:'React js', description: 'js book', price:10, amount: 10}]} />
        </Provider>
    )
}

describe('PanelProducts Table', () => {
    it('renders a products table component', () => {
        render(<TestProductTable />)
    })

    it('renders a products table component to check table title is there', () => {
        render(<TestProductTable />)
        const tableHeading = screen.getByText(/title/i);
        expect(tableHeading).toBeInTheDocument();
    })

    it('checks delete button to see if dialog pop us', () => {
        render(<TestProductTable />)
        const deleteButton = screen.getByText(/delete/i);
        fireEvent.click(deleteButton);
        expect(screen.getByText(/do you want to delete product/i));
    })

    it('checks add product button to see if it opens add product form dialog', () => {
        render(<TestProductTable />)
        const addProductBtn = screen.getByText(/add product/i);
        fireEvent.click(addProductBtn)
        expect(screen.getByLabelText(/product name/i));
    })

})

