import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface GameCardProps {
  id: string;
  name: string;
  imageUrl?: string | null;
  className?: string;
  priority?: boolean;
}

export function GameCard({ id, name, imageUrl, className, priority }: GameCardProps) {
  return (
    <Link 
      href={`/games/${id}`}
      className={cn(
        "group flex flex-col gap-3 transition-all duration-300",
        className
      )}
    >
      <div className="relative aspect-[2/3] w-full overflow-hidden rounded-xl border bg-muted shadow-sm transition-all duration-500 group-hover:shadow-md group-hover:border-primary/50">
        {imageUrl ? (
          <Image
            src={imageUrl}
            alt={name}
            fill
            priority={priority}
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 20vw"
            className="object-cover grayscale transition-all duration-700 ease-in-out group-hover:grayscale-0 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-muted text-muted-foreground">
            <span className="text-xs font-medium uppercase tracking-widest italic">No Art</span>
          </div>
        )}
        
        {/* Subtle overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      </div>
      
      <div className="space-y-1 px-1">
        <h3 className="font-bold text-sm leading-tight group-hover:text-primary transition-colors line-clamp-2">
          {name}
        </h3>
        <p className="text-[10px] uppercase tracking-widest text-muted-foreground font-semibold">
          View Details
        </p>
      </div>
    </Link>
  );
}
