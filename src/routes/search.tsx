import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader, SiteFooter } from "@/components/SiteChrome";
import { ProductCard } from "@/components/ProductCard";
import { catalog } from "@/lib/catalog";
import { Search as SearchIcon } from "lucide-react";

export const Route = createFileRoute("/search")({
  validateSearch: (s: Record<string, unknown>) => ({ q: (s.q as string) ?? "" }),
  head: () => ({ meta: [{ title: "نتائج البحث | مجموعة هنداوي" }] }),
  component: SearchPage,
});

function SearchPage() {
  const { q } = Route.useSearch();
  const query = q.trim().toLowerCase();
  const results = query
    ? catalog.filter((p) => p.ar.toLowerCase().includes(query) || p.name.toLowerCase().includes(query) || p.category.includes(query))
    : catalog;

  return (
    <div className="min-h-screen bg-cream">
      <SiteHeader />
      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex items-center gap-3 mb-6">
          <SearchIcon className="size-6 text-gold" />
          <h1 className="text-2xl font-bold text-navy">
            {query ? <>نتائج البحث عن: <span className="text-gold">"{q}"</span></> : "جميع المنتجات"}
          </h1>
        </div>
        <p className="text-sm text-muted-foreground mb-6 text-right">{results.length} منتج</p>
        {results.length === 0 ? (
          <div className="bg-white rounded-2xl border border-border p-16 text-center">
            <p className="text-navy text-lg font-semibold">لم نجد نتائج مطابقة</p>
            <p className="text-muted-foreground text-sm mt-2">جرّب كلمات بحث مختلفة</p>
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {results.map((p) => <ProductCard key={p.id} {...p} />)}
          </div>
        )}
      </main>
      <SiteFooter />
    </div>
  );
}
