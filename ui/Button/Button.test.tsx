import { render, screen } from '@testing-library/react'
import Button from './Button'

describe('Button component', () => {
  it('renders learn react link', () => {
    render(<Button />)
    const linkElement = screen.getByTestId('@ui/button')
    expect(linkElement).toBeInTheDocument()
  })
})
