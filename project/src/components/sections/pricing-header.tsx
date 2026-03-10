import { Card, CardContent } from "@/components/ui/card";
import { Clock, Coins, AlertCircle } from "lucide-react";

export function PricingHeader() {
  const tiers = [
    { duration: "10 minutes", price: "50 DZD", note: "Starting session" },
    { duration: "30 minutes", price: "100 DZD", note: "Standard play" },
    { duration: "1 hour", price: "200 DZD", note: "Deep gaming" },
  ];

  return (
    <Card className="mb-8 overflow-hidden border-2 bg-muted/30">
      <CardContent className="p-0">
        <div className="flex flex-col md:flex-row">
          {/* Header Info */}
          <div className="flex flex-1 flex-col justify-center border-b p-6 md:border-b-0 md:border-r">
            <h2 className="mb-2 flex items-center gap-2 text-xl font-bold tracking-tight">
              <Coins className="h-5 w-5 text-primary" />
              Pricing Structure
            </h2>
            <p className="text-sm text-muted-foreground">
              Simple and transparent pricing for your gaming sessions.
            </p>
          </div>

          {/* Pricing Grid */}
          <div className="grid flex-[2] grid-cols-1 divide-y md:grid-cols-3 md:divide-x md:divide-y-0">
            {tiers.map((tier) => (
              <div
                key={tier.duration}
                className="flex flex-col items-center justify-center p-6 text-center"
              >
                <div className="mb-1 flex items-center gap-1.5 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  <Clock className="h-3 w-3" />
                  {tier.duration}
                </div>
                <div className="text-2xl font-bold text-foreground">
                  {tier.price}
                </div>
                <div className="mt-1 text-xs text-muted-foreground">
                  {tier.note}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer Note */}
        <div className="flex items-center gap-2 bg-muted/50 px-6 py-3 text-[10px] sm:text-xs text-muted-foreground">
          <AlertCircle className="h-3.5 w-3.5 flex-shrink-0 text-primary" />
          <span>
            If session exceeds 10 minutes, normal pricing tiers apply. Price may vary depending on gameplay.
          </span>
        </div>
      </CardContent>
    </Card>
  );
}
