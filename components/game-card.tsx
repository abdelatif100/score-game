import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { cn } from '@/lib/utils';
import { Gamepad2 } from 'lucide-react';

export interface GameCardProps {
  id: string;
  name: string;
  imageUrl?: string | null;
  className?: string;
}

export function GameCard({ id, name, imageUrl, className }: GameCardProps) {
  return (
    <Card className={cn("overflow-hidden border-zinc-200 dark:border-zinc-800 transition-all hover:shadow-lg group", className)}>
      <Link href={`/games/${id}`} className="block">
        <AspectRatio ratio={2 / 3} className="bg-zinc-100 dark:bg-zinc-900 overflow-hidden">
          {imageUrl ? (
            <Image
              src={imageUrl}
              alt={name}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
            />
          ) : (
            <div className="flex flex-col items-center justify-center h-full w-full text-zinc-400">
              <Gamepad2 className="h-10 w-10 mb-2 opacity-20" />
              <span className="text-xs font-medium uppercase tracking-widest opacity-40">No Image</span>
            </div>
          )}
        </AspectRatio>
      </Link>
      <CardContent className="p-4 bg-white dark:bg-[#0c0c0c]">
        <h3 className="font-bold text-sm sm:text-base line-clamp-1 group-hover:text-blue-500 transition-colors">
          {name}
        </h3>
      </CardContent>
      <CardFooter className="px-4 pb-4 pt-0 bg-white dark:bg-[#0c0c0c]">
        <Link 
          href={`/games/${id}`}
          className="text-[10px] sm:text-xs font-medium text-zinc-500 hover:text-blue-500 flex items-center gap-1 uppercase tracking-wider transition-colors"
        >
          عرض التفاصيل
          <span className="text-lg leading-none">←</span>
        </Link>
      </CardFooter>
    </Card>
  );
}
