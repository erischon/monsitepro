import Hero from "@/components/hero";

export default function HomePage() {
  return (
    <main>
      <div className="grid auto-rows-auto grid-cols-3 gap-4">
        <div className="row-span-2 col-span-2 rounded-xl border-2">
          <Hero />
        </div>
        <div className="row-span-1 col-span-1 rounded-xl border-2"></div>
        <div className="row-span-1 col-span-1 rounded-xl border-2"></div>
        <div className="row-span-1 col-span-1 rounded-xl border-2"></div>
        <div className="row-span-1 col-span-2 rounded-xl border-2"></div>
        <div className="row-span-1 col-span-1 rounded-xl border-2"></div>
        <div className="row-span-1 col-span-1 rounded-xl border-2"></div>
        <div className="row-span-2 col-span-1 rounded-xl border-2"></div>
        <div className="row-span-1 col-span-2 rounded-xl border-2"></div>
      </div>
    </main>
  );
}
