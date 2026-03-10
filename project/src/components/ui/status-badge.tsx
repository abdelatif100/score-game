import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface StatusBadgeProps {
  status: "available" | "reserved";
  className?: string;
}

export function StatusBadge({ status, className }: StatusBadgeProps) {
  const isAvailable = status === "available";

  return (
    <Badge
      variant="outline"
      className={cn(
        "px-2.5 py-0.5 text-xs font-semibold capitalize",
        isAvailable
          ? "border-emerald-500/20 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400"
          : "border-amber-500/20 bg-amber-500/10 text-amber-600 dark:text-amber-400",
        className
      )}
    >
      <span
        className={cn(
          "mr-1.5 h-1.5 w-1.5 rounded-full",
          isAvailable ? "bg-emerald-500" : "bg-amber-500"
        )}
      />
      {status}
    </Badge>
  );
}
