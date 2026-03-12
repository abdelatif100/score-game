import React from 'react';
import { Metadata } from 'next';
import { prisma } from '@/lib/prisma';
import { GameGrid } from '@/components/game-grid';
import { Search, Gamepad2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'كتالوج الألعاب | متجر ألعاب الفيديو',
  description: 'تصفح مجموعتنا الكاملة من الألعاب المتاحة في المتجر. اكتشف العناوين المثبتة على أجهزة PS5 و Xbox و Nintendo Switch لدينا.',
};

export default async function GamesPage() {
  const games = await prisma.game.findMany({
    orderBy: {
      name: 'asc',
    },
    select: {
      id: true,
      name: true,
      imageUrl: true,
    }
  });

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white">
      {/* Page Header */}
      <header className="border-b border-zinc-900 bg-zinc-900/20 py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-2">
              <h1 className="text-4xl font-bold tracking-tight">كتالوج الألعاب</h1>
              <p className="text-zinc-400 max-w-2xl">
                استكشف مكتبتنا الكاملة. نحن نوفر أحدث العناوين وأفضل الألعاب الكلاسيكية لجميع المنصات.
              </p>
            </div>
            
            <div className="flex items-center gap-3 bg-zinc-900/50 border border-zinc-800 rounded-xl px-4 py-3 text-zinc-500 w-full md:w-80">
              <Search className="h-5 w-5" />
              <span className="text-sm">البحث (قريباً في النسخة القادمة)</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <section className="container mx-auto px-6 py-12">
        <div className="flex items-center gap-2 mb-8 text-zinc-400">
          <Gamepad2 className="h-5 w-5" />
          <h2 className="text-xl font-semibold text-white">كل الألعاب المتاحة</h2>
          <span className="text-sm bg-zinc-900 px-2 py-0.5 rounded border border-zinc-800 ml-auto">
            {games.length} لعبة
          </span>
        </div>

        <GameGrid games={games} />

        <div className="mt-20 p-8 rounded-3xl bg-zinc-900/30 border border-zinc-800/50 text-center space-y-4">
          <p className="text-zinc-400">
            هل تبحث عن لعبة معينة وغير موجودة في القائمة؟
          </p>
          <p className="text-lg font-medium">
            تواصل معنا في المتجر وسنحاول توفيرها لك في أقرب وقت!
          </p>
        </div>
      </section>
    </main>
  );
}
