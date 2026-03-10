import { getGameById } from "@/lib/db/queries";
import { Button } from "@/components/ui/button";
import { ChevronLeft, Info, Gamepad2 } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

export const dynamic = "force-dynamic";

interface GameDetailsPageProps {
  params: Promise<{ id: string }>;
}

export default async function GameDetailsPage({ params }: GameDetailsPageProps) {
  const { id } = await params;
  const game = await getGameById(id);

  if (!game) {
    notFound();
  }

  return (
    <main className="container mx-auto px-4 py-12 max-w-5xl animate-in fade-in duration-700">
      {/* Back Button */}
      <Button asChild variant="ghost" className="mb-8 -ml-4 h-9 text-muted-foreground hover:text-foreground">
        <Link href="/games" className="flex items-center gap-2">
          <ChevronLeft className="h-4 w-4" />
          Back to Catalog
        </Link>
      </Button>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Left: Game Art */}
        <div className="md:col-span-1">
          <div className="relative aspect-[2/3] w-full overflow-hidden rounded-2xl border-4 border-white shadow-2xl bg-muted">
            {game.imageUrl ? (
              <Image
                src={game.imageUrl}
                alt={game.name}
                fill
                priority
                className="object-cover transition-all duration-1000"
              />
            ) : (
              <div className="flex h-full w-full items-center justify-center text-muted-foreground italic">
                No Artwork Available
              </div>
            )}
          </div>
        </div>

        {/* Right: Info */}
        <div className="md:col-span-2 space-y-8 py-4">
          <div className="space-y-4">
            <h1 className="text-5xl md:text-6xl font-black uppercase tracking-tighter leading-none">
              {game.name}
            </h1>
            <div className="flex items-center gap-2 text-primary font-bold tracking-widest uppercase text-xs">
              <Gamepad2 className="h-4 w-4" />
              Full Game Information
            </div>
          </div>

          <div className="prose prose-invert max-w-none">
            <h2 className="text-xl font-bold flex items-center gap-2 mb-4">
              <Info className="h-5 w-5 text-muted-foreground" />
              Overview
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed italic border-l-4 border-primary/30 pl-6 py-2">
              {game.description || "No description available for this title yet. Our staff is currently updating the catalog with more details."}
            </p>
          </div>

          <Card className="bg-muted/30 border-2 border-dashed">
            <CardContent className="p-6 flex items-start gap-4">
              <div className="bg-primary/10 p-2 rounded-lg">
                <Gamepad2 className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h4 className="font-bold mb-1">Available to Play</h4>
                <p className="text-sm text-muted-foreground">
                  This game is part of our standard library. Visit the <Link href="/consoles" className="text-primary hover:underline font-semibold">Console Dashboard</Link> to see which units currently have this title installed.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  );
}
