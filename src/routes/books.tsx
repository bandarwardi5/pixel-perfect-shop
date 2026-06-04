import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader, SiteFooter } from "@/components/SiteChrome";
import { BookOpen, FileText, Download, Smartphone, Tag, Bookmark, ShieldCheck, Award, Truck, Headphones, Heart, ShoppingCart, FileType, Printer, Package } from "lucide-react";
import hero from "@/assets/hero-books.jpg";
import pdf from "@/assets/books-pdf.jpg";
import print from "@/assets/books-print.jpg";
import row from "@/assets/books-row.jpg";

export const Route = createFileRoute("/books")({
  head: () => ({ meta: [{ title: "الكتب المحاسبية | مجموعة هنداوي" }, { name: "description", content: "كتب محاسبية بصيغة PDF وورقية بجودة عالية." }] }),
  component: BooksPage,
});

const features = [
  { I: ShieldCheck, t: "مصادر موثوقة", s: "ومراجعة دقيقة" },
  { I: Award, t: "جودة عالية", s: "ومحتوى احترافي" },
  { I: Tag, t: "أسعار تنافسية", s: "وقيمة ممتازة" },
  { I: Truck, t: "توصيل سريع", s: "داخل وخارج بلدك" },
  { I: Headphones, t: "دعم فني", s: "مستمر" },
];
const cats = ["المحاسبة المالية", "المحاسبة الإدارية", "المراجعة والرقابة", "الضرائب والزكاة", "المعايير الدولية IFRS", "تحليل القوائم المالية"];
const products = [
  { t: "التحليل المالي القوائم المالية", price: 49 },
  { t: "المحاسبة المالية المتقدمة طبقاً للمعايير الدولية IFRS", price: 69 },
  { t: "المراجعة والرقابة الداخلية", price: 59 },
  { t: "المحاسبة الإدارية والتخطيط والرقابة واتخاذ القرار", price: 49 },
  { t: "الضرائب والزكاة في المملكة العربية السعودية", price: 39 },
];

