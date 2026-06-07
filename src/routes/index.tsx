import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ChevronLeft, ChevronRight, Truck, ShieldCheck, Lock, RotateCcw, Gift,
  Globe, Crown, Check, Watch, Sparkles, BookOpen, Smartphone, HeartPulse,
  Headphones,
} from "lucide-react";
import hero from "@/assets/hero.jpg";
import promoGift from "@/assets/promo-gift.jpg";
import promoWholesale from "@/assets/promo-wholesale.jpg";
import promoShipping from "@/assets/promo-shipping.jpg";
import promoOffers from "@/assets/promo-offers.jpg";
import { SiteHeader, SiteFooter } from "@/components/SiteChrome";
import { ProductCard } from "@/components/ProductCard";
import { catalog } from "@/lib/catalog";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "مجموعة هنداوي | Hendawi Group — الفخامة في كل اختيار" },
      { name: "description", content: "متجر هنداوي للعطور والساعات والإلكترونيات والهدايا الفاخرة مع شحن دولي سريع." },
      { property: "og:title", content: "مجموعة هنداوي" },
      { property: "og:description", content: "الفخامة في كل اختيار — عطور، ساعات، هدايا، إلكترونيات." },
    ],
  }),
  component: Home,
});

const categoryIcons = [
  { icon: Sparkles, label: "عطور خليجية أصلية", to: "/perfumes" as const },
  { icon: Watch, label: "ساعات فاخرة", to: "/watches" as const },
  { icon: Gift, label: "الهدايا", to: "/gifts" as const },
  { icon: BookOpen, label: "الكتب المحاسبية والأعمال", to: "/books" as const },
  { icon: HeartPulse, label: "الصحة والجمال", to: "/search" as const },
  { icon: Smartphone, label: "الإلكترونيات", to: "/electronics" as const },
  { icon: Globe, label: "الشحن الدولي", to: "/shipping" as const },
];

const promos = [
  { img: promoGift, title: "صمم هديتك بنفسك", sub: "اختر من الأقسام وأضف لمستك الخاصة",
    steps: ["اختر المنتجات", "أضف لمستك", "تغليف فاخر", "جاهز للإهداء"], cta: "ابدأ التصميم الآن", to: "/gifts" as const },
  { img: promoWholesale, title: "أحصل على كود تاجر الجملة", sub: "أسعار خاصة للتجار وأصحاب المتاجر",
    cta: "اطلب الكود الآن", to: "/contact" as const },
  { img: promoShipping, title: "شحن دولي سريع", sub: "إلى أكثر من 220 دولة",
    bullets: ["تتبع الشحنات", "تغليف آمن", "توصيل سريع"], cta: "اطلب الآن", to: "/shipping" as const },
  { img: promoOffers, title: "عروض حصرية", sub: "خصومات تصل إلى", big: "40%", cta: "تسوق الآن", to: "/search" as const },
];

const brands = ["Lattafa", "ARMAF", "Rasasi", "Aurum", "Patek Style", "Cartel", "Sansumi", "AppleStyle", "Maicol", "BOSSE"];

const features = [
  { icon: ShieldCheck, t: "منتجات أصلية 100%", s: "مضمونة" },
  { icon: Truck, t: "شحن سريع", s: "إلى جميع الدول" },
  { icon: Lock, t: "دفع آمن", s: "وسهل ومشفر" },
  { icon: Headphones, t: "دعم فني", s: "على مدار الساعة" },
  { icon: RotateCcw, t: "إرجاع سهل", s: "حتى 7 أيام" },
  { icon: Gift, t: "تغليف فاخر", s: "لكل طلب" },
];

