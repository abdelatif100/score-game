import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Smartphone, Gamepad2, Banknote, MapPin } from 'lucide-react';

export const metadata = {
  title: 'Video Game Store | Real-time Console Availability',
  description: 'Check console status and browse our game catalog before you visit. No reservations needed, just walk in and play!',
};

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white flex flex-col items-center justify-center p-6 sm:p-24 selection:bg-blue-500/30">
      {/* Hero Section */}
      <section className="max-w-4xl w-full text-center space-y-8 py-20">
        <header className="space-y-4">
          <h1 className="text-5xl sm:text-7xl font-bold tracking-tight text-white leading-tight">
            Video Game <span className="text-blue-500">Store</span>
          </h1>
          <p className="text-xl sm:text-2xl text-zinc-400 max-w-2xl mx-auto leading-relaxed">
            Your local destination for console gaming. Check availability and browse our catalog before you visit.
          </p>
        </header>

        {/* Primary Navigation Buttons */}
        <nav className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 pt-8">
          <Button asChild size="lg" className="w-full sm:w-auto px-8 h-14 text-lg font-semibold bg-white text-black hover:bg-zinc-200 transition-all rounded-lg" aria-label="View Consoles and availability">
            <Link href="/consoles">View Consoles</Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="w-full sm:w-auto px-8 h-14 text-lg font-semibold border-2 border-zinc-800 text-white hover:bg-zinc-900 transition-all rounded-lg" aria-label="Browse Games catalog">
            <Link href="/games">Browse Games</Link>
          </Button>
        </nav>
      </section>

      {/* Value Proposition Section */}
      <section className="max-w-6xl w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 py-20 border-t border-zinc-900/50 mt-12">
        <div className="space-y-4 p-6 rounded-2xl bg-zinc-900/30 border border-zinc-800/50 hover:border-zinc-700/50 transition-colors">
          <Smartphone className="w-10 h-10 text-blue-500" />
          <h3 className="text-xl font-bold">Real-time Status</h3>
          <p className="text-zinc-400 leading-relaxed">See if a console is Available or Reserved right now before you leave home.</p>
        </div>
        
        <div className="space-y-4 p-6 rounded-2xl bg-zinc-900/30 border border-zinc-800/50 hover:border-zinc-700/50 transition-colors">
          <Gamepad2 className="w-10 h-10 text-blue-500" />
          <h3 className="text-xl font-bold">Full Game Library</h3>
          <p className="text-zinc-400 leading-relaxed">Browse every game installed on our PS5, Xbox, and Switch consoles.</p>
        </div>

        <div className="space-y-4 p-6 rounded-2xl bg-zinc-900/30 border border-zinc-800/50 hover:border-zinc-700/50 transition-colors">
          <Banknote className="w-10 h-10 text-blue-500" />
          <h3 className="text-xl font-bold">Transparent Pricing</h3>
          <p className="text-zinc-400 leading-relaxed">Know our rates (starting from 50 DZD) before you arrive. No surprises.</p>
        </div>

        <div className="space-y-4 p-6 rounded-2xl bg-zinc-900/30 border border-zinc-800/50 hover:border-zinc-700/50 transition-colors">
          <MapPin className="w-10 h-10 text-blue-500" />
          <h3 className="text-xl font-bold">No Reservations</h3>
          <p className="text-zinc-400 leading-relaxed">Just walk in and play. Our system makes it easy to find a free spot.</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full text-center py-12 border-t border-zinc-900/50 text-zinc-500 font-medium">
        <p className="flex items-center justify-center gap-2">
          Visit us today — <span className="text-zinc-400">walk-ins welcome!</span>
        </p>
      </footer>
    </main>
  );
}
