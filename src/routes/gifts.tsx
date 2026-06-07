import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader, SiteFooter } from "@/components/SiteChrome";
import { ChevronLeft, ChevronRight, Gift, Star, Mail, Pencil, Box, ShieldCheck, Truck, Headphones, Award } from "lucide-react";
import hero from "@/assets/hero-gifts.jpg";
import packages from "@/assets/gift-packages.jpg";
import occasions from "@/assets/gift-occasions.jpg";

export const Route = createFileRoute("/gifts")({
  head: () => ({ meta: [{ title: "الهدايا | مجموعة هنداوي" }, { name: "description", content: "اختر هديتك المثالية حسب المناسبة وصمم باقتك الخاصة." }] }),
  component: GiftsPage,
});

const occasionList = ["هدايا تخرج", "مناسبات خاصة", "هدايا دينية", "هدايا رسمية", "هدايا للحب", "هدايا مواليد"];
const features = [
  { I: Gift, t: "تغليف فاخر", s: "لكل طلب" },
  { I: Mail, t: "بطاقة هدية", s: "باسمك" },
  { I: Truck, t: "توصيل سريع", s: "من تركيا" },
  { I: ShieldCheck, t: "جودة مضمونة", s: "100%" },
];
const steps = [
  { n: 1, I: Box, t: "اختر المنتجات", s: "من جميع الأقسام" },
  { n: 2, I: Gift, t: "اختر التغليف", s: "والبطاقات" },
  { n: 3, I: Pencil, t: "أضف اسم", s: "أو رسالة" },
  { n: 4, I: Truck, t: "نجهزها ونوصلها", s: "إلى من تحب" },
];
const products = [
  { t: "باكج الفخامة", s: "ساعة + عطر + مسبحة", price: 499, reviews: 128, badge: "الأكثر طلباً" },
  { t: "باكج العطر الملكي", s: "عطر + قلم + محفظة", price: 399, reviews: 96, badge: "جديد", badgeColor: "green" },
  { t: "باكج الإيمان", s: "مصحف + مسبحة + عطر", price: 299, reviews: 75, badge: "الأفضل مبيعاً" },
  { t: "باكج الرجل الأنيق", s: "ساعة + محفظة + قلم", price: 449, reviews: 53 },
  { t: "باكج الأناقة", s: "عطر + إكسسوارات + وردة", price: 349, reviews: 41, badge: "هدية مثالية" },
  { t: "باكج ورد مع دمية", s: "وردة + دمية + شوكولاتة", price: 159, old: 199, reviews: 38, badge: "خصم 20%", badgeColor: "red" },
];

