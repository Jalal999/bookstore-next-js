import { render, screen } from "@testing-library/react";
import DefaultMenu from "../DefaultMenu";
import '@testing-library/jest-dom'

describe('DefaultMenu', () => {
  it('renders a default menu', () => {
    render(<DefaultMenu />)
  })

  it('Default Menu Element', () => {
    render(<DefaultMenu />)
    const menuElement = screen.getByText(/home/i);
    expect(menuElement).toBeInTheDocument();
  })

  it('Default Menu Element Test 2', () => {
    render(<DefaultMenu />)
    const menuElement = screen.getByRole("list")
    expect(menuElement).toBeInTheDocument();
  })
})
