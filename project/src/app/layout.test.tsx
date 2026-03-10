import { render, screen } from '@testing-library/react'
import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'

// Mock the next/link and lucide-react to avoid issues in test environment
jest.mock('next/link', () => {
  return ({ children, href }: { children: React.ReactNode; href: string }) => {
    return <a href={href}>{children}</a>
  }
})

describe('Layout Components', () => {
  describe('Header', () => {
    it('renders the brand name', () => {
      render(<Header />)
      expect(screen.getByText(/Score Game/i)).toBeInTheDocument()
    })

    it('renders navigation links', () => {
      render(<Header />)
      expect(screen.getByText(/Catalog/i)).toBeInTheDocument()
      expect(screen.getByText(/Dashboard/i)).toBeInTheDocument()
    })
  })

  describe('Footer', () => {
    it('renders contact information', () => {
      render(<Footer />)
      expect(screen.getByText(/support@scoregame.com/i)).toBeInTheDocument()
    })

    it('renders operational hours', () => {
      render(<Footer />)
      expect(screen.getByText(/Mon-Fri: 10:00 AM - 8:00 PM/i)).toBeInTheDocument()
    })
  })
})
