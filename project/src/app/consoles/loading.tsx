import { Skeleton } from "@/components/ui/skeleton";
import { PricingHeader } from "@/components/sections/pricing-header";

export default function LoadingConsoles() {
  return (
    <main className="container mx-auto px-4 py-12 animate-in fade-in duration-500">
      <div className="mb-8 space-y-4">
        <h1 className="text-4xl font-black tracking-tight uppercase">
          Console <span className="text-primary">Availability</span>
        </h1>
        <p className="text-muted-foreground max-w-2xl">
          Real-time status of our gaming stations. Pricing is transparent and simple.
        </p>
      </div>

      <PricingHeader />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Array.from({ length: 3 }).map((_, i) => (
          <div key={i} className="flex flex-col gap-4 rounded-xl border p-6">
            <div className="flex justify-between items-center mb-4">
              <Skeleton className="h-6 w-32" />
              <Skeleton className="h-6 w-20 rounded-full" />
            </div>
            <Skeleton className="h-4 w-40" />
            <div className="mt-4 flex flex-wrap gap-2">
              <Skeleton className="h-5 w-16" />
              <Skeleton className="h-5 w-24" />
              <Skeleton className="h-5 w-20" />
            </div>
            <Skeleton className="h-10 w-full mt-6" />
          </div>
        ))}
      </div>
    </main>
  );
}
