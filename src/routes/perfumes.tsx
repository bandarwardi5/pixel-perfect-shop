import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader, SiteFooter } from "@/components/SiteChrome";
import { ChevronLeft, ChevronRight, Crown, Gift, Sparkles, Watch, BookOpen, Headphones, Glasses, Package, Star, Truck, ShieldCheck, Headphones as Support, Lock } from "lucide-react";
import hero from "@/assets/hero-perfumes.jpg";
import brands from "@/assets/perfume-brands.jpg";
import housesRow from "@/assets/perfume-houses-row.jpg";
import p1 from "@/assets/p1.jpg";
import p2 from "@/assets/p2.jpg";

export const Route = createFileRoute("/perfumes")({
  head: () => ({ meta: [{ title: "العطور الخليجية | مجموعة هنداوي" }, { name: "description", content: "عطور خليجية أصلية من أشهر دور العطور — لطافة، أرماف، رصاصي، أفنان." }] }),
  component: PerfumesPage,
});

const houses = ["لطافة", "أفنان", "أرماف", "رصاصي", "فرنش أفينو", "خداج", "أحمد المغربي", "ريف"];
const cats = [
  { t: "رجالي", s: "Men | Erkek", img: p1 },
  { t: "نسائي", s: "Women | Kadin", img: p2 },
  { t: "رجالي & نسائي", s: "Unisex | Unisex", img: p1 },
];
const bestOf = ["Lattafa", "Afnan", "Armaf", "Rasasi"];
const packages = ["Lattafa", "AFNAN", "ARMAF", "Rasasi", "KHADLAJ", "باقة مختارة"];
const newArrivals = [
  { n: "Ahmed Al Maghribi", ar: "أحمد المغربي" },
  { n: "Reef", ar: "ريف" },
  { n: "Zimaya", ar: "زمايا" },
  { n: "Dakhooni Collection", ar: "دخوني كوليكشن" },
  { n: "Laverne Collection", ar: "لافيرن كوليكشن" },
  { n: "Dar Misk", ar: "دار مسك" },
];

