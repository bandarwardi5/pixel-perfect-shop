import { createFileRoute } from "@tanstack/react-router";
import {
  Search, Heart, User, ShoppingCart, Headphones, Menu, ChevronLeft, ChevronRight,
  Truck, ShieldCheck, Lock, RotateCcw, Gift, Star, Phone, Mail, MapPin, Globe,
  Facebook, Instagram, Youtube, Crown, CheckCircle2, Watch, Sparkles, BookOpen,
  Smartphone, HeartPulse, Plane, Package, MessageCircle,
} from "lucide-react";
import hero from "@/assets/hero.jpg";
import promoGift from "@/assets/promo-gift.jpg";
import promoWholesale from "@/assets/promo-wholesale.jpg";
import promoShipping from "@/assets/promo-shipping.jpg";
import promoOffers from "@/assets/promo-offers.jpg";
import p1 from "@/assets/p1.jpg";
import p2 from "@/assets/p2.jpg";
import p3 from "@/assets/p3.jpg";
import p4 from "@/assets/p4.jpg";
import p5 from "@/assets/p5.jpg";
import p6 from "@/assets/p6.jpg";
import p7 from "@/assets/p7.jpg";

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

const categories = [
  "الرئيسية", "العطور", "الساعات", "الشحن الدولي", "الإلكترونيات",
  "الصحة والجمال", "الكتب، محاسبية والأعمال", "الهدايا", "ساعات فاخرة", "عطور خليجية أصلية",
];

const categoryIcons = [
  { icon: Sparkles, label: "عطور خليجية أصلية" },
  { icon: Watch, label: "ساعات فاخرة" },
  { icon: Gift, label: "الهدايا" },
  { icon: BookOpen, label: "الكتب المحاسبية والأعمال" },
  { icon: HeartPulse, label: "الصحة والجمال" },
  { icon: Smartphone, label: "الإلكترونيات" },
  { icon: Globe, label: "الشحن الدولي" },
];

const promos = [
  {
    img: promoGift, title: "صمم هديتك بنفسك",
    sub: "اختر من الأقسام وأضف لمستك الخاصة",
    steps: ["اختر المنتجات", "أضف لمستك", "تغليف فاخر", "جاهز للإهداء"],
    cta: "ابدأ التصميم الآن",
  },
  {
    img: promoWholesale, title: "أحصل على كود تاجر الجملة",
    sub: "أسعار خاصة للتجار وأصحاب المتاجر",
    cta: "اطلب الكود الآن",
  },
  {
    img: promoShipping, title: "شحن دولي سريع",
    sub: "إلى أكثر من 220 دولة",
    bullets: ["تتبع الشحنات", "تغليف آمن", "توصيل سريع"],
    cta: "اطلب الآن",
  },
  {
    img: promoOffers, title: "عروض حصرية",
    sub: "خصومات تصل إلى",
    big: "40%",
    cta: "تسوق الآن",
  },
];

