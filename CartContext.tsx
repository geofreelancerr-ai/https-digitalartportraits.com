import type { ReactNode } from "react";
import { createContext, useContext, useEffect, useMemo, useState } from "react";

export type CartLine = { handle: string; quantity: number };

type CartContextValue = {
  lines: CartLine[];
  totalQuantity: number;
  addArtwork: (handle: string) => void;
  updateQuantity: (handle: string, quantity: number) => void;
  removeArtwork: (handle: string) => void;
  clearCart: () => void;
};

const CartContext = createContext<CartContextValue | undefined>(undefined);
const STORAGE_KEY = "digital-art-portraits-cart";

export function CartProvider({ children }: { children: ReactNode }) {
  const [lines, setLines] = useState<CartLine[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      const parsed = saved ? JSON.parse(saved) : [];
      return Array.isArray(parsed) ? parsed.filter((line): line is CartLine => typeof line?.handle === "string" && Number.isInteger(line?.quantity) && line.quantity > 0) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(lines));
  }, [lines]);

  const value = useMemo<CartContextValue>(() => ({
    lines,
    totalQuantity: lines.reduce((total, line) => total + line.quantity, 0),
    addArtwork: (handle) => setLines(current => {
      const found = current.find(line => line.handle === handle);
      return found
        ? current.map(line => line.handle === handle ? { ...line, quantity: Math.min(3, line.quantity + 1) } : line)
        : [...current, { handle, quantity: 1 }];
    }),
    updateQuantity: (handle, quantity) => setLines(current => quantity < 1
      ? current.filter(line => line.handle !== handle)
      : current.map(line => line.handle === handle ? { ...line, quantity: Math.min(3, Math.max(1, quantity)) } : line)),
    removeArtwork: (handle) => setLines(current => current.filter(line => line.handle !== handle)),
    clearCart: () => setLines([]),
  }), [lines]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be used inside CartProvider");
  return context;
}
