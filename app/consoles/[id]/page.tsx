import React from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { prisma } from '@/lib/prisma';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ChevronLeft, Monitor, Clock, Gamepad2, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

export const revalidate = 60;

const fullPricing = [
  { duration: '10 minutes', price: '50 DZD' },
  { duration: '30 minutes', price: '100 DZD' },
  { duration: '1 hour', price: '200 DZD' },
  { duration: '2 hours', price: '400 DZD' },
  { duration: '3 hours', price: '600 DZD' },
];

async function getConsole(id: string) {
  const consoleItem = await prisma.console.findUnique({
    where: { id },
    include: {
      games: {
        include: {
          game: true,
        },
      },
    },
  });

  if (!consoleItem) return null;

  return {
    ...consoleItem,
    allGames: consoleItem.games.map((cg) => cg.game),
  };
}

export default async function ConsoleDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const consoleItem = await getConsole(id);

  if (!consoleItem) {
    notFound();
  }

  const isAvailable = consoleItem.status === 'available';

  return (
    <div className="container mx-auto py-10 px-4 max-w-5xl min-h-screen">
      <Button asChild variant="ghost" className="mb-8 hover:bg-zinc-100 transition-colors">
        <Link href="/consoles" className="flex items-center gap-2 text-zinc-500">
          <ChevronLeft className="h-4 w-4" />
          Back to All Consoles
        </Link>
      </Button>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column: Info & Pricing */}
        <div className="lg:col-span-1 space-y-6">
          <Card className="border-zinc-200 shadow-sm overflow-hidden">
            <CardHeader className="bg-zinc-950 text-white p-6">
              <div className="flex justify-between items-start mb-4">
                <Monitor className="h-8 w-8 text-zinc-400" />
                <Badge 
                  className={cn(
                    "uppercase text-[10px] tracking-widest px-3 py-1",
                    isAvailable ? "bg-emerald-500 hover:bg-emerald-600 text-white border-none" : "bg-zinc-700 text-zinc-300 border-none"
                  )}
                >
                  {consoleItem.status}
                </Badge>
              </div>
              <CardTitle className="text-2xl font-bold tracking-tight">{consoleItem.name}</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <div className="p-6 border-b bg-zinc-50/50">
                <h3 className="text-xs font-bold text-zinc-400 uppercase tracking-widest mb-4 flex items-center gap-2">
                  <Clock className="h-3.5 w-3.5" />
                  Full Pricing Breakdown
                </h3>
                <div className="space-y-3">
                  {fullPricing.map((tier) => (
                    <div key={tier.duration} className="flex justify-between items-center py-2 border-b border-zinc-100 last:border-0">
                      <span className="text-sm font-medium text-zinc-600">{tier.duration}</span>
                      <span className="text-sm font-bold text-zinc-900">{tier.price}</span>
                    </div>
                  ))}
                </div>
                <p className="mt-4 text-[10px] text-zinc-400 italic leading-relaxed">
                  * Pricing is calculated automatically based on standard rates. No discounts currently applied.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Right Column: Game List */}
        <div className="lg:col-span-2">
          <Card className="border-zinc-200 shadow-sm min-h-full">
            <CardHeader className="border-b bg-zinc-50/30">
              <CardTitle className="text-xl font-bold flex items-center gap-2">
                <Gamepad2 className="h-5 w-5 text-zinc-500" />
                Complete List of Installed Games
              </CardTitle>
              <p className="text-sm text-zinc-400">
                All {consoleItem.allGames.length} games available on this {consoleItem.name}.
              </p>
            </CardHeader>
            <CardContent className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3">
                {consoleItem.allGames.map((game) => (
                  <div key={game.id} className="flex items-center gap-3 p-2 rounded-lg hover:bg-zinc-50 transition-colors group">
                    <div className="h-2 w-2 rounded-full bg-zinc-200 group-hover:bg-zinc-400 transition-colors" />
                    <span className="text-sm font-medium text-zinc-700 dark:text-zinc-300">{game.name}</span>
                    <ArrowRight className="h-3 w-3 ml-auto opacity-0 group-hover:opacity-100 transition-all text-zinc-300" />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