const products = [
  { img: p1, name: "Lattafa Khamrah", ar: "خمرة لطافة", price: 199, old: 249, rating: 4, reviews: 128, badge: "-20%" },
  { img: p2, name: "Armaf Club De Nuit", ar: "أرماف كلوب دي نويت", price: 219, old: 299, rating: 3, reviews: 97, badge: "-27%" },
  { img: p3, name: "Classic Date 41", ar: "ساعة كلاسيك 41", price: 41500, rating: 5, reviews: 84, badge: "جديد", badgeColor: "navy" },
  { img: p4, name: "Wireless Earbuds Pro 2", ar: "إيربودز برو 2", price: 1199, old: 1399, rating: 4, reviews: 156, badge: "-15%" },
  { img: p5, name: "Luxury Handbag", ar: "حقيبة فاخرة", price: 449, old: 599, rating: 4, reviews: 73, badge: "-25%" },
  { img: p6, name: "Financial Accounting", ar: "المحاسبة المالية", price: 69, old: 99, rating: 3, reviews: 56, badge: "-20%" },
  { img: p7, name: "Hydrating Moisturizer", ar: "مرطب سيرافي", price: 79, old: 99, rating: 4, reviews: 112, badge: "-20%" },
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
      {/* Top bar */}
      <div className="bg-navy-deep text-cream text-xs">
        <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-between flex-wrap gap-2">
          <div className="flex items-center gap-6 text-cream/80">
            <span className="flex items-center gap-1.5"><Truck className="size-3.5 text-gold" /> الشحن سريع وآمن إلى جميع دول العالم</span>
            <span className="hidden md:flex items-center gap-1.5"><ShieldCheck className="size-3.5 text-gold" /> منتجات أصلية 100%</span>
            <span className="hidden lg:flex items-center gap-1.5"><Headphones className="size-3.5 text-gold" /> دعم ومساعدة</span>
            <span className="hidden lg:flex items-center gap-1.5"><Package className="size-3.5 text-gold" /> تتبع طلبك</span>
          </div>
          <div className="flex items-center gap-1.5"><Globe className="size-3.5 text-gold" /> العربية</div>
        </div>
      </div>

      {/* Header */}
      <header className="bg-white border-b border-border">
        <div className="max-w-7xl mx-auto px-4 py-5 flex items-center gap-6">
          <Logo />
          <div className="flex-1 relative max-w-2xl">
            <input
              type="text"
              placeholder="ابحث عن منتج أو علامة تجارية..."
              className="w-full bg-secondary/60 rounded-lg pr-4 pl-14 py-3.5 text-sm outline-none focus:ring-2 focus:ring-gold/40 border border-border"
            />
            <button className="absolute left-1 top-1 bottom-1 px-4 bg-navy text-cream rounded-md hover:bg-navy-deep transition">
              <Search className="size-5" />
            </button>
          </div>
          <nav className="flex items-center gap-6 text-navy">
            <IconCol icon={Headphones} label="تواصل معنا" />
            <IconCol icon={Heart} label="المفضلة" />
            <IconCol icon={User} label="حسابي" />
            <div className="relative">
              <IconCol icon={ShoppingCart} label="السلة" />
              <span className="absolute -top-1 -left-1 bg-gold text-navy-deep text-[10px] font-bold size-4 rounded-full grid place-items-center">2</span>
            </div>
          </nav>
        </div>

        {/* Nav row */}
        <div className="max-w-7xl mx-auto px-4 pb-4 flex items-center gap-4">
          <button className="bg-navy text-cream px-5 py-2.5 rounded-lg flex items-center gap-2 text-sm font-medium">
            <Menu className="size-4" /> الأقسام
          </button>
          <ul className="flex items-center gap-7 text-sm overflow-x-auto whitespace-nowrap text-navy/80">
            {categories.map((c, i) => (
              <li key={c} className={`relative pb-2 cursor-pointer hover:text-navy ${i === 0 ? "text-navy font-semibold" : ""}`}>
                {c}
                {i === 0 && <span className="absolute bottom-0 right-0 left-0 h-0.5 bg-gold-gradient rounded-full" />}
              </li>
            ))}
          </ul>
        </div>
      </header>

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-4 mt-4">
        <div className="relative rounded-2xl overflow-hidden bg-navy-deep">
          <img src={hero} alt="الفخامة في كل اختيار" className="w-full h-[460px] object-cover opacity-90" width={1600} height={800} />
          <div className="absolute inset-0 bg-gradient-to-l from-navy-deep/80 via-navy-deep/30 to-transparent" />
          <div className="absolute inset-0 flex items-center">
            <div className="w-full px-10 md:px-16 text-cream text-right">
              <Crown className="size-7 text-gold mb-3 inline-block" />
              <h1 className="text-5xl md:text-6xl font-bold leading-tight">امتلك الفخامة...</h1>
              <p className="text-3xl md:text-4xl mt-3 text-gold-gradient font-semibold">في كل اختيار</p>
              <p className="mt-5 text-cream/85 text-sm md:text-base">
                عطور · ساعات · هدايا · إلكترونيات · صحة وجمال · كتب · أعمال · شحن دولي
              </p>
              <button className="mt-7 px-8 py-3 rounded-lg border border-gold text-gold hover:bg-gold hover:text-navy-deep transition text-sm font-medium">
                تسوق الآن
              </button>
              <div className="mt-6 flex items-center justify-end gap-2">
                {[0,1,2,3].map(i => (
                  <span key={i} className={`h-2 rounded-full transition-all ${i === 1 ? "w-6 bg-gold" : "w-2 bg-cream/40"}`} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Category strip */}
      <section className="max-w-7xl mx-auto px-4 mt-6">
        <div className="bg-white rounded-2xl shadow-sm border border-border grid grid-cols-3 md:grid-cols-7 divide-x divide-x-reverse divide-border">
          {categoryIcons.map(({ icon: Icon, label }) => (
            <button key={label} className="flex flex-col items-center gap-2 py-5 px-3 hover:bg-secondary/50 transition group">
              <div className="size-12 rounded-full bg-cream grid place-items-center border border-gold/30 group-hover:border-gold">
                <Icon className="size-6 text-navy" />
              </div>
              <span className="text-xs text-navy/80 text-center leading-tight">{label}</span>
            </button>
          ))}
        </div>
      </section>

      {/* Promo cards */}
      <section className="max-w-7xl mx-auto px-4 mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {promos.map((p, i) => (
          <article key={i} className="bg-white rounded-2xl border border-border overflow-hidden flex flex-col text-center p-5 shadow-sm hover:shadow-md transition">
            <h3 className="text-navy font-bold text-lg">{p.title}</h3>
            <p className="text-muted-foreground text-xs mt-1.5 min-h-[32px]">{p.sub}</p>
            {p.steps && (
              <div className="flex items-center justify-between gap-1 mt-3 text-[10px] text-navy/70">
                {p.steps.map((s) => (
                  <div key={s} className="flex flex-col items-center gap-1 flex-1">
                    <div className="size-7 rounded-full bg-cream border border-gold/30 grid place-items-center text-gold">
                      <CheckCircle2 className="size-3.5" />
                    </div>
                    <span>{s}</span>
                  </div>
                ))}
              </div>
            )}
            {p.bullets && (
              <ul className="mt-3 space-y-1.5 text-xs text-navy/80 text-right">
                {p.bullets.map(b => (
                  <li key={b} className="flex items-center gap-2 justify-end">
                    {b} <CheckCircle2 className="size-3.5 text-gold" />
                  </li>
                ))}
              </ul>
            )}
            {p.big && <div className="text-5xl font-bold text-navy mt-2">{p.big}</div>}
            <div className="flex-1 min-h-4" />
            <img src={p.img} alt={p.title} loading="lazy" className="h-36 object-contain mx-auto my-3" />
            <button className="mt-auto bg-navy text-cream rounded-lg py-2.5 text-sm hover:bg-navy-deep transition border border-gold/20">
              {p.cta}
            </button>
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
              {products.map((pr, i) => (
                <ProductCard key={i} {...pr} />
              ))}
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

      {/* Footer */}
      <footer className="bg-navy-deep text-cream/85 mt-6">
        <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-4 gap-10">
          <div>
            <Logo light />
            <div className="flex items-center gap-3 mt-4 text-cream/70 text-sm">
              <span>Luxury</span><span className="text-gold">·</span>
              <span>Quality</span><span className="text-gold">·</span>
              <span>Trust</span>
            </div>
            <div className="flex items-center gap-3 mt-5 text-cream/70">
              <SocialIcon Icon={Facebook} />
              <SocialIcon Icon={Instagram} />
              <SocialIcon Icon={Youtube} />
            </div>
          </div>
          <FooterCol title="خدمة العملاء" items={["تواصل معنا", "الأسئلة الشائعة", "تتبع الطلب", "سياسة الإرجاع", "سياسة الاستبدال"]} />
          <FooterCol title="الأقسام" items={["العطور", "الساعات", "الإلكترونيات", "الصحة والجمال", "الكتب المحاسبية والأعمال", "الهدايا", "الشحن الدولي"]} />
          <div>
            <h4 className="text-gold font-bold mb-4">تواصل معنا</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2"><Phone className="size-4 text-gold" /> +90 552 123 45 67</li>
              <li className="flex items-center gap-2"><Mail className="size-4 text-gold" /> info@hendawigroup.com</li>
              <li className="flex items-center gap-2"><MapPin className="size-4 text-gold" /> تركيا - إسطنبول</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-cream/10">
          <div className="max-w-7xl mx-auto px-4 py-4 text-center text-xs text-cream/60">
            © 2026 Hendawi Group. جميع الحقوق محفوظة
          </div>
        </div>
      </footer>

      {/* Floating whatsapp */}
      <a href="#" className="fixed bottom-6 left-6 size-14 rounded-full bg-[oklch(0.65_0.18_150)] grid place-items-center shadow-lg hover:scale-105 transition" aria-label="WhatsApp">
        <MessageCircle className="size-7 text-white" />
      </a>
    </div>
  );
}

function Logo({ light = false }: { light?: boolean }) {
  return (
    <div className="flex items-center gap-2.5">
      <div className="relative">
        <div className="size-12 rounded-lg bg-gold-gradient grid place-items-center text-navy-deep font-bold text-xl" style={{ fontFamily: 'var(--font-display)' }}>
          HG
        </div>
        <Crown className="size-3.5 text-gold absolute -top-1 right-1/2 translate-x-1/2" />
      </div>
      <div className={light ? "text-cream" : "text-navy"}>
        <p className="font-bold text-lg tracking-widest leading-none" style={{ fontFamily: 'var(--font-display)' }}>HENDAWI</p>
        <p className="text-[10px] tracking-[0.4em] text-gold mt-1">G R O U P</p>
      </div>
    </div>
  );
}

function IconCol({ icon: Icon, label }: { icon: typeof Heart; label: string }) {
  return (
    <button className="flex flex-col items-center gap-1 text-xs hover:text-gold transition">
      <Icon className="size-5" />
      <span>{label}</span>
    </button>
  );
}

function SocialIcon({ Icon }: { Icon: typeof Facebook }) {
  return (
    <a href="#" className="size-9 rounded-full border border-cream/20 grid place-items-center hover:border-gold hover:text-gold transition">
      <Icon className="size-4" />
    </a>
  );
}

function FooterCol({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <h4 className="text-gold font-bold mb-4">{title}</h4>
      <ul className="space-y-2.5 text-sm">
        {items.map(i => <li key={i} className="hover:text-gold cursor-pointer transition">{i}</li>)}
      </ul>
    </div>
  );
}

type Prod = {
  img: string; name: string; ar: string; price: number; old?: number;
  rating: number; reviews: number; badge?: string; badgeColor?: string;
};
function ProductCard({ img, name, ar, price, old, rating, reviews, badge, badgeColor }: Prod) {
  return (
    <div className="group">
      <div className="relative bg-cream rounded-xl overflow-hidden aspect-square border border-border">
        {badge && (
          <span className={`absolute top-2 right-2 z-10 text-[10px] font-bold px-2 py-1 rounded-md ${
            badgeColor === "navy" ? "bg-navy text-cream" : "bg-navy text-gold"
          }`}>
            {badge}
          </span>
        )}
        <img src={img} alt={ar} loading="lazy" className="size-full object-contain p-3 group-hover:scale-105 transition" />
      </div>
      <p className="mt-2.5 text-xs text-navy font-medium truncate" dir="ltr">{name}</p>
      <p className="text-xs text-muted-foreground truncate">{ar}</p>
      <div className="flex items-center gap-0.5 mt-1.5">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} className={`size-3 ${i < rating ? "fill-gold text-gold" : "text-border"}`} />
        ))}
        <span className="text-[10px] text-muted-foreground mr-1">({reviews})</span>
      </div>
      <div className="flex items-baseline gap-2 mt-1.5">
        <span className="text-navy font-bold text-sm">{price.toLocaleString()}</span>
        <span className="text-[10px] text-muted-foreground">ر.س</span>
        {old && <span className="text-[10px] text-muted-foreground line-through">{old}</span>}
      </div>
    </div>
  );
}
