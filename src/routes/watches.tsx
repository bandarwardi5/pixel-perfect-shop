import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader, SiteFooter } from "@/components/SiteChrome";
import { ChevronLeft, ChevronRight, Star, Heart, ShoppingCart, ShieldCheck, Truck, Headphones, Lock, Crown, Gift, Sparkles, BookOpen, Glasses } from "lucide-react";
import hero from "@/assets/hero-watches.jpg";
import boxes from "@/assets/watch-boxes.jpg";
import row from "@/assets/watches-row.jpg";
import p3 from "@/assets/p3.jpg";
import brandsRow from "@/assets/watch-brands-row.jpg";
import landmarksFrom from "@/assets/landmarks-from.jpg";

export const Route = createFileRoute("/watches")({
  head: () => ({ meta: [{ title: "الساعات الفاخرة | مجموعة هنداوي" }, { name: "description", content: "ساعات فاخرة من أكبر الماركات العالمية." }] }),
  component: WatchesPage,
});

const brands = ["RICHARD MILLE", "ROLEX", "PATEK PHILIPPE", "AP", "HUBLOT", "Cartier", "OMEGA", "TAG HEUER", "LONGINES", "TISSOT", "SEIKO", "CASIO", "VERSACE"];
const products = Array.from({ length: 6 }, (_, i) => ({
  n: ["Submariner Style", "Date 41 Style", "GMT Style", "Day-Date Style", "Yacht Style", "Explorer Style"][i],
  ref: ["126334", "126610", "126710", "228238", "226659", "226570"][i],
  price: [41500, 44900, 53900, 89900, 42900, 38900][i],
  rate: [4, 4.5, 4, 4.5, 4, 4][i],
  reviews: [142, 178, 156, 96, 113, 78][i],
}));
const others = [
  { t: "عطور خليجية أصلية", s: "روائح فاخرة ندوم وتعكس نوعك الرفيع" },
  { t: "إكسسوارات", s: "نظارات شمسية، أحذية سبور، واكسسوارات راقية" },
  { t: "كتب محاسبية", s: "كتب محاسبية موثقة وحديثة لمتخصصي المال والأعمال" },
  { t: "هدايا", s: "هدايا فاخرة للمناسبات والأشخاص المميزين" },
];