function GiftsPage() {
  return (
    <div className="min-h-screen bg-cream">
      <SiteHeader active="الهدايا" />

      {/* Hero */}
      <section className="w-full bg-cream">
        <div className="max-w-7xl mx-auto px-4 md:px-8 grid md:grid-cols-2 items-center gap-6 py-8">
          <div className="text-right">
            <h1 className="text-5xl md:text-6xl font-bold text-navy leading-tight">اختر هديتك...</h1>
            <p className="text-4xl md:text-5xl mt-2 text-gold-gradient font-bold">واترك الأثر</p>
            <p className="mt-5 text-muted-foreground">لحظات لا تُنسى تبدأ بهدية مميزة</p>
            <div className="grid grid-cols-4 gap-4 mt-7 text-center">
              {features.map(({ I, t, s }) => (
                <div key={t}>
                  <div className="size-10 mx-auto rounded-lg bg-white border border-gold/30 grid place-items-center text-gold mb-1"><I className="size-5" /></div>
                  <p className="text-xs text-navy font-semibold">{t}</p>
                  <p className="text-[10px] text-muted-foreground">{s}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 flex gap-3">
              <button className="bg-gold text-navy-deep px-7 py-3 rounded-lg font-semibold flex items-center gap-2"><Gift className="size-4" /> صمّم هديتك الآن</button>
              <button className="border border-navy text-navy px-7 py-3 rounded-lg">تسوق الباقات ›</button>
            </div>
          </div>
          <img src={hero} alt="اختر هديتك" className="w-full rounded-2xl object-cover" />
        </div>
      </section>

      {/* Occasions */}
      <section className="max-w-7xl mx-auto px-4 mt-4">
        <div className="bg-white rounded-2xl border border-border p-6 shadow-sm">
          <div className="flex items-center justify-center gap-3 mb-5">
            <Gift className="size-5 text-gold" />
            <h2 className="text-xl font-bold text-navy">اختر الهدية حسب المناسبة</h2>
          </div>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-3 text-center">
            {occasionList.map((o, i) => (
              <div key={o} className="border border-border rounded-xl p-3 hover:border-gold cursor-pointer">
                <div className="aspect-square w-full rounded-lg" style={{ backgroundImage: `url(${occasions})`, backgroundSize: `${occasionList.length * 100}% 100%`, backgroundPosition: `${(i / (occasionList.length - 1)) * 100}% center`, backgroundRepeat: 'no-repeat' }} />
                <p className="text-sm text-navy font-semibold mt-2">{o}</p>
                <p className="text-[11px] text-gold mt-0.5">تسوق الآن ›</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Design your own */}
      <section className="max-w-7xl mx-auto px-4 mt-6">
        <div className="bg-white rounded-2xl border border-border p-6 shadow-sm grid md:grid-cols-3 gap-6 items-center">
          <div className="text-right">
            <h3 className="text-2xl text-navy font-bold">صمّم هديتك الخاصة</h3>
            <p className="text-xs text-muted-foreground mt-2">اختر من جميع الأقسام، أضف لمستك الخاصة لنصنع هدية فريدة من أجلك</p>
            <button className="mt-4 bg-navy text-cream px-6 py-2.5 rounded-lg text-sm">ابدأ التصميم ›</button>
          </div>
          <div className="md:col-span-2 flex items-center justify-between gap-2 px-4" dir="ltr">
            {steps.map((st, i) => (
              <div key={st.n} className="flex items-center gap-2">
                <div className="text-center">
                  <div className="size-14 rounded-full bg-cream border-2 border-gold grid place-items-center text-gold mx-auto"><st.I className="size-6" /></div>
                  <p className="text-xs text-navy font-semibold mt-2">{st.t}</p>
                  <p className="text-[10px] text-muted-foreground">{st.s}</p>
                </div>
                {i < steps.length - 1 && <div className="h-px w-8 bg-gold/40" />}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="max-w-7xl mx-auto px-4 mt-6">
        <div className="bg-white rounded-2xl border border-border p-6 shadow-sm">
          <div className="flex items-center justify-center gap-3 mb-5">
            <Gift className="size-5 text-gold" />
            <h2 className="text-xl font-bold text-navy">باكجات هدايا مميزة</h2>
          </div>
          <div className="relative">
            <button className="absolute -right-2 top-1/2 -translate-y-1/2 size-8 rounded-full bg-white shadow border border-border grid place-items-center z-10"><ChevronRight className="size-4 text-navy" /></button>
            <button className="absolute -left-2 top-1/2 -translate-y-1/2 size-8 rounded-full bg-white shadow border border-border grid place-items-center z-10"><ChevronLeft className="size-4 text-navy" /></button>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
              {products.map((p, i) => (
                <div key={p.t} className="border border-border rounded-xl p-3 relative">
                  {p.badge && (
                    <span className={`absolute top-2 right-2 text-[10px] font-bold px-2 py-1 rounded ${p.badgeColor === "green" ? "bg-[oklch(0.5_0.15_150)] text-white" : p.badgeColor === "red" ? "bg-red-500 text-white" : "bg-gold text-navy-deep"}`}>{p.badge}</span>
                  )}
                  <div className="aspect-square bg-cream rounded-lg mt-6" style={{ backgroundImage: `url(${packages})`, backgroundSize: `${products.length * 100}% 100%`, backgroundPosition: `${(i / (products.length - 1)) * 100}% center`, backgroundRepeat: 'no-repeat' }} />
                  <p className="text-navy font-bold text-sm mt-3 text-center">{p.t}</p>
                  <p className="text-muted-foreground text-[11px] text-center">{p.s}</p>
                  <div className="flex justify-center items-center gap-0.5 my-1">
                    {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="size-2.5 fill-gold text-gold" />)}
                    <span className="text-[9px] text-muted-foreground mr-1">({p.reviews})</span>
                  </div>
                  <p className="text-center">
                    {p.old && <span className="text-[10px] text-muted-foreground line-through ml-1">{p.old}</span>}
                    <span className="text-navy font-bold">{p.price} <span className="text-[10px] font-normal">ر.س</span></span>
                  </p>
                  <button className="w-full mt-2 bg-navy text-cream py-2 rounded text-xs">استعرض الباقة</button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features strip */}
      <section className="max-w-7xl mx-auto px-4 mt-6">
        <div className="bg-white rounded-2xl border border-border p-5 grid grid-cols-2 md:grid-cols-5 gap-4 text-sm">
          {[{ I: Award, t: "1006 منتجات أصلية", s: "جودة مضمونة" }, { I: Gift, t: "تغليف فاخر", s: "بعناية وحب" }, { I: Box, t: "هدية تصل في الوقت", s: "الذي تختاره" }, { I: Truck, t: "شحن دولي سريع", s: "إلى جميع دول العالم" }, { I: Headphones, t: "دعم عملاء مميز", s: "على مدار الساعة" }].map(({ I, t, s }) => (
            <div key={t} className="flex items-center gap-3">
              <div className="size-10 rounded-lg bg-cream border border-gold/30 grid place-items-center text-gold shrink-0"><I className="size-5" /></div>
              <div className="text-right"><p className="text-navy text-xs font-semibold">{t}</p><p className="text-muted-foreground text-[10px]">{s}</p></div>
            </div>
          ))}
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