function BooksPage() {
  return (
    <div className="min-h-screen bg-cream">
      <SiteHeader active="الكتب المحاسبية" />

      {/* Hero */}
      <section className="w-full bg-cream">
        <div className="relative">
          <img src={hero} alt="مكتبة الكتب المحاسبية" className="w-full h-[50vh] min-h-[420px] max-h-[560px] object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-cream via-cream/40 to-transparent" />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
            <div className="bg-cream/80 backdrop-blur-sm rounded-2xl p-8 max-w-3xl">
              <BookOpen className="size-10 text-[oklch(0.4_0.15_150)] mx-auto mb-2" />
              <h1 className="text-4xl md:text-6xl font-bold text-navy" style={{ fontFamily: 'var(--font-display)' }}>HENDAWI</h1>
              <p className="text-2xl text-gold mt-1 tracking-widest">GROUP</p>
              <p className="text-lg md:text-xl text-[oklch(0.35_0.12_150)] font-bold mt-3">مكتبة متخصصة في الكتب المحاسبية</p>
              <p className="text-sm text-muted-foreground mt-1">للمعرفة التي تصنع الفرق</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features strip */}
      <section className="max-w-7xl mx-auto px-4 mt-4">
        <div className="bg-white rounded-2xl border border-border p-5 grid grid-cols-2 md:grid-cols-5 gap-4">
          {features.map(({ I, t, s }) => (
            <div key={t} className="flex items-center gap-3">
              <div className="size-10 rounded-lg bg-cream border border-gold/30 grid place-items-center text-gold shrink-0"><I className="size-5" /></div>
              <div className="text-right"><p className="text-navy text-xs font-semibold">{t}</p><p className="text-muted-foreground text-[10px]">{s}</p></div>
            </div>
          ))}
        </div>
      </section>

      {/* Two cards */}
      <section className="max-w-7xl mx-auto px-4 mt-6 grid md:grid-cols-2 gap-4">
        <div className="bg-[oklch(0.97_0.02_240)] rounded-2xl border border-border p-6 text-right">
          <div className="flex items-start justify-end gap-3">
            <div className="text-right">
              <h3 className="text-2xl text-navy font-bold">الكتب الرقمية (PDF)</h3>
              <p className="text-xs text-muted-foreground mt-1">سهولة التحميل • تصفح فوري • متاحة دائماً</p>
            </div>
            <div className="size-16 rounded-full bg-[oklch(0.45_0.15_240)] grid place-items-center text-white text-xs font-bold">PDF</div>
          </div>
          <img src={pdf} alt="PDF" loading="lazy" className="w-full h-48 object-contain my-4" />
          <ul className="space-y-2 text-sm text-navy">
            {[[Download, "تحميل فوري بعد الشراء"], [Smartphone, "متوافقة مع جميع الأجهزة"], [BookOpen, "تصفح سريع داخل الكتاب"], [Bookmark, "أسعار مناسبة وتحديث مستمر"]].map(([I, t]: any) => (
              <li key={t} className="flex items-center justify-end gap-2">{t} <I className="size-4 text-[oklch(0.45_0.15_240)]" /></li>
            ))}
          </ul>
          <button className="w-full mt-5 bg-[oklch(0.25_0.1_240)] text-white py-3 rounded-lg text-sm font-semibold">تصفح الكتب الرقمية</button>
        </div>
        <div className="bg-[oklch(0.96_0.03_70)] rounded-2xl border border-border p-6 text-right">
          <div className="flex items-start justify-end gap-3">
            <div className="text-right">
              <h3 className="text-2xl text-navy font-bold">الكتب الورقية</h3>
              <p className="text-xs text-muted-foreground mt-1">جودة عالية • طباعة • توصيل سريع</p>
            </div>
            <div className="size-16 rounded-full bg-[oklch(0.55_0.12_75)] grid place-items-center text-white"><BookOpen className="size-7" /></div>
          </div>
          <img src={print} alt="ورقي" loading="lazy" className="w-full h-48 object-contain my-4" />
          <ul className="space-y-2 text-sm text-navy">
            {[[Award, "طباعة عالية الجودة"], [Truck, "شحن سريع لكافة المناطق"], [Package, "تغليف آمن ومتين"], [BookOpen, "مادة علمية معتمدة"]].map(([I, t]: any) => (
              <li key={t} className="flex items-center justify-end gap-2">{t} <I className="size-4 text-gold" /></li>
            ))}
          </ul>
          <button className="w-full mt-5 bg-[oklch(0.55_0.12_75)] text-white py-3 rounded-lg text-sm font-semibold">تصفح الكتب الورقية</button>
        </div>
      </section>

      {/* Formats / Payment */}
      <section className="max-w-7xl mx-auto px-4 mt-6 grid md:grid-cols-2 gap-4">
        <div className="bg-white rounded-2xl border border-border p-5">
          <p className="text-navy font-bold text-sm mb-3 text-right">نوفر الكتب بصيغ متعددة</p>
          <div className="flex justify-around items-center text-center">
            {[{ I: FileType, t: "ملف PDF" }, { I: FileType, t: "ملف EPUB" }, { I: Printer, t: "ورقي" }, { I: Package, t: "جزمة متكاملة (PDF + ورقي)" }].map(({ I, t }) => (
              <div key={t}><div className="size-12 mx-auto rounded-lg bg-cream grid place-items-center text-gold"><I className="size-6" /></div><p className="text-[11px] text-navy mt-2">{t}</p></div>
            ))}
          </div>
        </div>
        <div className="bg-white rounded-2xl border border-border p-5">
          <p className="text-navy font-bold text-sm mb-3 text-right">دفع آمن وموثوق</p>
          <div className="flex justify-around items-center text-center">
            {[{ I: ShieldCheck, t: "طرق دفع آمنة ومتنوعة" }, { I: Package, t: "إرجاع سهل ضمن سياسة واضحة" }, { I: Award, t: "ضمان جودة على جميع الكتب" }, { I: Headphones, t: "دعم فني عبر جميع الوسائل" }].map(({ I, t }) => (
              <div key={t}><div className="size-12 mx-auto rounded-lg bg-cream grid place-items-center text-gold"><I className="size-6" /></div><p className="text-[11px] text-navy mt-2 max-w-[100px]">{t}</p></div>
            ))}
          </div>
        </div>
      </section>

      {/* Products + categories */}
      <section className="max-w-7xl mx-auto px-4 mt-6 grid lg:grid-cols-[1fr,260px] gap-4">
        <div className="bg-white rounded-2xl border border-border p-6">
          <h2 className="text-xl font-bold text-navy text-center mb-5">تصفح كتب المحاسبة</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
            {products.map((p, i) => (
              <div key={p.t} className="border border-border rounded-xl p-3">
                <div className="h-40 bg-cream rounded-lg overflow-hidden">
                  <img src={row} alt={p.t} loading="lazy" className="h-full w-full object-cover" style={{ objectPosition: `${(i * 20) + 10}% center` }} />
                </div>
                <p className="text-navy text-xs font-semibold mt-2 text-center leading-tight min-h-[36px]">{p.t}</p>
                <span className="block w-fit mx-auto text-[10px] bg-[oklch(0.45_0.15_240)] text-white px-2 py-0.5 rounded mt-1">PDF</span>
                <div className="flex items-center justify-between mt-2">
                  <Heart className="size-4 text-muted-foreground" />
                  <p className="text-navy font-bold text-xs">{p.price} ر.س</p>
                  <button className="size-7 rounded bg-[oklch(0.5_0.15_150)] text-white grid place-items-center"><ShoppingCart className="size-3.5" /></button>
                </div>
              </div>
            ))}
          </div>
        </div>
        <aside className="bg-navy text-cream rounded-2xl p-5">
          <h3 className="text-gold text-center font-bold mb-4">التصنيفات</h3>
          <ul className="space-y-2.5">
            {cats.map(c => (
              <li key={c} className="flex items-center justify-between text-xs bg-navy-deep/40 px-3 py-2.5 rounded-lg hover:bg-navy-deep cursor-pointer">
                <BookOpen className="size-3.5 text-gold" />
                <span>{c}</span>
              </li>
            ))}
          </ul>
          <button className="w-full mt-4 bg-gold text-navy-deep rounded-lg py-2 text-xs font-semibold">عرض المزيد ›</button>
        </aside>
      </section>

      {/* Bottom features dark */}
      <section className="max-w-7xl mx-auto px-4 mt-6 mb-8">
        <div className="bg-navy text-cream rounded-2xl p-6 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[{ I: ShieldCheck, t: "دفع آمن وموثوق", s: "جميع عمليات الدفع مشفرة وآمنة" }, { I: Download, t: "تحميل فوري", s: "احصل على الكتب مباشرة بعد الشراء" }, { I: Award, t: "جودة عالية محددثة", s: "محتوى احترافي من مصادر موثوقة" }, { I: BookOpen, t: "كتب عملية وتطبيقية", s: "تركز على التطبيق العملي والفهم العميق" }].map(({ I, t, s }) => (
            <div key={t} className="flex items-start gap-3">
              <div className="size-10 rounded-lg bg-cream/10 grid place-items-center text-gold shrink-0"><I className="size-5" /></div>
              <div className="text-right"><p className="text-cream font-semibold text-sm">{t}</p><p className="text-cream/70 text-[11px]">{s}</p></div>
            </div>
          ))}
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
