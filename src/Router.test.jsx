import { render, screen } from "@testing-library/react";
import { describe, it, expect } from 'vitest';
import Router from "./Router";
import userEvent from '@testing-library/user-event'

describe("Router component", () => {
  it('landing page rendered', async () => {
    render(<Router />)
  
    // verify page content for default route
    expect(screen.getByText(/home page/i)).toBeInTheDocument()
  })

  it('navigation to other pages and back', async () => {
    render(<Router />)
    const user = userEvent.setup()

    // verify page content for expected route after navigating
    await user.click(screen.getByRole('link', { name: /shop/i }))
    expect(screen.getByText(/shopping page!/i)).toBeInTheDocument()

    await user.click(screen.getByRole('link', { name: /home/i }))
    expect(screen.getByText(/home page/i)).toBeInTheDocument()
  })
})