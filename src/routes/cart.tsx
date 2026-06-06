import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader, SiteFooter } from "@/components/SiteChrome";
import { ProductCard } from "@/components/ProductCard";
import { useShop } from "@/lib/shop";
import { Trash2, Plus, Minus, ShoppingBag } from "lucide-react";
import { catalog } from "@/lib/catalog";

export const Route = createFileRoute("/cart")({
  head: () => ({ meta: [{ title: "سلة التسوق | مجموعة هنداوي" }] }),
  component: CartPage,
});

function CartPage() {
  const { cart, updateQty, removeFromCart, clearCart } = useShop();
  const subtotal = cart.reduce((s, x) => s + x.price * x.qty, 0);
  const shipping = subtotal > 0 ? 50 : 0;
  const total = subtotal + shipping;
  const suggestions = catalog.filter((p) => !cart.find((c) => c.id === p.id)).slice(0, 4);

  return (
    <div className="min-h-screen bg-cream">
      <SiteHeader />
      <main className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-navy mb-6 text-right">سلة التسوق</h1>

        {cart.length === 0 ? (
          <div className="bg-white rounded-2xl border border-border p-16 text-center">
            <ShoppingBag className="size-16 text-gold/60 mx-auto mb-4" />
            <p className="text-navy text-lg font-semibold">سلتك فارغة</p>
            <p className="text-muted-foreground text-sm mt-2">ابدأ التسوق واكتشف منتجاتنا الفاخرة</p>
            <Link to="/" className="inline-block mt-6 px-8 py-3 bg-navy text-cream rounded-lg hover:bg-navy-deep transition">تسوق الآن</Link>
          </div>
        ) : (
          <div className="grid lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 space-y-3">
              {cart.map((item) => (
                <div key={item.id} className="bg-white rounded-xl border border-border p-4 flex items-center gap-4">
                  <img src={item.img} alt={item.ar} className="size-24 object-contain bg-cream/40 rounded-lg" />
                  <div className="flex-1 text-right">
                    <h3 className="text-navy font-semibold">{item.ar}</h3>
                    <p className="text-xs text-muted-foreground">{item.name}</p>
                    <p className="text-navy font-bold mt-1">{item.price} ₺</p>
                  </div>
                  <div className="flex items-center gap-2 bg-cream rounded-lg p-1">
                    <button onClick={() => updateQty(item.id, item.qty + 1)} className="size-8 grid place-items-center text-navy hover:bg-white rounded"><Plus className="size-4" /></button>
                    <span className="w-8 text-center font-semibold">{item.qty}</span>
                    <button onClick={() => updateQty(item.id, item.qty - 1)} className="size-8 grid place-items-center text-navy hover:bg-white rounded"><Minus className="size-4" /></button>
                  </div>
                  <button onClick={() => removeFromCart(item.id)} className="size-9 grid place-items-center text-destructive hover:bg-destructive/10 rounded-lg" aria-label="حذف"><Trash2 className="size-4" /></button>
                </div>
              ))}
              <button onClick={clearCart} className="text-sm text-destructive hover:underline">إفراغ السلة</button>
            </div>
            <aside className="bg-white rounded-2xl border border-border p-6 h-fit sticky top-4">
              <h2 className="text-navy font-bold text-lg mb-4 text-right">ملخص الطلب</h2>
              <div className="space-y-3 text-sm text-right">
                <Row label="المجموع الفرعي" value={`${subtotal} ₺`} />
                <Row label="الشحن" value={`${shipping} ₺`} />
                <div className="h-px bg-border" />
                <Row label="الإجمالي" value={`${total} ₺`} bold />
              </div>
              <button className="w-full mt-6 py-3.5 bg-navy text-cream rounded-lg hover:bg-navy-deep transition font-medium">إتمام الشراء</button>
              <Link to="/" className="block text-center mt-3 text-sm text-navy/70 hover:text-navy">متابعة التسوق</Link>
            </aside>
          </div>
        )}

        {suggestions.length > 0 && (
          <section className="mt-12">
            <h2 className="text-xl font-bold text-navy mb-4 text-right">قد يعجبك أيضاً</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {suggestions.map((p) => <ProductCard key={p.id} {...p} />)}
            </div>
          </section>
        )}
      </main>
      <SiteFooter />
    </div>
  );
}

function Row({ label, value, bold }: { label: string; value: string; bold?: boolean }) {
  return (
    <div className={`flex items-center justify-between ${bold ? "text-navy font-bold text-base" : "text-navy/80"}`}>
      <span>{value}</span><span>{label}</span>
    </div>
  );
}
