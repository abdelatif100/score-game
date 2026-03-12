import React from 'react';

const pricingTiers = [
  { duration: '10 دقائق', price: '50 د.ج' },
  { duration: '30 دقيقة', price: '100 د.ج' },
  { duration: 'ساعة واحدة', price: '200 د.ج' },
];

export function PricingSection() {
  return (
    <section className="w-full bg-zinc-950 text-white p-8 rounded-lg border border-zinc-800 mb-8">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-2xl font-bold mb-4 tracking-tight uppercase">الأسعار والفوترة</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          {pricingTiers.map((tier) => (
            <div key={tier.duration} className="flex flex-col items-center p-4 bg-zinc-900 rounded-md border border-zinc-800">
              <span className="text-zinc-400 text-sm mb-1">{tier.duration}</span>
              <span className="text-xl font-bold text-white">{tier.price}</span>
            </div>
          ))}
        </div>
        <p className="text-zinc-500 text-xs leading-relaxed italic">
          ملاحظة: إذا تجاوزت جلستك 10 دقائق، فسيتم تطبيق فئات الأسعار القياسية. 
          قد تختلف الأسعار قليلاً حسب اللعبة وجيل الجهاز.
        </p>
      </div>
    </section>
  );
}
