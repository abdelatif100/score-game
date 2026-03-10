import { getConsoles } from "@/lib/db/queries";
import { PricingHeader } from "@/components/sections/pricing-header";
import { ConsoleCard } from "@/components/ui/console-card";
import { Suspense } from "react";
import LoadingConsoles from "./loading";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Console Availability | Score Game",
  description: "View real-time console status and availability at our physical store.",
};

async function ConsoleList() {
  const consolesList = await getConsoles();

  if (!consolesList || consolesList.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center p-12 text-center rounded-xl border-2 border-dashed bg-muted/20">
        <h3 className="text-xl font-bold">No consoles found</h3>
        <p className="text-muted-foreground">The console dashboard is currently being updated. Please check back later.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {consolesList.map((console) => (
        <ConsoleCard
          key={console.id}
          id={console.id}
          name={console.name}
          status={console.status as "available" | "reserved"}
          games={console.consoleGames.map((cg) => ({
            id: cg.game.id,
            name: cg.game.name,
          }))}
        />
      ))}
    </div>
  );
}

export default function ConsolesPage() {
  return (
    <main className="container mx-auto px-4 py-12">
      <div className="mb-8 space-y-4">
        <h1 className="text-4xl font-black tracking-tight uppercase">
          Console <span className="text-primary">Availability</span>
        </h1>
        <p className="text-muted-foreground max-w-2xl">
          Real-time status of our gaming stations. Pricing is transparent and simple.
        </p>
      </div>

      <PricingHeader />

      <Suspense fallback={<div className="text-muted-foreground">Refreshing console list...</div>}>
        <ConsoleList />
      </Suspense>
    </main>
  );
}
