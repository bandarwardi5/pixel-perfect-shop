import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader, SiteFooter } from "@/components/SiteChrome";
import { Plane, MapPin, Package, ShieldCheck, Building2, Clock, FileText, Calculator, Send, Star, ArrowLeftRight, Box } from "lucide-react";
import hero from "@/assets/hero-shipping.jpg";
import landmarksFrom from "@/assets/landmarks-from.jpg";
import landmarksTo from "@/assets/landmarks-to.jpg";

export const Route = createFileRoute("/shipping")({
  head: () => ({ meta: [{ title: "الشحن الدولي | مجموعة هنداوي" }, { name: "description", content: "شحن جوي سريع وآمن من الصين وتركيا إلى العالم." }] }),
  component: ShippingPage,
});

const fromCountries = [
  { n: "الصين", flag: "🇨🇳" },
  { n: "تركيا", flag: "🇹🇷" },
];
const toCountries = [
  { n: "ليبيا", flag: "🇱🇾" }, { n: "مصر", flag: "🇪🇬" }, { n: "تونس", flag: "🇹🇳" }, { n: "سوريا", flag: "🇸🇾" },
  { n: "الأردن", flag: "🇯🇴" }, { n: "الخليج", flag: "🟢" }, { n: "أوروبا", flag: "🇪🇺" },
];
const info = [
  { I: Plane, t: "شحن جوي سريع", s: "توصيل خلال 3 إلى 7 أيام" },
  { I: ShieldCheck, t: "أمان كامل", s: "حماية شحنتك من الاستلام حتى التسليم" },
  { I: MapPin, t: "تتبع الشحنة", s: "متابعة مستمرة لحالة الشحنة" },
  { I: Building2, t: "استلام في إسطنبول", s: "استلام من مكتبنا في إسطنبول" },
  { I: Package, t: "تسليم في ليبيا - طرابلس", s: "تسليم مباشر من مكتبنا في طرابلس" },
];
const steps = [
  { n: 1, I: FileText, t: "تعبئة طلب", s: "عرض السعر" },
  { n: 2, I: Building2, t: "استلام البضاعة", s: "في مكتبنا بإسطنبول" },
  { n: 3, I: Plane, t: "شحن جوي سريع", s: "إلى الوجهة" },
  { n: 4, I: Box, t: "تسليم في طرابلس", s: "من مكتبنا مباشرة" },
];

