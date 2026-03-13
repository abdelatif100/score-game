import React from 'react';
import { prisma } from '@/lib/prisma';
import { Badge } from '@/components/ui/badge';
import { PricingSection } from '@/components/pricing-section';
import { ConsoleCard, ConsoleStatus } from '@/components/console-card';

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
  const availableCount = consoles.filter((c) => c.status === 'available').length;

  return (
    <div className="container mx-auto py-10 px-4 min-h-screen">
      <header className="mb-12 text-center">
        <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl mb-4 italic uppercase">
          الأجهزة والتوفر
        </h1>
        <div className="flex justify-center mb-6">
          <Badge variant="outline" className="bg-emerald-50 text-emerald-700 border-emerald-200 px-4 py-1.5 text-sm font-bold uppercase tracking-widest shadow-sm">
            {availableCount} أجهزة متاحة الآن
          </Badge>
        </div>
        <p className="text-zinc-500 max-w-2xl mx-auto">
          توفر أجهزة الألعاب في الوقت الفعلي. تصفح الألعاب المثبتة واطلع على الأسعار قبل زيارتك.
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
          <p className="text-zinc-400">لم يتم العثور على أجهزة. يرجى التحقق لاحقاً.</p>
        </div>
      )}
    </div>
  );
}
