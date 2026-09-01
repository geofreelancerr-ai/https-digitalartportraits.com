PRAGMA foreign_keys = ON;

CREATE TABLE IF NOT EXISTS orders (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  order_number TEXT NOT NULL UNIQUE,
  customer_name TEXT NOT NULL,
  email TEXT NOT NULL,
  whatsapp TEXT NOT NULL,
  payment_method TEXT NOT NULL CHECK (payment_method IN ('whish_money', 'western_union', 'omt')),
  payment_reference TEXT,
  notes TEXT,
  total_cents INTEGER NOT NULL,
  currency TEXT NOT NULL DEFAULT 'USD',
  status TEXT NOT NULL DEFAULT 'pending_payment' CHECK (status IN ('pending_payment', 'proof_submitted', 'confirmed', 'cancelled')),
  receipt_key TEXT,
  receipt_file_name TEXT,
  receipt_mime_type TEXT,
  created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS order_items (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  order_number TEXT NOT NULL,
  artwork_handle TEXT NOT NULL,
  artwork_title TEXT NOT NULL,
  quantity INTEGER NOT NULL CHECK (quantity > 0 AND quantity <= 12),
  unit_price_cents INTEGER NOT NULL,
  FOREIGN KEY (order_number) REFERENCES orders(order_number) ON DELETE CASCADE
);

CREATE INDEX IF NOT EXISTS order_lookup_by_email ON orders(order_number, email);
CREATE INDEX IF NOT EXISTS order_items_by_order ON order_items(order_number);
