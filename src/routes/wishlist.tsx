import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader, SiteFooter } from "@/components/SiteChrome";
import { ProductCard } from "@/components/ProductCard";
import { useShop } from "@/lib/shop";
import { Heart } from "lucide-react";

export const Route = createFileRoute("/wishlist")({
  head: () => ({ meta: [{ title: "المفضلة | مجموعة هنداوي" }] }),
  component: WishlistPage,
});

function WishlistPage() {
  const { wishlist } = useShop();
  return (
    <div className="min-h-screen bg-cream">
      <SiteHeader />
      <main className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-navy mb-6 text-right">قائمة المفضلة</h1>
        {wishlist.length === 0 ? (
          <div className="bg-white rounded-2xl border border-border p-16 text-center">
            <Heart className="size-16 text-gold/60 mx-auto mb-4" />
            <p className="text-navy text-lg font-semibold">لا توجد منتجات في المفضلة بعد</p>
            <Link to="/" className="inline-block mt-6 px-8 py-3 bg-navy text-cream rounded-lg hover:bg-navy-deep transition">تصفح المنتجات</Link>
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {wishlist.map((p) => <ProductCard key={p.id} {...p} />)}
          </div>
        )}
      </main>
      <SiteFooter />
    </div>
  );
}
