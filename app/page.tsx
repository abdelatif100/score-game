import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Smartphone, Gamepad2, Banknote, MapPin } from 'lucide-react';

export const metadata = {
  title: 'متجر ألعاب الفيديو | حالة الأجهزة في الوقت الفعلي',
  description: 'تحقق من حالة الأجهزة وتصفح قائمة ألعابنا قبل زيارتك. لا حاجة للحجز، فقط تفضل بالدخول واللعب!',
};

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white flex flex-col items-center justify-center p-6 sm:p-24 selection:bg-blue-500/30">
      {/* Hero Section */}
      <section className="max-w-4xl w-full text-center space-y-8 py-20">
        <header className="space-y-4">
          <h1 className="text-5xl sm:text-7xl font-bold tracking-tight text-white leading-tight">
            متجر <span className="text-blue-500">ألعاب الفيديو</span>
          </h1>
          <p className="text-xl sm:text-2xl text-zinc-400 max-w-2xl mx-auto leading-relaxed">
            وجهتك المحلية لألعاب المنصات. تحقق من توفر الأجهزة وتصفح قائمة ألعابنا قبل زيارتك.
          </p>
        </header>

        {/* Primary Navigation Buttons */}
        <nav className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 pt-8">
          <Button asChild size="lg" className="w-full sm:w-auto px-8 h-14 text-lg font-semibold bg-white text-black hover:bg-zinc-200 transition-all rounded-lg" aria-label="عرض الأجهزة وتوفرها">
            <Link href="/consoles">عرض الأجهزة</Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="w-full sm:w-auto px-8 h-14 text-lg font-semibold border-2 border-zinc-800 text-white hover:bg-zinc-900 transition-all rounded-lg" aria-label="تصفح قائمة الألعاب">
            <Link href="/games">تصفح الألعاب</Link>
          </Button>
        </nav>
      </section>

      {/* Value Proposition Section */}
      <section className="max-w-6xl w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 py-20 border-t border-zinc-900/50 mt-12">
        <div className="space-y-4 p-6 rounded-2xl bg-zinc-900/30 border border-zinc-800/50 hover:border-zinc-700/50 transition-colors">
          <Smartphone className="w-10 h-10 text-blue-500" />
          <h3 className="text-xl font-bold">حالة مباشرة</h3>
          <p className="text-zinc-400 leading-relaxed">اعرف ما إذا كان الجهاز متاحاً أو محجوزاً الآن قبل مغادرتك للمنزل.</p>
        </div>
        
        <div className="space-y-4 p-6 rounded-2xl bg-zinc-900/30 border border-zinc-800/50 hover:border-zinc-700/50 transition-colors">
          <Gamepad2 className="w-10 h-10 text-blue-500" />
          <h3 className="text-xl font-bold">مكتبة ألعاب كاملة</h3>
          <p className="text-zinc-400 leading-relaxed">تصفح كل الألعاب المثبتة على أجهزة PS5 و Xbox و Switch لدينا.</p>
        </div>

        <div className="space-y-4 p-6 rounded-2xl bg-zinc-900/30 border border-zinc-800/50 hover:border-zinc-700/50 transition-colors">
          <Banknote className="w-10 h-10 text-blue-500" />
          <h3 className="text-xl font-bold">أسعار شفافة</h3>
          <p className="text-zinc-400 leading-relaxed">تعرف على أسعارنا (تبدأ من 50 د.ج) قبل وصولك. لا مفاجآت.</p>
        </div>

        <div className="space-y-4 p-6 rounded-2xl bg-zinc-900/30 border border-zinc-800/50 hover:border-zinc-700/50 transition-colors">
          <MapPin className="w-10 h-10 text-blue-500" />
          <h3 className="text-xl font-bold">بدون حجز مسبق</h3>
          <p className="text-zinc-400 leading-relaxed">فقط تفضل بالدخول واللعب. نظامنا يسهل عليك العثور على مكان متاح.</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full text-center py-12 border-t border-zinc-900/50 text-zinc-500 font-medium">
        <p className="flex items-center justify-center gap-2">
          تفضل بزيارتنا اليوم — <span className="text-zinc-400">نرحب بالجميع!</span>
        </p>
      </footer>
    </main>
  );
}
