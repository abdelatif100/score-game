import React from 'react';
import { prisma } from '@/lib/prisma';
import { PricingSection } from '@/components/pricing-section';
import { ConsoleCard, ConsoleStatus, PreviewGame } from '@/components/console-card';

export const revalidate = 60; // Revalidate every minute

async function getConsoles() {
  const consoles = await prisma.console.findMany({
    include: {
      games: {
        take: 5,
        include: {
          game: {
            select: {
              id: true,
              name: true,
            },
          },
        },
      },
    },
    orderBy: {
      name: 'asc',
    },
  });

  return consoles.map((c) => ({
    id: c.id,
    name: c.name,
    status: c.status as ConsoleStatus,
    previewGames: c.games.map((cg) => ({
      id: cg.game.id,
      name: cg.game.name,
    })),
  }));
}

export default async function ConsolesPage() {
  const consoles = await getConsoles();

  return (
    <div className="container mx-auto py-10 px-4 min-h-screen">
      <header className="mb-12 text-center">
        <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl mb-4 italic uppercase">
          Consoles & Availability
        </h1>
        <p className="text-zinc-500 max-w-2xl mx-auto">
          Real-time availability of our gaming stations. Browse installed games and see pricing before you visit.
        </p>
      </header>

      <PricingSection />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {consoles.map((consoleItem) => (
          <ConsoleCard
            key={consoleItem.id}
            id={consoleItem.id}
            name={consoleItem.name}
            status={consoleItem.status}
            previewGames={consoleItem.previewGames}
          />
        ))}
      </div>

      {consoles.length === 0 && (
        <div className="text-center py-20 bg-zinc-50 rounded-xl border-2 border-dashed border-zinc-200">
          <p className="text-zinc-400">No consoles found. Please check back later.</p>
        </div>
      )}
    </div>
  );
}
