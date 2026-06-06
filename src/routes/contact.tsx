import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader, SiteFooter } from "@/components/SiteChrome";
import { Phone, Mail, MapPin, MessageCircle, Clock, Send } from "lucide-react";
import { useState, type FormEvent } from "react";

export const Route = createFileRoute("/contact")({
  head: () => ({ meta: [{ title: "تواصل معنا | مجموعة هنداوي" }] }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);
  const onSubmit = (e: FormEvent) => { e.preventDefault(); setSent(true); };

  return (
    <div className="min-h-screen bg-cream">
      <SiteHeader active="تواصل معنا" />
      <section className="bg-navy-deep text-cream py-16 text-center">
        <h1 className="text-4xl md:text-5xl font-bold">تواصل معنا</h1>
        <p className="mt-3 text-cream/70">نحن هنا لخدمتك على مدار الساعة</p>
      </section>

      <main className="max-w-7xl mx-auto px-4 py-12 grid lg:grid-cols-3 gap-6">
        <div className="lg:col-span-1 space-y-4">
          <InfoCard icon={Phone} title="اتصل بنا" lines={["+90 552 123 45 67", "+90 533 987 65 43"]} />
          <InfoCard icon={Mail} title="البريد الإلكتروني" lines={["info@hendawigroup.com", "support@hendawigroup.com"]} />
          <InfoCard icon={MapPin} title="العنوان" lines={["تركيا - إسطنبول", "حي الفاتح، شارع السلطان"]} />
          <InfoCard icon={Clock} title="ساعات العمل" lines={["السبت - الخميس: 9ص - 11م", "الجمعة: 2م - 11م"]} />
          <a href="https://wa.me/905521234567" target="_blank" rel="noreferrer" className="flex items-center gap-3 bg-[oklch(0.65_0.18_150)] text-white rounded-xl p-4 hover:opacity-90 transition">
            <MessageCircle className="size-6" />
            <div className="text-right flex-1">
              <p className="font-bold">واتساب</p>
              <p className="text-xs opacity-90">تواصل سريع ومباشر</p>
            </div>
          </a>
        </div>

        <div className="lg:col-span-2 bg-white rounded-2xl border border-border p-8">
          <h2 className="text-2xl font-bold text-navy mb-6 text-right">أرسل لنا رسالة</h2>
          {sent ? (
            <div className="bg-cream border border-gold/30 rounded-xl p-8 text-center">
              <div className="size-14 rounded-full bg-gold-gradient mx-auto grid place-items-center text-navy-deep mb-3"><Send className="size-6" /></div>
              <p className="text-navy font-bold text-lg">تم إرسال رسالتك بنجاح</p>
              <p className="text-muted-foreground text-sm mt-2">سنرد عليك في أقرب وقت ممكن</p>
              <button onClick={() => setSent(false)} className="mt-4 text-sm text-navy hover:text-gold transition">إرسال رسالة أخرى</button>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="space-y-4 text-right">
              <div className="grid md:grid-cols-2 gap-4">
                <Field label="الاسم الكامل" type="text" />
                <Field label="رقم الهاتف" type="tel" />
              </div>
              <Field label="البريد الإلكتروني" type="email" />
              <Field label="الموضوع" type="text" />
              <div>
                <label className="block text-sm text-navy mb-2 font-medium">الرسالة</label>
                <textarea required rows={5} className="w-full bg-cream/50 border border-border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-gold/40" />
              </div>
              <button type="submit" className="bg-navy text-cream px-8 py-3 rounded-lg hover:bg-navy-deep transition font-medium flex items-center gap-2 mr-auto">
                إرسال <Send className="size-4" />
              </button>
            </form>
          )}
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}

function InfoCard({ icon: Icon, title, lines }: { icon: typeof Phone; title: string; lines: string[] }) {
  return (
    <div className="bg-white rounded-xl border border-border p-5 flex gap-4 text-right">
      <div className="size-11 rounded-lg bg-cream border border-gold/30 grid place-items-center text-gold shrink-0"><Icon className="size-5" /></div>
      <div className="flex-1">
        <h3 className="text-navy font-bold mb-1">{title}</h3>
        {lines.map((l) => <p key={l} className="text-sm text-navy/70">{l}</p>)}
      </div>
    </div>
  );
}

function Field({ label, type }: { label: string; type: string }) {
  return (
    <div>
      <label className="block text-sm text-navy mb-2 font-medium">{label}</label>
      <input required type={type} className="w-full bg-cream/50 border border-border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-gold/40" />
    </div>
  );
}
