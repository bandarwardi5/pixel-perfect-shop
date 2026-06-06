import { Heart, ShoppingCart, Star } from "lucide-react";
import type { Product } from "@/lib/catalog";
import { useShop } from "@/lib/shop";

export function ProductCard(p: Product) {
  const { addToCart, toggleWishlist, isWishlisted } = useShop();
  const wished = isWishlisted(p.id);
  return (
    <article className="bg-white rounded-xl border border-border overflow-hidden flex flex-col group hover:shadow-md transition">
      <div className="relative bg-cream/40 p-3 aspect-square">
        {p.badge && (
          <span className={`absolute top-2 right-2 z-10 text-[10px] font-bold px-2 py-1 rounded ${p.badgeColor === "navy" ? "bg-navy text-cream" : "bg-destructive text-white"}`}>
            {p.badge}
          </span>
        )}
        <button
          onClick={() => toggleWishlist(p)}
          className={`absolute top-2 left-2 z-10 size-8 rounded-full grid place-items-center border transition ${wished ? "bg-destructive/10 border-destructive text-destructive" : "bg-white/90 border-border text-navy/60 hover:text-destructive"}`}
          aria-label="المفضلة"
        >
          <Heart className={`size-4 ${wished ? "fill-current" : ""}`} />
        </button>
        <img src={p.img} alt={p.ar} loading="lazy" className="w-full h-full object-contain group-hover:scale-105 transition" />
      </div>
      <div className="p-3 text-right flex-1 flex flex-col">
        <p className="text-[11px] text-muted-foreground truncate">{p.name}</p>
        <h3 className="text-navy text-sm font-semibold mt-0.5 line-clamp-2 min-h-[40px]">{p.ar}</h3>
        <div className="flex items-center justify-end gap-0.5 mt-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} className={`size-3 ${i < p.rating ? "text-gold fill-gold" : "text-border"}`} />
          ))}
          <span className="text-[10px] text-muted-foreground mr-1">({p.reviews})</span>
        </div>
        <div className="mt-2 flex items-end justify-between gap-2">
          <button
            onClick={() => addToCart(p)}
            className="size-9 rounded-lg bg-navy text-cream grid place-items-center hover:bg-navy-deep transition"
            aria-label="أضف للسلة"
          >
            <ShoppingCart className="size-4" />
          </button>
          <div className="text-right">
            <p className="text-navy font-bold text-base leading-tight">{p.price} <span className="text-xs">₺</span></p>
            {p.old && <p className="text-[11px] text-muted-foreground line-through">{p.old} ₺</p>}
          </div>
        </div>
      </div>
    </article>
  );
}
