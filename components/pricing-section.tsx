import React from 'react';

const pricingTiers = [
  { duration: '10 minutes', price: '50 DZD' },
  { duration: '30 minutes', price: '100 DZD' },
  { duration: '1 hour', price: '200 DZD' },
];

export function PricingSection() {
  return (
    <section className="w-full bg-zinc-950 text-white p-8 rounded-lg border border-zinc-800 mb-8">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-2xl font-bold mb-4 tracking-tight uppercase">Pricing & Billing</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          {pricingTiers.map((tier) => (
            <div key={tier.duration} className="flex flex-col items-center p-4 bg-zinc-900 rounded-md border border-zinc-800">
              <span className="text-zinc-400 text-sm mb-1">{tier.duration}</span>
              <span className="text-xl font-bold text-white">{tier.price}</span>
            </div>
          ))}
        </div>
        <p className="text-zinc-500 text-xs leading-relaxed italic">
          Note: If your session exceeds 10 minutes, the standard pricing tiers apply. 
          Prices may vary slightly depending on the game and console generation.
        </p>
      </div>
    </section>
  );
}
