import { Link } from "@tanstack/react-router";
import {
  Search, Heart, User, ShoppingCart, Headphones, Menu, Truck, ShieldCheck,
  Globe, Package, Phone, Mail, MapPin, Facebook, Instagram, Youtube, Crown, MessageCircle,
} from "lucide-react";

const nav = [
  { label: "الرئيسية", to: "/" },
  { label: "العطور", to: "/perfumes" },
  { label: "الساعات", to: "/watches" },
  { label: "الإلكترونيات", to: "/" },
  { label: "الكتب المحاسبية", to: "/books" },
  { label: "الهدايا", to: "/gifts" },
  { label: "الشحن", to: "/shipping" },
  { label: "من نحن", to: "/" },
  { label: "تواصل معنا", to: "/" },
];

export function SiteHeader({ active }: { active?: string }) {
  return (
    <header className="bg-white border-b border-border">
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

      <div className="max-w-7xl mx-auto px-4 pb-4 flex items-center gap-4">
        <button className="bg-navy text-cream px-5 py-2.5 rounded-lg flex items-center gap-2 text-sm font-medium">
          <Menu className="size-4" /> الأقسام
        </button>
        <ul className="flex items-center gap-7 text-sm overflow-x-auto whitespace-nowrap text-navy/80">
          {nav.map((c) => {
            const isActive = active === c.label;
            return (
              <li key={c.label} className={`relative pb-2 ${isActive ? "text-navy font-semibold" : ""}`}>
                <Link to={c.to} className="hover:text-navy">{c.label}</Link>
                {isActive && <span className="absolute bottom-0 right-0 left-0 h-0.5 bg-gold-gradient rounded-full" />}
              </li>
            );
          })}
        </ul>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <>
      <footer className="bg-navy-deep text-cream/85 mt-10">
        <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-4 gap-10">
          <div>
            <Logo light />
            <div className="flex items-center gap-3 mt-4 text-cream/70 text-sm">
              <span>Luxury</span><span className="text-gold">·</span>
              <span>Quality</span><span className="text-gold">·</span>
              <span>Trust</span>
            </div>
            <div className="flex items-center gap-3 mt-5 text-cream/70">
              <SocialIcon Icon={Facebook} /><SocialIcon Icon={Instagram} /><SocialIcon Icon={Youtube} />
            </div>
          </div>
          <FooterCol title="خدمة العملاء" items={["تواصل معنا", "الأسئلة الشائعة", "تتبع الطلب", "سياسة الإرجاع"]} />
          <FooterCol title="الأقسام" items={["العطور", "الساعات", "الإلكترونيات", "الكتب", "الهدايا", "الشحن الدولي"]} />
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
      <a href="#" className="fixed bottom-6 left-6 size-14 rounded-full bg-[oklch(0.65_0.18_150)] grid place-items-center shadow-lg hover:scale-105 transition z-50" aria-label="WhatsApp">
        <MessageCircle className="size-7 text-white" />
      </a>
    </>
  );
}

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link to="/" className="flex items-center gap-2.5">
      <div className="relative">
        <div className="size-12 rounded-lg bg-gold-gradient grid place-items-center text-navy-deep font-bold text-xl" style={{ fontFamily: 'var(--font-display)' }}>HG</div>
        <Crown className="size-3.5 text-gold absolute -top-1 right-1/2 translate-x-1/2" />
      </div>
      <div className={light ? "text-cream" : "text-navy"}>
        <p className="font-bold text-lg tracking-widest leading-none" style={{ fontFamily: 'var(--font-display)' }}>HENDAWI</p>
        <p className="text-[10px] tracking-[0.4em] text-gold mt-1">G R O U P</p>
      </div>
    </Link>
  );
}

function IconCol({ icon: Icon, label }: { icon: typeof Heart; label: string }) {
  return (
    <button className="flex flex-col items-center gap-1 text-xs hover:text-gold transition">
      <Icon className="size-5" /><span>{label}</span>
    </button>
  );
}
function SocialIcon({ Icon }: { Icon: typeof Facebook }) {
  return <a href="#" className="size-9 rounded-full border border-cream/20 grid place-items-center hover:border-gold hover:text-gold transition"><Icon className="size-4" /></a>;
}
function FooterCol({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <h4 className="text-gold font-bold mb-4">{title}</h4>
      <ul className="space-y-2.5 text-sm">{items.map(i => <li key={i} className="hover:text-gold cursor-pointer transition">{i}</li>)}</ul>
    </div>
  );
}