function ShippingPage() {
  return (
    <div className="min-h-screen bg-cream">
      <SiteHeader active="الشحن" />

      {/* Hero */}
      <section className="w-full bg-navy-deep">
        <div className="max-w-7xl mx-auto px-4 md:px-8 grid md:grid-cols-2 items-center gap-8 py-10">
          <div className="text-right text-cream">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">اشحن بضاعتك<br /><span className="text-cream/90">بسرعـة وأمـان مـن </span><span className="text-red-500">الصين</span><span className="text-cream/90"> وتركيا إلى العالم</span></h1>
            <p className="mt-6 text-cream/80 text-sm leading-relaxed max-w-md mr-auto">شحن جوي احترافي إلى ليبيا، مصر، تونس، سوريا، الأردن، الخليج وأوروبا — مع إمكانية الشحن بالعكس إلى تركيا.</p>
            <div className="mt-6 inline-flex items-center gap-2 border border-gold rounded-lg px-5 py-3 text-gold text-sm">
              <Plane className="size-4" /> شحن جوي سريع خلال 3 - 7 أيام
            </div>
          </div>
          <img src={hero} alt="شحن دولي" className="w-full rounded-2xl object-cover h-[360px]" />
        </div>
      </section>

      {/* Countries grid */}
      <section className="max-w-7xl mx-auto px-4 mt-6 grid md:grid-cols-[260px,1fr] gap-4">
        <div className="bg-navy text-cream rounded-2xl p-5 border-2 border-gold/40">
          <h3 className="text-center font-bold mb-4">الدول الرئيسية (من)</h3>
          <div className="grid grid-cols-2 gap-3">
            {fromCountries.map((c, i) => (
              <div key={c.n} className="bg-white rounded-xl p-3 text-center text-navy">
                <div className="text-3xl">{c.flag}</div>
                <div className="aspect-square rounded my-2" style={{ backgroundImage: `url(${landmarksFrom})`, backgroundSize: `${fromCountries.length * 100}% 100%`, backgroundPosition: `${(i / (fromCountries.length - 1)) * 100}% center`, backgroundRepeat: 'no-repeat' }} />
                <p className="text-sm font-semibold">{c.n}</p>
              </div>
            ))}
          </div>
          <div className="flex items-center justify-center gap-1.5 mt-4 text-gold text-xs">
            <ArrowLeftRight className="size-3.5" /> ذهاب وإياب
          </div>
        </div>
        <div className="bg-navy text-cream rounded-2xl p-5 border-2 border-gold/40">
          <h3 className="text-center font-bold mb-4">الدول المستهدفة (إلى)</h3>
          <div className="grid grid-cols-4 md:grid-cols-7 gap-3">
            {toCountries.map((c, i) => (
              <div key={c.n} className="bg-white rounded-xl p-2 text-center text-navy">
                <div className="text-2xl">{c.flag}</div>
                <div className="aspect-square rounded my-1.5" style={{ backgroundImage: `url(${landmarksTo})`, backgroundSize: `${toCountries.length * 100}% 100%`, backgroundPosition: `${(i / (toCountries.length - 1)) * 100}% center`, backgroundRepeat: 'no-repeat' }} />
                <p className="text-xs font-semibold">{c.n}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 mt-6 flex justify-center">
        <button className="border border-gold text-navy bg-white rounded-full px-6 py-2.5 text-sm font-semibold flex items-center gap-2"><Box className="size-4 text-gold" /> ابدأ الشحن من هنا</button>
      </div>

      {/* Quote form + info */}
      <section className="max-w-7xl mx-auto px-4 mt-6 grid lg:grid-cols-2 gap-4">
        <div className="bg-white rounded-2xl border border-border p-6 shadow-sm">
          <div className="flex items-center justify-center gap-2 mb-5">
            <Calculator className="size-5 text-gold" />
            <h3 className="text-navy font-bold">احصل على أفضل <span className="text-gold">سعر</span> شحن خلال دقائق</h3>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {[
              { I: MapPin, l: "(من) الدولة", h: "أختر الدولة" },
              { I: ShieldCheck, l: "(إلى) الدولة", h: "أختر الدولة" },
              { I: ArrowLeftRight, l: "اتجاه الشحن", h: "أختر الاتجاه" },
              { I: Package, l: "نوع البضاعة", h: "أختر نوع البضاعة" },
              { I: Box, l: "الوزن التقديري (كغ)", h: "أدخل الوزن" },
              { I: ShieldCheck, l: "هل البضاعة ماركة؟", h: "أختر" },
              { I: Calculator, l: "قيمة الشحنة (USD)", h: "أدخل قيمة الشحنة" },
              { I: FileText, l: "ملاحظات إضافية (اختياري)", h: "اكتب أي معلومات إضافية" },
            ].map(({ I, l, h }) => (
              <div key={l} className="border border-border rounded-lg p-2.5 flex items-center gap-2">
                <I className="size-4 text-gold shrink-0" />
                <div className="flex-1 text-right">
                  <p className="text-[11px] text-navy font-semibold">{l}</p>
                  <p className="text-[10px] text-muted-foreground">{h}</p>
                </div>
              </div>
            ))}
          </div>
          <button className="w-full mt-5 bg-navy text-cream rounded-lg py-3.5 text-sm font-semibold flex items-center justify-center gap-2"><Send className="size-4 text-gold" /> اطلب عرض سعر الآن</button>
          <div className="flex items-center justify-between text-[10px] text-muted-foreground mt-3">
            <span className="flex items-center gap-1"><Star className="size-3 text-gold" /> نخدم مئات العملاء يومياً</span>
            <span className="flex items-center gap-1"><Clock className="size-3" /> الرد خلال نفس اليوم</span>
            <span className="flex items-center gap-1"><ShieldCheck className="size-3" /> بياناتك آمنة 100%</span>
          </div>
        </div>

        <div className="bg-navy text-cream rounded-2xl p-6">
          <h3 className="text-center text-gold font-bold mb-2">معلومات عن الخدمة</h3>
          <div className="h-px w-16 bg-gold/40 mx-auto mb-5" />
          <ul className="space-y-4">
            {info.map(({ I, t, s }) => (
              <li key={t} className="flex items-center justify-end gap-4 border-b border-cream/10 pb-3">
                <div className="text-right">
                  <p className="font-semibold">{t}</p>
                  <p className="text-cream/70 text-xs mt-0.5">{s}</p>
                </div>
                <div className="size-11 rounded-lg bg-cream/10 grid place-items-center text-gold"><I className="size-5" /></div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Steps */}
      <section className="max-w-7xl mx-auto px-4 mt-10">
        <div className="flex items-center justify-center gap-3 mb-8">
          <span className="h-px w-12 bg-gold/40" />
          <h2 className="text-2xl font-bold text-navy">كيف تتم عملية الشحن؟</h2>
          <span className="h-px w-12 bg-gold/40" />
        </div>
        <div className="flex items-center justify-between gap-4" dir="ltr">
          {steps.map((st, i) => (
            <div key={st.n} className="flex items-center gap-3 flex-1">
              <div className="text-center flex-1">
                <div className="relative size-20 mx-auto">
                  <div className="size-20 rounded-full bg-navy grid place-items-center text-gold mx-auto"><st.I className="size-8" /></div>
                  <span className="absolute -top-1 -right-1 size-7 rounded-full bg-gold text-navy-deep grid place-items-center text-sm font-bold">{st.n}</span>
                </div>
                <p className="text-navy text-sm font-semibold mt-3">{st.t}</p>
                <p className="text-muted-foreground text-xs">{st.s}</p>
              </div>
              {i < steps.length - 1 && <div className="h-px w-8 bg-gold/40 hidden md:block" />}
            </div>
          ))}
        </div>
      </section>

      {/* Contact bar */}
      <section className="max-w-7xl mx-auto px-4 mt-10">
        <div className="bg-navy text-cream rounded-2xl p-6 relative overflow-hidden">
          <div className="text-center">
            <h3 className="text-gold text-xl font-bold">تواصل معنا</h3>
            <p className="text-cream/70 text-sm mt-1">فريقنا جاهز للرد على جميع استفساراتك</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
            {[{ t: "واتساب", s: "+90 501 000 03 10" }, { t: "اتصال مباشر", s: "+90 501 000 03 10" }, { t: "البريد الإلكتروني", s: "info@hendawigroup.com" }, { t: "موقعنا", s: "إسطنبول - تركيا" }].map(c => (
              <div key={c.t} className="text-right">
                <p className="text-gold text-sm font-semibold">{c.t}</p>
                <p className="text-cream/80 text-xs mt-1" dir="ltr">{c.s}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom features */}
      <section className="max-w-7xl mx-auto px-4 mt-6 mb-8">
        <div className="bg-white rounded-2xl border border-border p-5 grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
          {[{ I: Star, t: "خبرة في الشحن الدولي", s: "سنوات من الخبرة في مجال الشحن" }, { I: Plane, t: "شركات طيران موثوقة", s: "تعاون مع أكبر شركات الطيران" }, { I: Calculator, t: "أسعار تنافسية", s: "أفضل الأسعار في السوق" }, { I: ShieldCheck, t: "خدمة عملاء ممتازة", s: "دعم سريع ومتواصل" }].map(({ I, t, s }) => (
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