function PerfumesPage() {
  return (
    <div className="min-h-screen bg-cream">
      <SiteHeader active="العطور" />

      {/* Hero */}
      <section className="w-full">
        <div className="relative overflow-hidden bg-navy-deep">
          <img src={hero} alt="عطور خليجية أصلية" className="w-full h-[60vh] min-h-[480px] max-h-[680px] object-cover opacity-95" />
          <div className="absolute inset-0 bg-gradient-to-l from-navy-deep/70 via-navy-deep/20 to-transparent" />
          <div className="absolute inset-0 flex items-center">
            <div className="w-full max-w-7xl mx-auto px-6 md:px-16 text-cream text-right">
              <h1 className="text-5xl md:text-7xl font-bold text-cream">عطور خليجية أصلية</h1>
              <p className="text-3xl md:text-4xl mt-4 text-gold font-semibold">من الخليج إلى عالمك</p>
              <div className="mt-8 flex gap-3 justify-end">
                <button className="px-7 py-3 rounded-lg bg-[oklch(0.55_0.16_150)] text-white font-medium hover:opacity-90">صمم هديتك</button>
                <button className="px-7 py-3 rounded-lg bg-gold text-navy-deep font-medium hover:opacity-90">اكتشف العطور</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Houses */}
      <section className="max-w-7xl mx-auto px-4 mt-8">
        <div className="bg-white rounded-2xl border border-border p-6 shadow-sm">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Crown className="size-5 text-gold" />
            <h2 className="text-xl font-bold text-navy">أشهر دور العطور</h2>
            <Crown className="size-5 text-gold" />
          </div>
          <div className="relative px-8">
            <button className="absolute right-0 top-1/2 -translate-y-1/2 size-9 rounded-full bg-white shadow border border-border grid place-items-center"><ChevronRight className="size-5 text-navy" /></button>
            <button className="absolute left-0 top-1/2 -translate-y-1/2 size-9 rounded-full bg-white shadow border border-border grid place-items-center"><ChevronLeft className="size-5 text-navy" /></button>
            <div className="grid grid-cols-3 md:grid-cols-8 gap-3">
              {houses.map((h, i) => (
                <div key={h} className="border border-border rounded-xl py-3 px-2 text-center hover:border-gold transition cursor-pointer">
                  <div className="aspect-square w-full overflow-hidden rounded-md" style={{ backgroundImage: `url(${housesRow})`, backgroundSize: `${houses.length * 100}% 100%`, backgroundPosition: `${(i / (houses.length - 1)) * 100}% center`, backgroundRepeat: 'no-repeat' }} />
                  <p className="text-xs text-navy mt-2 font-medium">{h}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="max-w-7xl mx-auto px-4 mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
        {cats.map(c => (
          <article key={c.t} className="bg-white rounded-2xl border border-border p-6 flex items-center gap-4 shadow-sm">
            <img src={c.img} alt={c.t} loading="lazy" className="size-28 object-contain" />
            <div className="flex-1 text-right">
              <h3 className="text-2xl font-bold text-navy">{c.t}</h3>
              <p className="text-xs text-muted-foreground mt-1">{c.s}</p>
              <button className="mt-3 bg-navy text-cream px-5 py-2 rounded-lg text-sm hover:bg-navy-deep">تسوق الآن</button>
            </div>
          </article>
        ))}
      </section>

      {/* Best of + Design your own */}
      <section className="max-w-7xl mx-auto px-4 mt-6 grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="lg:col-span-2 bg-white rounded-2xl border border-border p-6 shadow-sm">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Crown className="size-5 text-gold" />
            <h2 className="text-xl font-bold text-navy">الأكثر مبيعاً حسب الدار</h2>
            <Crown className="size-5 text-gold" />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {bestOf.map((b, i) => (
              <div key={b} className="relative rounded-xl overflow-hidden border border-border bg-gradient-to-b from-cream to-white p-3">
                <p className="text-[10px] text-muted-foreground text-center">Best of</p>
                <p className="text-lg text-navy font-bold text-center" style={{ fontFamily: 'var(--font-display)' }}>{b}</p>
                <img src={i % 2 ? p2 : p1} alt={b} loading="lazy" className="h-28 mx-auto object-contain my-2" />
                <button className="w-full bg-navy text-cream rounded-md py-2 text-xs">تسوق الآن</button>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-white rounded-2xl border border-border p-6 shadow-sm text-right">
          <h3 className="text-2xl text-navy font-bold">صمم هديتك بنفسك</h3>
          <p className="text-xs text-muted-foreground mt-2">اختر من كل الأقسام وصمم هديتك المثالية</p>
          <div className="grid grid-cols-3 gap-3 mt-5">
            {[{ I: Sparkles, l: "العطور" }, { I: Watch, l: "الساعات" }, { I: Gift, l: "الهدايا" }, { I: Glasses, l: "الموضة" }, { I: Headphones, l: "سماعات" }, { I: BookOpen, l: "الكتب" }].map(({ I, l }) => (
              <div key={l} className="border border-border rounded-lg py-3 text-center hover:border-gold cursor-pointer">
                <I className="size-6 text-navy mx-auto" />
                <p className="text-xs text-navy mt-1.5">{l}</p>
              </div>
            ))}
          </div>
          <button className="w-full mt-5 bg-[oklch(0.55_0.16_150)] text-white rounded-lg py-3 text-sm font-medium flex items-center justify-center gap-2"><Gift className="size-4" /> أبدأ تصميم هديتك</button>
        </div>
      </section>

      {/* HENDAWI exclusive packages */}
      <section className="max-w-7xl mx-auto px-4 mt-6">
        <div className="bg-white rounded-2xl border border-border p-6 shadow-sm">
          <div className="flex items-center justify-center gap-3 mb-6">
            <h2 className="text-xl font-bold text-navy">باقات عطور HENDAWI الحصرية</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-6 gap-3">
            {packages.map((b, i) => (
              <div key={b} className={`rounded-xl p-3 text-center ${["bg-blue-50","bg-amber-50","bg-stone-50","bg-blue-50","bg-purple-50","bg-rose-50"][i]}`}>
                <img src={i % 2 ? p2 : p1} alt={b} loading="lazy" className="h-24 mx-auto object-contain" />
                <p className="text-navy font-semibold text-sm mt-2">{b}</p>
                <button className="mt-2 w-full bg-white border border-border rounded-md py-1.5 text-[11px] text-navy">اكتشف الباقات</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* New arrivals */}
      <section className="max-w-7xl mx-auto px-4 mt-6">
        <div className="bg-white rounded-2xl border border-border p-6 shadow-sm">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Crown className="size-5 text-gold" />
            <h2 className="text-xl font-bold text-navy">وصلت حديثاً</h2>
            <Crown className="size-5 text-gold" />
          </div>
          <img src={brands} alt="وصلت حديثاً" loading="lazy" className="w-full rounded-xl mb-3" />
          <div className="grid grid-cols-2 md:grid-cols-6 gap-3 text-center">
            {newArrivals.map(n => (
              <div key={n.n}>
                <span className="inline-block text-[10px] bg-[oklch(0.55_0.16_150)] text-white px-2 py-0.5 rounded">جديد</span>
                <p className="text-navy font-semibold text-xs mt-1.5" dir="ltr">{n.n}</p>
                <p className="text-muted-foreground text-[11px]">{n.ar}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Suggest + wholesale */}
      <section className="max-w-7xl mx-auto px-4 mt-6 grid md:grid-cols-2 gap-4">
        <div className="bg-[oklch(0.95_0.04_150)] rounded-2xl p-6 text-right border border-border">
          <h3 className="text-xl font-bold text-navy">اقترح عطرك المفضل</h3>
          <p className="text-xs text-muted-foreground mt-2">لم تجد عطرك؟ أرسل لنا اسم العطر وصيغته وسنقوم بالبحث عن أفضل الأسعار المتوفرة</p>
          <button className="mt-4 bg-[oklch(0.55_0.16_150)] text-white rounded-lg px-6 py-2.5 text-sm">اطلب عطرك الآن</button>
        </div>
        <div className="bg-cream rounded-2xl p-6 text-right border border-gold/30">
          <h3 className="text-xl font-bold text-navy">تاجر جملة؟</h3>
          <p className="text-xs text-muted-foreground mt-2">سجل الآن للحصول على كود خاص بأسعار الجملة وطلبات بكميات كبيرة</p>
          <button className="mt-4 bg-gold text-navy-deep rounded-lg px-6 py-2.5 text-sm font-semibold">اطلب كود الجملة</button>
        </div>
      </section>

      {/* Features */}
      <section className="max-w-7xl mx-auto px-4 mt-8">
        <div className="bg-white rounded-2xl border border-border p-5 grid grid-cols-2 md:grid-cols-5 gap-4 text-sm">
          {[
            { I: ShieldCheck, t: "منتجات أصلية 100%" }, { I: Gift, t: "تغليف فاخر" },
            { I: Truck, t: "شحن سريع وآمن" }, { I: Support, t: "دعم عملاء مميز" },
            { I: Lock, t: "دفع آمن وموثوق" },
          ].map(({ I, t }) => (
            <div key={t} className="flex items-center gap-2 text-navy"><I className="size-5 text-gold" />{t}</div>
          ))}
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
