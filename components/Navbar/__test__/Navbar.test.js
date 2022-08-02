import { fireEvent, render, screen } from "@testing-library/react";
import '@testing-library/jest-dom'
import { Provider } from "react-redux";
import store from "../../../redux/store";
import Navbar from "..";
import { BrowserRouter, Router } from "react-router-dom";


jest.mock('next/router', () => ({
    useRouter() {
      return ({
        route: '/',
        pathname: '/',
        query: '',
        asPath: '',
        push: jest.fn(),
        events: {
          on: jest.fn(),
          off: jest.fn()
        },
        beforePopState: jest.fn(() => null),
        prefetch: jest.fn(() => null)
      });
    },
  }));


const TestNavbarMenu = () => {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Navbar />
            </BrowserRouter>
        </Provider>
    )
}

describe('Navbar', () => {
    it('renders a navbar', () => {
        render(<TestNavbarMenu />)
    })

    it('Navbars Logo Element', () => {
        render(<TestNavbarMenu />)
        const logo = screen.getByRole(/Link/i);
        expect(logo).toHaveTextContent(/bookstore/i);
    })

    it('Navbars Link element', () => {
        render(<TestNavbarMenu />)
        const LinkElement = screen.getByRole(/Link/i)
        expect(LinkElement).toBeInTheDocument();
    })

    it('Navbars DefaultMenu login element', () => {
        render(<TestNavbarMenu />)
        fireEvent.click(screen.getByTestId('click'))
        expect(screen.getByText('login'))
    })
})

