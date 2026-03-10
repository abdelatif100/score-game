import { getConsoleById } from "@/lib/db/queries";
import { StatusBadge } from "@/components/ui/status-badge";
import { Button } from "@/components/ui/button";
import { ChevronLeft, Gamepad2, Info, Clock, Coins } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const dynamic = "force-dynamic";

interface ConsoleDetailsPageProps {
  params: Promise<{ id: string }>;
}

export default async function ConsoleDetailsPage({ params }: ConsoleDetailsPageProps) {
  const { id } = await params;
  const console = await getConsoleById(id);

  if (!console) {
    notFound();
  }

  const isAvailable = console.status === "available";

  return (
    <main className="container mx-auto px-4 py-12 max-w-5xl">
      {/* Breadcrumb / Back */}
      <Button asChild variant="ghost" className="mb-8 -ml-4 h-9 text-muted-foreground hover:text-foreground">
        <Link href="/consoles" className="flex items-center gap-2">
          <ChevronLeft className="h-4 w-4" />
          Back to Dashboard
        </Link>
      </Button>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content: Info & Games */}
        <div className="lg:col-span-2 space-y-8">
          <div className="space-y-4">
            <div className="flex flex-wrap items-center gap-4">
              <h1 className="text-4xl font-black uppercase tracking-tight">{console.name}</h1>
              <StatusBadge status={console.status as "available" | "reserved"} className="h-7 text-sm" />
            </div>
            <p className="text-lg text-muted-foreground">
              Experience gaming on {console.name} at our store. Check our pricing and installed games below.
            </p>
          </div>

          <Card className="border-2">
            <CardHeader className="bg-muted/50 border-b">
              <CardTitle className="flex items-center gap-2 text-xl font-bold">
                <Gamepad2 className="h-5 w-5 text-primary" />
                Installed Games
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <div className="divide-y">
                {console.consoleGames.length > 0 ? (
                  console.consoleGames.map((cg) => (
                    <div key={cg.game.id} className="flex flex-col sm:flex-row sm:items-center gap-4 p-6 hover:bg-muted/30 transition-colors">
                      {cg.game.imageUrl && (
                        <div className="h-20 w-32 rounded-lg bg-muted flex-shrink-0 overflow-hidden border">
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img 
                            src={cg.game.imageUrl} 
                            alt={cg.game.name} 
                            className="h-full w-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                          />
                        </div>
                      )}
                      <div className="space-y-1">
                        <h3 className="font-bold text-lg">{cg.game.name}</h3>
                        {cg.game.description && (
                          <p className="text-sm text-muted-foreground line-clamp-2">{cg.game.description}</p>
                        )}
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="p-12 text-center">
                    <p className="text-muted-foreground italic">No games currently listed for this console.</p>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar: Pricing & Store Info */}
        <div className="space-y-6">
          <Card className="border-primary/20 shadow-md overflow-hidden">
            <CardHeader className="bg-primary text-primary-foreground">
              <CardTitle className="flex items-center gap-2 text-lg font-bold">
                <Coins className="h-5 w-5" />
                Session Pricing
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <div className="divide-y bg-primary/5">
                {[
                  { duration: "10 mins", price: "50 DZD" },
                  { duration: "30 mins", price: "100 DZD" },
                  { duration: "1 hour", price: "200 DZD" },
                ].map((tier) => (
                  <div key={tier.duration} className="flex justify-between items-center p-4">
                    <div className="flex items-center gap-2 font-medium text-sm">
                      <Clock className="h-3.5 w-3.5 text-muted-foreground" />
                      {tier.duration}
                    </div>
                    <div className="font-bold text-primary">{tier.price}</div>
                  </div>
                ))}
              </div>
              <div className="p-4 bg-muted/20 border-t flex gap-2">
                <Info className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                <p className="text-[10px] text-muted-foreground">
                  If your session exceeds 10 minutes, standard rates apply automatically.
                </p>
              </div>
            </CardContent>
          </Card>

          <div className="p-6 rounded-xl border-2 border-dashed bg-muted/20 space-y-4">
            <h4 className="font-bold text-sm uppercase tracking-widest flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
              Visit Store
            </h4>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Consoles are available on a first-come, first-served basis. While we show the status online, it can change quickly based on walk-in customers.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
