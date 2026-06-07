import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader, SiteFooter } from "@/components/SiteChrome";
import { ProductCard } from "@/components/ProductCard";
import { catalog } from "@/lib/catalog";
import { Smartphone, Headphones, Watch, Laptop, ChevronLeft, ChevronRight, Crown, ShieldCheck, Truck, Lock, Gift, Sparkles, Cpu, Cable, Camera, Speaker, Gamepad2, Tv, Star } from "lucide-react";
import hero from "@/assets/hero-electronics.jpg";
import brandsImg from "@/assets/electronics-brands.jpg";
import catsImg from "@/assets/electronics-cats.jpg";
import p4 from "@/assets/p4.jpg";

export const Route = createFileRoute("/electronics")({
  head: () => ({ meta: [{ title: "الإلكترونيات | مجموعة هنداوي" }, { name: "description", content: "أحدث الأجهزة الإلكترونية من أفضل الماركات العالمية." }] }),
  component: ElectronicsPage,
});

const brands = ["Apple", "Samsung", "Sony", "Bose", "JBL", "Huawei", "Xiaomi", "Anker"];
const cats = [
  { I: Smartphone, t: "الهواتف الذكية", s: "Smartphones" },
  { I: Headphones, t: "السماعات", s: "Headphones" },
  { I: Watch, t: "الساعات الذكية", s: "Smart Watches" },
  { I: Laptop, t: "الأجهزة المحمولة", s: "Laptops & Tablets" },
];
const moreCats = [
  { I: Camera, t: "كاميرات" },
  { I: Speaker, t: "مكبرات صوت" },
  { I: Gamepad2, t: "ألعاب" },
  { I: Tv, t: "شاشات" },
  { I: Cable, t: "اكسسوارات" },
  { I: Cpu, t: "قطع غيار" },
];
const products = Array.from({ length: 6 }, (_, i) => ({
  n: ["AirPods Pro 2", "Galaxy Buds 3", "Sony WH-1000XM5", "Bose QC Ultra", "JBL Tune 770", "Anker Soundcore"][i],
  ref: ["A2698", "SM-R630", "WH1000XM5", "QC-U", "T770NC", "Q45"][i],
  price: [1199, 899, 1599, 1799, 549, 399][i],
  old: [1399, 1099, 1899, undefined, 699, 499][i],
  rate: [5, 4, 5, 4, 4, 4][i],
  reviews: [156, 128, 203, 89, 142, 76][i],
}));
const others = [
  { t: "عطور خليجية", s: "روائح فاخرة تعكس ذوقك" },
  { t: "ساعات فاخرة", s: "ساعات من أكبر الماركات العالمية" },
  { t: "كتب محاسبية", s: "كتب موثقة لمتخصصي المال" },
  { t: "هدايا مميزة", s: "هدايا فاخرة للمناسبات" },
];

