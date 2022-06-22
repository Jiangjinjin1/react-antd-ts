import React from 'react'

import App from '@pages/demo/Button'
import { render, screen } from '@testing-library/react'

test('renders learn react link', () => {
    render(<App />)
    const linkElement = screen.getByText(/learn react/i)
    expect(linkElement).toBeInTheDocument()
})
