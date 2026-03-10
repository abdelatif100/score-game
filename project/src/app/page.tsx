import { Hero } from "@/components/sections/hero";
import { Features } from "@/components/sections/features";

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <Hero />
      <Features />
    </div>
  );
}
