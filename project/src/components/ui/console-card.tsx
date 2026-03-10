import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { StatusBadge } from "./status-badge";
import { Button } from "./button";
import { Gamepad2, Info, ChevronRight } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface GamePreview {
  id: string;
  name: string;
}

interface ConsoleCardProps {
  id: string;
  name: string;
  status: "available" | "reserved";
  games: GamePreview[];
  className?: string;
}

export function ConsoleCard({ id, name, status, games, className }: ConsoleCardProps) {
  const isAvailable = status === "available";
  
  return (
    <Card className={cn(
      "group flex flex-col transition-all duration-300 hover:shadow-lg hover:border-primary/40",
      !isAvailable && "opacity-90",
      className
    )}>
      <CardHeader className="flex-row items-center justify-between space-y-0 p-6 pb-2">
        <div className="space-y-1">
          <h3 className="font-bold tracking-tight text-lg group-hover:text-primary transition-colors">
            {name}
          </h3>
          <p className="text-xs text-muted-foreground flex items-center gap-1 font-medium">
            Starting from <span className="text-foreground font-bold italic">50 DZD</span>
          </p>
        </div>
        <StatusBadge status={status} />
      </CardHeader>

      <CardContent className="flex-1 p-6 pt-4">
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
            <Gamepad2 className="h-4 w-4" />
            <span>Installed Games</span>
          </div>
          
          <div className="flex flex-wrap gap-1.5">
            {games.length > 0 ? (
              games.slice(0, 5).map((game) => (
                <span 
                  key={game.id} 
                  className="inline-flex items-center rounded-md bg-secondary px-2 py-0.5 text-[10px] font-semibold text-secondary-foreground"
                >
                  {game.name}
                </span>
              ))
            ) : (
              <p className="text-xs italic text-muted-foreground">No games listed</p>
            )}
            {games.length > 5 && (
              <span className="inline-flex items-center rounded-md border bg-muted/50 px-2 py-0.5 text-[10px] font-semibold text-muted-foreground">
                +{games.length - 5} more
              </span>
            )}
          </div>
        </div>
      </CardContent>

      <CardFooter className="p-6 pt-0">
        <Button asChild variant="outline" className="w-full group/btn border-primary/20 hover:border-primary">
          <Link href={`/consoles/${id}`} className="flex items-center justify-center gap-2">
            See More
            <ChevronRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-0.5" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