function ElectronicsPage() {
  const items = catalog.filter((p) => p.category === "electronics");
  return (
    <div className="min-h-screen bg-cream">
      <SiteHeader active="الإلكترونيات" />

      {/* sub-strip */}
      <div className="bg-navy-deep text-cream/85 text-xs">
        <div className="max-w-7xl mx-auto px-4 py-2.5 flex justify-between flex-wrap gap-3">
          <span className="flex items-center gap-1.5"><Headphones className="size-3.5 text-gold" /> دعم فني متخصص</span>
          <span className="flex items-center gap-1.5"><ShieldCheck className="size-3.5 text-gold" /> ضمان دولي على جميع المنتجات</span>
          <span className="flex items-center gap-1.5"><Truck className="size-3.5 text-gold" /> شحن سريع إلى جميع دول العالم</span>
        </div>
      </div>

      {/* Hero */}
      <section className="w-full">
        <div className="relative overflow-hidden bg-navy-deep">
          <img src={hero} alt="أحدث الإلكترونيات" className="w-full h-[60vh] min-h-[460px] max-h-[640px] object-cover opacity-90" />
          <div className="absolute inset-0 bg-gradient-to-l from-navy-deep/80 via-navy-deep/30 to-transparent" />
          <div className="absolute inset-0 flex items-center">
            <div className="w-full max-w-7xl mx-auto px-6 md:px-16 text-right text-cream">
              <p className="text-sm md:text-base text-gold font-semibold">التقنية بأبهى صورها</p>
              <h1 className="text-5xl md:text-6xl font-bold mt-3 leading-tight">أحدث الإلكترونيات<br />من أفضل الماركات</h1>
              <p className="mt-4 text-cream/80 max-w-md mr-auto">أجهزة أصلية مع ضمان دولي وشحن سريع</p>
              <div className="mt-7 flex gap-3 justify-end">
                <button className="px-7 py-3 rounded-lg bg-gold text-navy-deep font-medium hover:opacity-90">تسوق الآن</button>
                <button className="px-7 py-3 rounded-lg border border-cream text-cream font-medium">استكشف الماركات</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Brands */}
      <section className="max-w-7xl mx-auto px-4 mt-6">
        <div className="bg-white rounded-2xl border border-border p-4 shadow-sm relative">
          <button className="absolute right-2 top-1/2 -translate-y-1/2 size-8 rounded-full bg-white shadow border border-border grid place-items-center z-10"><ChevronRight className="size-4 text-navy" /></button>
          <button className="absolute left-2 top-1/2 -translate-y-1/2 size-8 rounded-full bg-white shadow border border-border grid place-items-center z-10"><ChevronLeft className="size-4 text-navy" /></button>
          <div className="grid grid-cols-4 md:grid-cols-8 gap-3 px-10">
            {brands.map((b, i) => (
              <div key={b} className={`rounded-lg text-center border overflow-hidden ${i === 0 ? "bg-navy text-cream border-transparent" : "bg-white border-border text-navy/80"}`}>
                <div className="aspect-square w-full" style={{ backgroundImage: `url(${brandsImg})`, backgroundSize: `${brands.length * 100}% 100%`, backgroundPosition: `${(i / (brands.length - 1)) * 100}% center`, backgroundRepeat: 'no-repeat' }} />
                <p className="text-[11px] font-bold py-1.5 px-2" style={{ fontFamily: 'var(--font-display)' }}>{b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="max-w-7xl mx-auto px-4 mt-6 grid grid-cols-1 md:grid-cols-4 gap-4">
        {cats.map((c, i) => (
          <article key={c.t} className="bg-white rounded-2xl border border-border p-5 shadow-sm hover:border-gold transition">
            <div className="aspect-square w-full rounded-xl bg-cream/40" style={{ backgroundImage: `url(${catsImg})`, backgroundSize: `${cats.length * 100}% 100%`, backgroundPosition: `${(i / (cats.length - 1)) * 100}% center`, backgroundRepeat: 'no-repeat' }} />
            <div className="text-right mt-3">
              <h3 className="text-lg font-bold text-navy flex items-center justify-between"><span>{c.t}</span><c.I className="size-5 text-gold" /></h3>
              <p className="text-xs text-muted-foreground mt-1" dir="ltr">{c.s}</p>
              <button className="mt-3 w-full bg-navy text-cream py-2 rounded-lg text-sm hover:bg-navy-deep">تسوق الآن</button>
            </div>
          </article>
        ))}
      </section>

      {/* More categories icons */}
      <section className="max-w-7xl mx-auto px-4 mt-6">
        <div className="bg-white rounded-2xl border border-border p-6 shadow-sm">
          <div className="flex items-center justify-center gap-3 mb-5">
            <Sparkles className="size-5 text-gold" />
            <h2 className="text-xl font-bold text-navy">أقسام أخرى</h2>
          </div>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-3">
            {moreCats.map(({ I, t }) => (
              <div key={t} className="border border-border rounded-xl py-4 px-2 text-center hover:border-gold cursor-pointer">
                <div className="size-12 mx-auto rounded-full bg-cream border border-gold/30 grid place-items-center text-gold"><I className="size-5" /></div>
                <p className="text-xs text-navy mt-2 font-semibold">{t}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bestsellers */}
      <section className="max-w-7xl mx-auto px-4 mt-6">
        <div className="bg-white rounded-2xl border border-border p-6 shadow-sm">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Crown className="size-5 text-gold" />
            <h2 className="text-xl font-bold text-navy">الأكثر مبيعاً</h2>
            <Crown className="size-5 text-gold" />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
            {products.map((pr) => (
              <div key={pr.ref} className="border border-border rounded-xl p-3 hover:shadow-md transition">
                <img src={p4} alt={pr.n} loading="lazy" className="aspect-square w-full object-contain" />
                <p className="text-navy font-semibold text-xs mt-2 text-center" dir="ltr">{pr.n}</p>
                <p className="text-muted-foreground text-[10px] text-center" dir="ltr">{pr.ref}</p>
                <div className="text-center mt-1">
                  {pr.old && <span className="text-[10px] text-muted-foreground line-through ml-1">{pr.old}</span>}
                  <span className="text-navy font-bold">{pr.price.toLocaleString()} <span className="text-[10px] font-normal">ر.س</span></span>
                </div>
                <div className="flex justify-center items-center gap-0.5 mt-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className={`size-2.5 ${i < pr.rate ? "fill-gold text-gold" : "text-border"}`} />
                  ))}
                  <span className="text-[9px] text-muted-foreground mr-1">({pr.reviews})</span>
                </div>
                <button className="w-full mt-2 bg-navy text-cream py-1.5 rounded text-xs">أضف للسلة</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Catalog products */}
      {items.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 mt-6">
          <div className="bg-white rounded-2xl border border-border p-6 shadow-sm">
            <h2 className="text-xl font-bold text-navy text-center mb-5">منتجاتنا المختارة</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {items.map((p) => <ProductCard key={p.id} {...p} />)}
            </div>
          </div>
        </section>
      )}

      {/* Cross sell */}
      <section className="max-w-7xl mx-auto px-4 mt-6">
        <div className="bg-white rounded-2xl border border-border p-6 shadow-sm">
          <h2 className="text-xl font-bold text-navy text-center mb-5">اكتشف أقسامنا الأخرى</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {others.map((o) => (
              <div key={o.t} className="border border-border rounded-xl p-4 text-center hover:border-gold transition">
                <div className="size-14 mx-auto rounded-full bg-cream border border-gold/30 grid place-items-center text-gold mb-2"><Gift className="size-6" /></div>
                <p className="text-navy font-semibold text-sm">{o.t}</p>
                <p className="text-muted-foreground text-[11px] mt-1 leading-relaxed">{o.s}</p>
                <button className="mt-3 bg-navy text-cream px-4 py-1.5 rounded text-xs">تسوق الآن</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Wholesale */}
      <section className="max-w-7xl mx-auto px-4 mt-6 grid md:grid-cols-2 gap-4">
        <div className="bg-navy text-cream rounded-2xl p-6 text-right border-2 border-gold/30">
          <h3 className="text-xl font-bold text-gold">تاجر جملة؟</h3>
          <p className="text-xs text-cream/80 mt-2">سجل الآن للحصول على أسعار خاصة للطلبات بكميات كبيرة على جميع الأجهزة الإلكترونية</p>
          <button className="mt-4 bg-gold text-navy-deep rounded-lg px-6 py-2.5 text-sm font-semibold">اطلب كود الجملة</button>
        </div>
        <div className="bg-cream rounded-2xl p-6 text-right border border-gold/30">
          <h3 className="text-xl font-bold text-navy">طلب جهاز غير متوفر؟</h3>
          <p className="text-xs text-muted-foreground mt-2">أرسل لنا اسم الجهاز والموديل وسنوفره لك بأفضل الأسعار</p>
          <button className="mt-4 bg-navy text-cream rounded-lg px-6 py-2.5 text-sm">اطلب جهازك الآن</button>
        </div>
      </section>

      {/* Features */}
      <section className="max-w-7xl mx-auto px-4 mt-6 mb-8">
        <div className="bg-white rounded-2xl border border-border p-5 grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
          {[
            { I: ShieldCheck, t: "ضمان دولي", s: "ضمان شامل على جميع الأجهزة" },
            { I: Truck, t: "شحن سريع", s: "إلى جميع دول العالم" },
            { I: Headphones, t: "دعم فني متخصص", s: "فريقنا جاهز لخدمتك" },
            { I: Lock, t: "دفع آمن", s: "خيارات دفع متعددة وآمنة" },
          ].map(({ I, t, s }) => (
            <div key={t} className="flex items-start gap-3">
              <div className="size-10 rounded-lg bg-cream border border-gold/30 grid place-items-center text-gold shrink-0"><I className="size-5" /></div>
              <div className="text-right"><p className="text-navy font-semibold text-sm">{t}</p><p className="text-muted-foreground text-[11px]">{s}</p></div>
            </div>
          ))}
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
