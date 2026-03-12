import React from 'react';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { prisma } from '@/lib/prisma';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Gamepad2, Info } from 'lucide-react';

interface GameDetailsPageProps {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: GameDetailsPageProps): Promise<Metadata> {
  const { id } = await params;
  const game = await prisma.game.findUnique({
    where: { id },
    select: { name: true }
  });

  if (!game) {
    return {
      title: 'Game Not Found',
    };
  }

  return {
    title: `${game.name} | متجر ألعاب الفيديو`,
    description: `تعرف على المزيد حول ${game.name} المتوفرة في متجرنا.`,
  };
}

export default async function GameDetailsPage({ params }: GameDetailsPageProps) {
  const { id } = await params;
  
  // Basic UUID validation to avoid Prisma errors
  const isUuid = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(id);
  if (!isUuid) notFound();

  const game = await prisma.game.findUnique({
    where: { id },
    include: {
      consoles: {
        include: {
          console: true
        }
      }
    }
  });

  if (!game) notFound();

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white">
      {/* Navigation Bar */}
      <nav className="border-b border-zinc-900 bg-zinc-900/10 py-4 sticky top-0 z-10 backdrop-blur-md">
        <div className="container mx-auto px-6">
          <Button asChild variant="ghost" className="text-zinc-400 hover:text-white transition-colors gap-2 -ml-2">
            <Link href="/games">
              <ArrowLeft className="h-4 w-4" />
              العودة إلى الكتالوج
            </Link>
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-8 md:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Game Cover Image */}
          <div className="lg:col-span-4 xl:col-span-3">
            <div className="rounded-2xl overflow-hidden border border-zinc-800 shadow-2xl bg-zinc-900">
              <AspectRatio ratio={2 / 3}>
                {game.imageUrl ? (
                  <Image
                    src={game.imageUrl}
                    alt={game.name}
                    fill
                    className="object-cover"
                    priority
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 25vw"
                  />
                ) : (
                  <div className="flex flex-col items-center justify-center h-full w-full text-zinc-500">
                    <Gamepad2 className="h-20 w-20 mb-4 opacity-10" />
                    <span className="text-sm font-medium uppercase tracking-widest opacity-30">No Image</span>
                  </div>
                )}
              </AspectRatio>
            </div>
          </div>

          {/* Game Info */}
          <div className="lg:col-span-8 xl:col-span-9 space-y-8">
            <header className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight">
                {game.name}
              </h1>
              <div className="flex flex-wrap gap-3">
                <span className="bg-blue-500/10 text-blue-400 border border-blue-500/20 px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1.5">
                  <Gamepad2 className="h-4 w-4" />
                  لعبة فيديو
                </span>
                <span className="bg-zinc-900 text-zinc-400 border border-zinc-800 px-3 py-1 rounded-full text-sm font-medium">
                  ID: {game.id.substring(0, 8)}
                </span>
              </div>
            </header>

            <div className="space-y-6">
              <div className="flex items-center gap-2 text-zinc-400">
                <Info className="h-5 w-5" />
                <h2 className="text-xl font-semibold text-white">عن اللعبة</h2>
              </div>
              <div className="prose prose-invert max-w-none text-zinc-400 text-lg leading-relaxed">
                {game.description.split('\n').map((paragraph, i) => (
                  <p key={i} className="mb-4">{paragraph}</p>
                ))}
              </div>
            </div>

            {/* Note about consoles (per PRD: Do not list specific consoles) */}
            <div className="p-6 rounded-2xl bg-zinc-900/40 border border-zinc-800/60 mt-8">
              <p className="text-zinc-400 text-sm italic">
                * لمعرفة ما إذا كانت هذه اللعبة مثبتة حالياً على جهاز معين، يرجى التحقق من صفحة تفاصيل الأجهزة الفردية أو زيارتنا في المتجر.
              </p>
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}
