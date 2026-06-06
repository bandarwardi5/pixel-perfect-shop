import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader, SiteFooter } from "@/components/SiteChrome";
import { ProductCard } from "@/components/ProductCard";
import { catalog } from "@/lib/catalog";
import { Smartphone, Headphones, Watch, Laptop } from "lucide-react";

export const Route = createFileRoute("/electronics")({
  head: () => ({ meta: [{ title: "الإلكترونيات | مجموعة هنداوي" }] }),
  component: ElectronicsPage,
});

const cats = [
  { icon: Smartphone, label: "الهواتف الذكية" },
  { icon: Headphones, label: "السماعات" },
  { icon: Watch, label: "الساعات الذكية" },
  { icon: Laptop, label: "الأجهزة المحمولة" },
];

function ElectronicsPage() {
  const items = catalog.filter((p) => p.category === "electronics");
  return (
    <div className="min-h-screen bg-cream">
      <SiteHeader active="الإلكترونيات" />
      <section className="bg-navy-deep text-cream py-16 text-center">
        <h1 className="text-4xl md:text-5xl font-bold">الإلكترونيات الفاخرة</h1>
        <p className="mt-3 text-cream/70">أحدث الأجهزة من أفضل الماركات العالمية</p>
      </section>
      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {cats.map(({ icon: Icon, label }) => (
            <div key={label} className="bg-white rounded-xl border border-border p-6 text-center hover:border-gold transition">
              <div className="size-14 mx-auto rounded-full bg-cream border border-gold/30 grid place-items-center text-navy mb-3"><Icon className="size-6" /></div>
              <p className="text-navy font-semibold text-sm">{label}</p>
            </div>
          ))}
        </div>
        <h2 className="text-xl font-bold text-navy mb-4 text-right">المنتجات</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {items.map((p) => <ProductCard key={p.id} {...p} />)}
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