function WatchesPage() {
  return (
    <div className="min-h-screen bg-cream">
      <SiteHeader active="الساعات" />

      {/* sub-strip */}
      <div className="bg-navy-deep text-cream/85 text-xs">
        <div className="max-w-7xl mx-auto px-4 py-2.5 flex justify-between flex-wrap gap-3">
          <span className="flex items-center gap-1.5"><Headphones className="size-3.5 text-gold" /> دعم خلال أوقات العمل</span>
          <span className="flex items-center gap-1.5"><Gift className="size-3.5 text-gold" /> كرتون ساعات فاخر مع طلبك</span>
          <span className="flex items-center gap-1.5"><Truck className="size-3.5 text-gold" /> شحن سريع إلى جميع دول العالم</span>
        </div>
      </div>

      {/* Hero */}
      <section className="w-full">
        <div className="relative overflow-hidden bg-navy-deep">
          <img src={hero} alt="الفخامة تعكس شخصيتك" className="w-full h-[60vh] min-h-[460px] max-h-[640px] object-cover" />
          <div className="absolute inset-0 bg-gradient-to-l from-cream/80 via-cream/20 to-transparent" />
          <div className="absolute inset-0 flex items-center">
            <div className="w-full max-w-7xl mx-auto px-6 md:px-16 text-right text-navy">
              <p className="text-sm md:text-base text-[oklch(0.4_0.12_150)] font-semibold">الفخامة تعكس شخصيتك</p>
              <h1 className="text-5xl md:text-6xl font-bold mt-3 leading-tight text-[oklch(0.25_0.1_150)]">امتلك الفخامة<br />اليوم قبل الغد</h1>
              <button className="mt-7 bg-[oklch(0.35_0.12_150)] text-white px-8 py-3 rounded-lg text-sm hover:opacity-90">تسوق الآن</button>
            </div>
          </div>
        </div>
      </section>

      {/* Brands strip */}
      <section className="max-w-7xl mx-auto px-4 mt-6">
        <div className="bg-white rounded-2xl border border-border p-4 shadow-sm relative">
          <button className="absolute right-2 top-1/2 -translate-y-1/2 size-8 rounded-full bg-white shadow border border-border grid place-items-center"><ChevronRight className="size-4 text-navy" /></button>
          <button className="absolute left-2 top-1/2 -translate-y-1/2 size-8 rounded-full bg-white shadow border border-border grid place-items-center"><ChevronLeft className="size-4 text-navy" /></button>
          <div className="flex gap-3 overflow-x-auto px-10">
            {brands.map((b, i) => (
              <div key={b} className={`shrink-0 min-w-[120px] rounded-lg text-center border overflow-hidden ${i === 1 ? "bg-[oklch(0.35_0.12_150)] text-white border-transparent" : "bg-white border-border text-navy/80"}`}>
                <div className="h-12 w-full" style={{ backgroundImage: `url(${brandsRow})`, backgroundSize: `${brands.length * 100}% 100%`, backgroundPosition: `${(i / (brands.length - 1)) * 100}% center`, backgroundRepeat: 'no-repeat', filter: i === 1 ? 'brightness(1.2)' : 'none' }} />
                <p className="text-[11px] font-bold py-1.5 px-2" style={{ fontFamily: 'var(--font-display)' }}>{b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gender filter */}
      <section className="max-w-7xl mx-auto px-4 mt-6 flex items-center justify-center gap-3">
        {[
          { t: "رجالي", active: true }, { t: "نسائي" }, { t: "رجالي & نسائي" },
        ].map(g => (
          <button key={g.t} className={`px-6 py-2.5 rounded-full text-sm border ${g.active ? "bg-[oklch(0.35_0.12_150)] text-white border-transparent" : "bg-white text-navy border-border"}`}>{g.t}</button>
        ))}
      </section>

      {/* Bestsellers */}
      <section className="max-w-7xl mx-auto px-4 mt-6">
        <div className="bg-white rounded-2xl border border-border p-6 shadow-sm">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Crown className="size-5 text-[oklch(0.4_0.12_150)]" />
            <h2 className="text-xl font-bold text-navy">الأكثر مبيعاً</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
            {products.map(pr => (
              <div key={pr.ref} className="border border-border rounded-xl p-3 hover:shadow-md transition">
                <Heart className="size-4 text-muted-foreground mb-2" />
                <img src={p3} alt={pr.n} loading="lazy" className="h-32 w-full object-contain" />
                <p className="text-navy font-semibold text-xs mt-2 text-center" dir="ltr">{pr.n}</p>
                <p className="text-muted-foreground text-[10px] text-center" dir="ltr">{pr.ref}</p>
                <p className="text-center text-navy font-bold mt-1">{pr.price.toLocaleString()} <span className="text-[10px] font-normal">ر.س</span></p>
                <div className="flex justify-center items-center gap-0.5 mt-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className={`size-2.5 ${i < Math.floor(pr.rate) ? "fill-gold text-gold" : "text-border"}`} />
                  ))}
                  <span className="text-[9px] text-muted-foreground mr-1">({pr.reviews})</span>
                </div>
                <button className="w-full mt-2 bg-[oklch(0.35_0.12_150)] text-white py-1.5 rounded text-xs flex items-center justify-center gap-1"><ShoppingCart className="size-3" /></button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Boxes */}
      <section className="max-w-7xl mx-auto px-4 mt-6">
        <div className="bg-white rounded-2xl border border-border p-6 shadow-sm">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Gift className="size-5 text-[oklch(0.4_0.12_150)]" />
            <h2 className="text-xl font-bold text-navy">كرتون ساعات فاخر حسب طلبك</h2>
          </div>
          <img src={boxes} alt="كرتون ساعات فاخر" loading="lazy" className="w-full rounded-xl" />
        </div>
      </section>

      {/* Cross sell */}
      <section className="max-w-7xl mx-auto px-4 mt-6">
        <div className="bg-white rounded-2xl border border-border p-6 shadow-sm">
          <h2 className="text-xl font-bold text-navy text-center mb-5">أضف هدية من أقسامنا الأخرى</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {others.map((o, i) => (
              <div key={o.t} className="border border-border rounded-xl p-4 text-center">
                <div className="h-24 w-full rounded-lg mb-2" style={{ backgroundImage: `url(${row})`, backgroundSize: `${others.length * 100}% 100%`, backgroundPosition: `${(i / (others.length - 1)) * 100}% center`, backgroundRepeat: 'no-repeat' }} />
                <p className="text-navy font-semibold text-sm">{o.t}</p>
                <p className="text-muted-foreground text-[11px] mt-1 leading-relaxed">{o.s}</p>
                <button className="mt-3 bg-[oklch(0.35_0.12_150)] text-white px-4 py-1.5 rounded text-xs">تسوق الآن</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="max-w-7xl mx-auto px-4 mt-6">
        <div className="bg-white rounded-2xl border border-border p-5 grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
          {[{ I: ShieldCheck, t: "ضمان دولي", s: "ضمان شامل على جميع الساعات" }, { I: Truck, t: "شحن سريع", s: "إلى جميع دول العالم" }, { I: Headphones, t: "دعم خلال أوقات العمل", s: "فريقنا جاهز لخدمتك" }, { I: Lock, t: "دفع آمن", s: "خيارات دفع متعددة وآمنة" }].map(({ I, t, s }) => (
            <div key={t} className="flex items-start gap-3">
              <div className="size-10 rounded-lg bg-cream border border-gold/30 grid place-items-center text-[oklch(0.35_0.12_150)] shrink-0"><I className="size-5" /></div>
              <div className="text-right"><p className="text-navy font-semibold text-sm">{t}</p><p className="text-muted-foreground text-[11px]">{s}</p></div>
            </div>
          ))}
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
