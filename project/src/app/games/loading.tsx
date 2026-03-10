import { Skeleton } from "@/components/ui/skeleton";

export default function LoadingGames() {
  return (
    <main className="container mx-auto px-4 py-12 animate-in fade-in duration-500">
      <div className="mb-12 space-y-4">
        <h1 className="text-4xl font-black tracking-tight uppercase">
          Full <span className="text-primary">Catalog</span>
        </h1>
        <p className="text-muted-foreground max-w-2xl">
          Browse our complete collection of titles. From the latest blockbusters to all-time classics.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {Array.from({ length: 10 }).map((_, i) => (
          <div key={i} className="flex flex-col gap-3">
            <Skeleton className="aspect-[2/3] w-full rounded-xl" />
            <div className="space-y-2">
              <Skeleton className="h-4 w-3/4" />
              <Skeleton className="h-3 w-1/4" />
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
