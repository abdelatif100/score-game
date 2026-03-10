import { render, screen } from '@testing-library/react'
import Home from './page'

describe('Home Page', () => {
  it('renders the hero section with main heading', () => {
    render(<Home />)
    expect(screen.getByText(/Level Up Your/i)).toBeInTheDocument()
    expect(screen.getByText(/Gaming Experience/i)).toBeInTheDocument()
  })

  it('renders CTA buttons', () => {
    render(<Home />)
    expect(screen.getByRole('button', { name: /Explore Catalog/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /View Dashboard/i })).toBeInTheDocument()
  })

  it('renders the features section', () => {
    render(<Home />)
    expect(screen.getByText(/Everything You Need to/i)).toBeInTheDocument()
    expect(screen.getByText(/Player Dashboard/i)).toBeInTheDocument()
    expect(screen.getByText(/Curated Catalog/i)).toBeInTheDocument()
  })
})
