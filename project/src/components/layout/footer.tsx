import Link from "next/link"
import { Gamepad2, Mail, Phone, Clock, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="w-full border-t bg-background py-12 md:py-16">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
        {/* Brand Section */}
        <div className="flex flex-col space-y-4">
          <Link href="/" className="flex items-center space-x-2">
            <Gamepad2 className="h-6 w-6 text-primary" />
            <span className="inline-block font-bold text-xl">Score Game</span>
          </Link>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Elevate your gaming experience with our curated selection of gear and community-driven rewards.
          </p>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col space-y-4">
          <h3 className="text-sm font-semibold uppercase tracking-wider">Contact Us</h3>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4" />
              <span>support@scoregame.com</span>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              <span>+1 (555) 123-4567</span>
            </li>
            <li className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              <span>123 Gaming Ave, NY 10001</span>
            </li>
          </ul>
        </div>

        {/* Operational Hours */}
        <div className="flex flex-col space-y-4">
          <h3 className="text-sm font-semibold uppercase tracking-wider">Store Hours</h3>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              <span>Mon-Fri: 10:00 AM - 8:00 PM</span>
            </li>
            <li className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              <span>Sat-Sun: 12:00 PM - 6:00 PM</span>
            </li>
          </ul>
        </div>

        {/* Links */}
        <div className="flex flex-col space-y-4">
          <h3 className="text-sm font-semibold uppercase tracking-wider">Quick Links</h3>
          <nav className="flex flex-col space-y-2 text-sm text-muted-foreground">
            <Link href="/consoles" className="hover:text-primary transition-colors">Consoles Dashboard</Link>
            <Link href="/games" className="hover:text-primary transition-colors">Games Catalog</Link>
            <Link href="/terms" className="hover:text-primary transition-colors">Terms of Service</Link>
            <Link href="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link>
          </nav>
        </div>
      </div>
      <div className="container mx-auto px-4 mt-12 pt-8 border-t flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} Score Game. All rights reserved.
        </p>
        <div className="flex items-center space-x-4 grayscale opacity-50">
          {/* Add social/payment icon placeholders if needed */}
        </div>
      </div>
    </footer>
  )
}
