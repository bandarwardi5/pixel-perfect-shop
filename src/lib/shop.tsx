import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import type { Product } from "./catalog";

type CartItem = Product & { qty: number };

type ShopState = {
  cart: CartItem[];
  wishlist: Product[];
  addToCart: (p: Product) => void;
  removeFromCart: (id: string) => void;
  updateQty: (id: string, qty: number) => void;
  clearCart: () => void;
  toggleWishlist: (p: Product) => void;
  isWishlisted: (id: string) => boolean;
};

const Ctx = createContext<ShopState | null>(null);

function load<T>(key: string, fallback: T): T {
  if (typeof window === "undefined") return fallback;
  try { const v = localStorage.getItem(key); return v ? JSON.parse(v) : fallback; }
  catch { return fallback; }
}

export function ShopProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [wishlist, setWishlist] = useState<Product[]>([]);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setCart(load("hg_cart", []));
    setWishlist(load("hg_wishlist", []));
    setHydrated(true);
  }, []);

  useEffect(() => { if (hydrated) localStorage.setItem("hg_cart", JSON.stringify(cart)); }, [cart, hydrated]);
  useEffect(() => { if (hydrated) localStorage.setItem("hg_wishlist", JSON.stringify(wishlist)); }, [wishlist, hydrated]);

  const value: ShopState = {
    cart, wishlist,
    addToCart: (p) => setCart((c) => {
      const i = c.find((x) => x.id === p.id);
      return i ? c.map((x) => x.id === p.id ? { ...x, qty: x.qty + 1 } : x) : [...c, { ...p, qty: 1 }];
    }),
    removeFromCart: (id) => setCart((c) => c.filter((x) => x.id !== id)),
    updateQty: (id, qty) => setCart((c) => c.map((x) => x.id === id ? { ...x, qty: Math.max(1, qty) } : x)),
    clearCart: () => setCart([]),
    toggleWishlist: (p) => setWishlist((w) => w.find((x) => x.id === p.id) ? w.filter((x) => x.id !== p.id) : [...w, p]),
    isWishlisted: (id) => wishlist.some((x) => x.id === id),
  };

  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

export function useShop() {
  const v = useContext(Ctx);
  if (!v) throw new Error("useShop outside ShopProvider");
  return v;
}
