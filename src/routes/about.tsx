import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader, SiteFooter } from "@/components/SiteChrome";
import { Crown, ShieldCheck, Truck, Award, Users, Globe } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({ meta: [{ title: "من نحن | مجموعة هنداوي" }] }),
  component: AboutPage,
});

const values = [
  { icon: ShieldCheck, t: "الجودة والأصالة", s: "كل منتج لدينا أصلي 100% ومضمون" },
  { icon: Truck, t: "الشحن العالمي", s: "نوصل إلى أكثر من 220 دولة حول العالم" },
  { icon: Award, t: "خبرة سنوات", s: "أكثر من 15 سنة في عالم الفخامة" },
  { icon: Users, t: "خدمة العملاء", s: "فريق دعم متاح على مدار الساعة" },
];

function AboutPage() {
  return (
    <div className="min-h-screen bg-cream">
      <SiteHeader active="من نحن" />
      <section className="bg-navy-deep text-cream py-20 text-center relative overflow-hidden">
        <Crown className="size-10 text-gold mx-auto mb-4" />
        <h1 className="text-4xl md:text-5xl font-bold">مجموعة هنداوي</h1>
        <p className="text-gold-gradient text-xl mt-3 font-semibold">الفخامة في كل اختيار</p>
        <p className="max-w-2xl mx-auto mt-6 text-cream/80 px-4">
          منذ تأسيسنا، التزمنا بتقديم أرقى المنتجات من العطور والساعات والهدايا الفاخرة لعملائنا في جميع أنحاء العالم.
        </p>
      </section>

      <main className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-2xl border border-border p-8 text-right">
            <h2 className="text-2xl font-bold text-navy mb-3">رؤيتنا</h2>
            <p className="text-navy/80 leading-relaxed">أن نكون الوجهة الأولى للفخامة في الشرق الأوسط، نقدم تجربة تسوق استثنائية تجمع بين الأصالة والابتكار.</p>
          </div>
          <div className="bg-white rounded-2xl border border-border p-8 text-right">
            <h2 className="text-2xl font-bold text-navy mb-3">رسالتنا</h2>
            <p className="text-navy/80 leading-relaxed">نوفر لعملائنا منتجات أصلية بأعلى جودة من أرقى الماركات العالمية، مع خدمة شحن سريعة وآمنة إلى جميع دول العالم.</p>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-navy text-center mb-8">قيمنا</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {values.map(({ icon: Icon, t, s }) => (
            <div key={t} className="bg-white rounded-2xl border border-border p-6 text-center">
              <div className="size-14 mx-auto rounded-full bg-cream border border-gold/30 grid place-items-center text-gold mb-4"><Icon className="size-6" /></div>
              <h3 className="text-navy font-bold">{t}</h3>
              <p className="text-xs text-muted-foreground mt-2">{s}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-gradient-to-l from-navy to-navy-deep text-cream rounded-2xl p-10 text-center">
          <Globe className="size-10 text-gold mx-auto mb-3" />
          <h2 className="text-2xl font-bold">+220 دولة حول العالم</h2>
          <p className="text-cream/70 mt-2">نخدم عملاءنا في كل قارة بنفس مستوى الجودة والاهتمام</p>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
