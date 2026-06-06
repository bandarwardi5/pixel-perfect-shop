import p1 from "@/assets/p1.jpg";
import p2 from "@/assets/p2.jpg";
import p3 from "@/assets/p3.jpg";
import p4 from "@/assets/p4.jpg";
import p5 from "@/assets/p5.jpg";
import p6 from "@/assets/p6.jpg";
import p7 from "@/assets/p7.jpg";

export type Product = {
  id: string;
  img: string;
  name: string;
  ar: string;
  price: number;
  old?: number;
  rating: number;
  reviews: number;
  badge?: string;
  badgeColor?: string;
  category: "perfumes" | "watches" | "electronics" | "books" | "gifts" | "beauty";
};

export const catalog: Product[] = [
  { id: "p1", img: p1, name: "Lattafa Khamrah", ar: "خمرة لطافة", price: 199, old: 249, rating: 4, reviews: 128, badge: "-20%", category: "perfumes" },
  { id: "p2", img: p2, name: "Armaf Club De Nuit", ar: "أرماف كلوب دي نويت", price: 219, old: 299, rating: 3, reviews: 97, badge: "-27%", category: "perfumes" },
  { id: "p3", img: p3, name: "Classic Date 41", ar: "ساعة كلاسيك 41", price: 41500, rating: 5, reviews: 84, badge: "جديد", badgeColor: "navy", category: "watches" },
  { id: "p4", img: p4, name: "Wireless Earbuds Pro 2", ar: "إيربودز برو 2", price: 1199, old: 1399, rating: 4, reviews: 156, badge: "-15%", category: "electronics" },
  { id: "p5", img: p5, name: "Luxury Handbag", ar: "حقيبة فاخرة", price: 449, old: 599, rating: 4, reviews: 73, badge: "-25%", category: "gifts" },
  { id: "p6", img: p6, name: "Financial Accounting", ar: "المحاسبة المالية", price: 69, old: 99, rating: 3, reviews: 56, badge: "-20%", category: "books" },
  { id: "p7", img: p7, name: "Hydrating Moisturizer", ar: "مرطب سيرافي", price: 79, old: 99, rating: 4, reviews: 112, badge: "-20%", category: "beauty" },
];

export const categoriesList = [
  { slug: "perfumes", label: "العطور", to: "/perfumes" as const },
  { slug: "watches", label: "الساعات", to: "/watches" as const },
  { slug: "electronics", label: "الإلكترونيات", to: "/electronics" as const },
  { slug: "books", label: "الكتب المحاسبية", to: "/books" as const },
  { slug: "gifts", label: "الهدايا", to: "/gifts" as const },
  { slug: "shipping", label: "الشحن الدولي", to: "/shipping" as const },
];
