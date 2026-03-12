import React from 'react';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Monitor, Gamepad2, Info } from 'lucide-react';
import { cn } from '@/lib/utils';

export type ConsoleStatus = 'available' | 'reserved';

export interface PreviewGame {
  id: string;
  name: string;
}

export interface ConsoleCardProps {
  id: string;
  name: string;
  status: ConsoleStatus;
  previewGames: PreviewGame[];
}

export function ConsoleCard({ id, name, status, previewGames }: ConsoleCardProps) {
  const isAvailable = status === 'available';

  return (
    <Card className="overflow-hidden border-zinc-200 dark:border-zinc-800 transition-all hover:shadow-md">
      <CardHeader className="bg-zinc-50 dark:bg-zinc-900/50 pb-4 border-b">
        <div className="flex justify-between items-start">
          <CardTitle className="text-xl font-bold flex items-center gap-2">
            <Monitor className="h-5 w-5 text-zinc-500" />
            {name}
          </CardTitle>
          <Badge 
            variant={isAvailable ? "outline" : "destructive"}
            className={cn(
              "uppercase text-[10px] tracking-widest",
              isAvailable && "bg-emerald-50 text-emerald-700 border-emerald-200 dark:bg-emerald-950 dark:text-emerald-400 dark:border-emerald-800"
            )}
          >
            {status}
          </Badge>
        </div>
        <p className="text-sm text-zinc-500 font-medium">Starting from 50 DZD</p>
      </CardHeader>
      
      <CardContent className="pt-4">
        <h4 className="text-xs font-semibold text-zinc-400 uppercase tracking-tight mb-3 flex items-center gap-1.5">
          <Gamepad2 className="h-3 w-3" />
          Installed Games Preview
        </h4>
        <ul className="space-y-2">
          {previewGames.length > 0 ? (
            previewGames.map((game) => (
              <li key={game.id} className="text-sm flex items-center gap-2 text-zinc-700 dark:text-zinc-300">
                <div className="h-1 w-1 bg-zinc-300 rounded-full" />
                {game.name}
              </li>
            ))
          ) : (
            <li className="text-sm text-zinc-400 italic">No games listed</li>
          )}
        </ul>
        {previewGames.length >= 5 && (
          <p className="mt-3 text-[10px] text-zinc-400 italic"> + see more in details</p>
        )}
      </CardContent>

      <CardFooter className="pt-2">
        <Button asChild variant="secondary" className="w-full gap-2 text-xs h-9">
          <Link href={`/consoles/${id}`}>
            <Info className="h-3.5 w-3.5" />
            See Full Console Details
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
