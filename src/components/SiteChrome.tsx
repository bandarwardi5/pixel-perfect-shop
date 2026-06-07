import { Link, useNavigate } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import {
  Search, Heart, User, ShoppingCart, Headphones, Menu, Truck, ShieldCheck,
  Globe, Package, Phone, Mail, MapPin, Facebook, Instagram, Youtube, Crown, MessageCircle, X,
} from "lucide-react";
import { useShop } from "@/lib/shop";
import { categoriesList } from "@/lib/catalog";
import logoImg from "@/assets/logo-hendawi.png";

const nav = [
  { label: "الرئيسية", to: "/" as const },
  { label: "العطور", to: "/perfumes" as const },
  { label: "الساعات", to: "/watches" as const },
  { label: "الإلكترونيات", to: "/electronics" as const },
  { label: "الكتب المحاسبية", to: "/books" as const },
  { label: "الهدايا", to: "/gifts" as const },
  { label: "الشحن", to: "/shipping" as const },
  { label: "من نحن", to: "/about" as const },
  { label: "تواصل معنا", to: "/contact" as const },
];

export function SiteHeader({ active }: { active?: string }) {
  const navigate = useNavigate();
  const { cart, wishlist } = useShop();
  const [q, setQ] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const cartCount = cart.reduce((s, x) => s + x.qty, 0);

  const onSearch = (e: FormEvent) => {
    e.preventDefault();
    navigate({ to: "/search", search: { q } });
  };

  return (
    <header className="bg-white border-b border-border relative z-30">
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
        <form onSubmit={onSearch} className="flex-1 relative max-w-2xl">
          <input
            type="text"
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="ابحث عن منتج أو علامة تجارية..."
            className="w-full bg-secondary/60 rounded-lg pr-4 pl-14 py-3.5 text-sm outline-none focus:ring-2 focus:ring-gold/40 border border-border"
          />
          <button type="submit" className="absolute left-1 top-1 bottom-1 px-4 bg-navy text-cream rounded-md hover:bg-navy-deep transition">
            <Search className="size-5" />
          </button>
        </form>
        <nav className="flex items-center gap-6 text-navy">
          <IconLink to="/contact" icon={Headphones} label="تواصل معنا" />
          <IconLink to="/wishlist" icon={Heart} label="المفضلة" count={wishlist.length} />
          <IconLink to="/contact" icon={User} label="حسابي" />
          <IconLink to="/cart" icon={ShoppingCart} label="السلة" count={cartCount} />
        </nav>
      </div>

      <div className="max-w-7xl mx-auto px-4 pb-4 flex items-center gap-4 relative">
        <button
          onClick={() => setMenuOpen((v) => !v)}
          className="bg-navy text-cream px-5 py-2.5 rounded-lg flex items-center gap-2 text-sm font-medium hover:bg-navy-deep transition"
        >
          {menuOpen ? <X className="size-4" /> : <Menu className="size-4" />} الأقسام
        </button>
        {menuOpen && (
          <>
            <button onClick={() => setMenuOpen(false)} className="fixed inset-0 z-10" aria-hidden />
            <div className="absolute top-full right-4 mt-2 z-20 bg-white rounded-xl shadow-xl border border-border w-64 overflow-hidden">
              {categoriesList.map((c) => (
                <Link
                  key={c.slug}
                  to={c.to}
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center justify-between px-4 py-3 text-sm text-navy hover:bg-cream transition border-b border-border last:border-0"
                >
                  <span>{c.label}</span>
                  <span className="text-gold">←</span>
                </Link>
              ))}
            </div>
          </>
        )}
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
          <FooterCol title="خدمة العملاء" items={[
            { label: "تواصل معنا", to: "/contact" },
            { label: "الأسئلة الشائعة", to: "/about" },
            { label: "تتبع الطلب", to: "/cart" },
            { label: "سياسة الإرجاع", to: "/about" },
          ]} />
          <FooterCol title="الأقسام" items={[
            { label: "العطور", to: "/perfumes" },
            { label: "الساعات", to: "/watches" },
            { label: "الإلكترونيات", to: "/electronics" },
            { label: "الكتب", to: "/books" },
            { label: "الهدايا", to: "/gifts" },
            { label: "الشحن الدولي", to: "/shipping" },
          ]} />
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
      <a href="https://wa.me/905521234567" target="_blank" rel="noreferrer" className="fixed bottom-6 left-6 size-14 rounded-full bg-[oklch(0.65_0.18_150)] grid place-items-center shadow-lg hover:scale-105 transition z-50" aria-label="WhatsApp">
        <MessageCircle className="size-7 text-white" />
      </a>
    </>
  );
}

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link to="/" className="flex items-center gap-3">
      <img src={logoImg} alt="Hendawi Group" className="size-14 object-contain" />
      <div className={light ? "text-cream" : "text-navy"}>
        <p className="font-bold text-xl tracking-wider leading-none" style={{ fontFamily: 'var(--font-display)' }}>HENDAWI</p>
        <p className="text-[10px] tracking-[0.4em] text-gold mt-1">G R O U P</p>
      </div>
    </Link>
  );
}

function IconLink({ to, icon: Icon, label, count }: { to: string; icon: typeof Heart; label: string; count?: number }) {
  return (
    <Link to={to} className="relative flex flex-col items-center gap-1 text-xs hover:text-gold transition">
      <Icon className="size-5" />
      <span>{label}</span>
      {count != null && count > 0 && (
        <span className="absolute -top-1 -left-2 bg-gold text-navy-deep text-[10px] font-bold size-4 rounded-full grid place-items-center">{count}</span>
      )}
    </Link>
  );
}
function SocialIcon({ Icon }: { Icon: typeof Facebook }) {
  return <a href="#" className="size-9 rounded-full border border-cream/20 grid place-items-center hover:border-gold hover:text-gold transition"><Icon className="size-4" /></a>;
}
function FooterCol({ title, items }: { title: string; items: { label: string; to: string }[] }) {
  return (
    <div>
      <h4 className="text-gold font-bold mb-4">{title}</h4>
      <ul className="space-y-2.5 text-sm">
        {items.map((i) => (
          <li key={i.label}><Link to={i.to} className="hover:text-gold transition">{i.label}</Link></li>
        ))}
      </ul>
    </div>
  );
}