function Home() {
  return (
    <div className="min-h-screen bg-cream">
      <SiteHeader active="الرئيسية" />

      {/* Hero */}
      <section className="w-full">
        <div className="relative overflow-hidden bg-navy-deep">
          <img src={hero} alt="الفخامة في كل اختيار" className="w-full h-[60vh] min-h-[520px] max-h-[760px] object-cover opacity-90" width={1920} height={900} />
          <div className="absolute inset-0 bg-gradient-to-l from-navy-deep/85 via-navy-deep/40 to-transparent" />
          <div className="absolute inset-0 flex items-center">
            <div className="w-full max-w-7xl mx-auto px-6 md:px-16 text-cream text-right">
              <Crown className="size-8 text-gold mb-3 inline-block" />
              <h1 className="text-5xl md:text-7xl font-bold leading-tight">امتلك الفخامة...</h1>
              <p className="text-3xl md:text-5xl mt-4 text-gold-gradient font-semibold">في كل اختيار</p>
              <p className="mt-6 text-cream/85 text-sm md:text-lg max-w-xl mr-0 ml-auto">
                عطور · ساعات · هدايا · إلكترونيات · صحة وجمال · كتب · أعمال · شحن دولي
              </p>
              <Link to="/search" search={{ q: "" }} className="inline-block mt-8 px-10 py-3.5 rounded-lg border border-gold text-gold hover:bg-gold hover:text-navy-deep transition text-sm font-medium">
                تسوق الآن
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Category strip */}
      <section className="max-w-7xl mx-auto px-4 mt-6">
        <div className="bg-white rounded-2xl shadow-sm border border-border grid grid-cols-3 md:grid-cols-7 divide-x divide-x-reverse divide-border">
          {categoryIcons.map(({ icon: Icon, label, to }) => (
            <Link key={label} to={to} className="flex flex-col items-center gap-2 py-5 px-3 hover:bg-secondary/50 transition group">
              <div className="size-12 rounded-full bg-cream grid place-items-center border border-gold/30 group-hover:border-gold">
                <Icon className="size-6 text-navy" />
              </div>
              <span className="text-xs text-navy/80 text-center leading-tight">{label}</span>
            </Link>
          ))}
        </div>
      </section>

      {/* Promo cards */}
      <section className="max-w-7xl mx-auto px-4 mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {promos.map((p, i) => (
          <article key={i} className="bg-white rounded-[2.5rem] border border-border/50 overflow-hidden flex flex-col text-center p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-500 group">
            <div className="mb-6">
              <h3 className="text-navy font-bold text-2xl mb-2 tracking-tight">{p.title}</h3>
              <p className="text-muted-foreground text-sm font-medium opacity-80">{p.sub}</p>
            </div>
            
            <div className="flex-1 flex flex-col items-center justify-start mb-8">
              {p.steps && (
                <div className="flex items-start justify-center gap-2 mb-8 w-full">
                  {p.steps.map((s) => (
                    <div key={s} className="flex flex-col items-center gap-1.5">
                      <div className="size-6 rounded-full border border-gold/40 flex items-center justify-center text-gold">
                        <Check className="size-3" strokeWidth={3} />
                      </div>
                      <span className="text-[8px] text-navy/60 font-bold leading-tight whitespace-nowrap">{s}</span>
                    </div>
                  ))}
                </div>
              )}
              
              {p.bullets && (
                <ul className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2 mb-8 w-full px-1">
                  {p.bullets.map(b => (
                    <li key={b} className="flex items-center gap-1.5 flex-row-reverse">
                      <span className="text-[10px] text-navy/80 font-bold whitespace-nowrap">{b}</span>
                      <div className="size-4 rounded-full border border-gold/40 flex items-center justify-center text-gold shrink-0">
                        <Check className="size-2.5" strokeWidth={3} />
                      </div>
                    </li>
                  ))}
                </ul>
              )}
              
              {p.big && (
                <div className="my-6">
                  <div className="text-6xl font-black text-navy tracking-tighter">
                    {p.big}
                  </div>
                </div>
              )}

              <div className="relative w-full h-36 mt-auto flex items-center justify-center overflow-hidden">
                <img 
                  src={p.img} 
                  alt={p.title} 
                  loading="lazy" 
                  className="max-w-[85%] max-h-full object-contain drop-shadow-xl" 
                />
              </div>
            </div>

            <Link 
              to={p.to} 
              search={p.to === "/search" ? { q: "" } : undefined}
              className="w-full bg-navy-deep text-cream rounded-2xl py-4 text-base font-bold hover:bg-navy transition-all duration-300 shadow-lg shadow-navy/20 active:scale-95"
            >
              {p.cta}
            </Link>
          </article>
        ))}
      </section>

      {/* Bestsellers */}
      <section className="max-w-7xl mx-auto px-4 mt-10">
        <div className="bg-white rounded-2xl border border-border p-6 shadow-sm">
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="h-px w-12 bg-gold/40" />
            <h2 className="text-2xl font-bold text-navy">الأكثر مبيعاً</h2>
            <span className="h-px w-12 bg-gold/40" />
          </div>
          <div className="relative">
            <button className="absolute -right-2 top-1/2 -translate-y-1/2 z-10 size-9 rounded-full bg-white shadow border border-border grid place-items-center hover:bg-cream">
              <ChevronRight className="size-5 text-navy" />
            </button>
            <button className="absolute -left-2 top-1/2 -translate-y-1/2 z-10 size-9 rounded-full bg-white shadow border border-border grid place-items-center hover:bg-cream">
              <ChevronLeft className="size-5 text-navy" />
            </button>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
              {catalog.map((pr) => <ProductCard key={pr.id} {...pr} />)}
            </div>
          </div>
        </div>
      </section>

      {/* Brands */}
      <section className="max-w-7xl mx-auto px-4 mt-8">
        <div className="bg-white rounded-2xl border border-border p-6 shadow-sm">
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="h-px w-12 bg-gold/40" />
            <h2 className="text-xl font-bold text-navy">أشهر العلامات التجارية</h2>
            <span className="h-px w-12 bg-gold/40" />
          </div>
          <div className="flex items-center justify-around gap-6 flex-wrap text-navy/70">
            {brands.map(b => (
              <span key={b} style={{ fontFamily: 'var(--font-display)' }} className="text-xl font-semibold tracking-wide hover:text-navy transition cursor-pointer">
                {b}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Feature strip */}
      <section className="max-w-7xl mx-auto px-4 mt-6 mb-10">
        <div className="bg-white rounded-2xl border border-border px-6 py-5 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 shadow-sm">
          {features.map(({ icon: Icon, t, s }) => (
            <div key={t} className="flex items-center gap-3">
              <div className="size-11 rounded-lg bg-cream border border-gold/30 grid place-items-center text-gold shrink-0">
                <Icon className="size-5" />
              </div>
              <div className="text-right">
                <p className="text-navy text-sm font-semibold leading-tight">{t}</p>
                <p className="text-muted-foreground text-xs">{s}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
