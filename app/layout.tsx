import type { Metadata } from "next";
import { Cairo } from "next/font/google";
import "./globals.css";

const cairo = Cairo({ subsets: ["arabic", "latin"] });

export const metadata: Metadata = {
  title: "متجر ألعاب الفيديو | حالة الأجهزة في الوقت الفعلي",
  description: "تحقق من حالة الأجهزة وتصفح قائمة ألعابنا قبل زيارتك. لا حاجة للحجز، فقط تفضل بالدخول واللعب!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" className="dark">
      <body className={cairo.className}>{children}</body>
    </html>
  );
}
