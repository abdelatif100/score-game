import { Button } from "@/components/ui/button"
import { Gamepad2, ArrowRight } from "lucide-react"
import Link from "next/link"

export function Hero() {
  return (
    <section className="relative overflow-hidden py-24 md:py-32 bg-slate-950 text-white">
      {/* Background patterns */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 -left-1/4 w-1/2 h-1/2 bg-blue-600 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 -right-1/4 w-1/2 h-1/2 bg-purple-600 rounded-full blur-[120px]" />
      </div>

      <div className="container relative mx-auto px-4 flex flex-col items-center text-center">
        <div className="mb-8 p-3 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm animate-in fade-in slide-in-from-bottom-4 duration-700">
          <Gamepad2 className="h-12 w-12 text-blue-400" />
        </div>
        
        <h1 className="max-w-4xl text-5xl md:text-7xl font-extrabold tracking-tight mb-6 animate-in fade-in slide-in-from-bottom-6 duration-700 delay-150">
          Level Up Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Gaming Experience</span>
        </h1>
        
        <p className="max-w-2xl text-lg md:text-xl text-slate-300 mb-10 leading-relaxed animate-in fade-in slide-in-from-bottom-8 duration-700 delay-300">
          Score Game is your ultimate destination for curated gaming gear, 
          exclusive community rewards, and a dashboard that keeps you ahead of the game.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 animate-in fade-in slide-in-from-bottom-10 duration-700 delay-500">
          <Button asChild size="lg" className="h-14 px-8 text-lg font-bold bg-blue-600 hover:bg-blue-700">
            <Link href="/games">
              Browse Games
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="h-14 px-8 text-lg font-bold border-white/20 hover:bg-white/10">
            <Link href="/consoles">View Consoles</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
