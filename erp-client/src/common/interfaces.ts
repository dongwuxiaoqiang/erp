export interface Resource {
  id: number;
  name: string;
  label: string;
  icon?: string;
  type: string;
  url: string;
  children: Resource[];
}

export interface Supplier {
  id: number;
  name: string;
  address?: string | null;
  contact_name?: string | null;
  contact_email?: string | null;
  contact_phone?: string | null;
  other?: string | null;
  created_at?: string | null;
  updated_at?: string | null;
  operator?: string | null;
}

export interface Customer {
  id: number;
  name: string;
  address?: string | null;
  country?: string | null;
  email?: string | null;
  phone?: string | null;
  other?: string | null;
  created_at?: string | null;
  updated_at?: string | null;
  operator?: string | null;
}

export interface Product {
  id: number;
  name: string;
  model: string;
  standard: string;
  supplier_name: string;
  purchase_price: number;
  sales_price: number;
  operator?: string | null;
}

type ProductType = "product" | "accessory"

export interface PurchaseOrderBase {
  id: number;
  order_id: string,
  type?: ProductType,
  product_id?: number;
  unit_price?: number;
  purchase_quantity?: number;
  plan_quantity?: number;
  actual_quantity?: number;
  loss_quantity?: number;
  pass_rate?: number;
  order_date?: Date;
  plan_delivery_date?: Date;
  last_delivery_date?: Date;
  purchase_cycle?: number;
  customer_shipping_fee?: string
  owner_shipping_fee?: number;
  other_cost?: number;
  is_completed?: boolean
  description?: string;
  created_at?: Date;
  updated_at?: Date;
  operator?: string;
  arrivalPlans: PurchaseDeliveryPlan[];
}

export interface PurchaseDeliveryPlan {
  id?: number;
  purchase_id?: number;
  plan_quantity: number;
  plan_date: Date | null;
  is_completed?: boolean;
  created_at?: Date;
  updated_at?: Date;
  operator?: string;
}

export interface Stock {
  id: number;
  product_id: number;
  stock_quantity: number;
  updated_at: string | null;
}

export interface SaleOrderBase {
  id: number;
  product_id?: number;
  price?: number;
  order_date?: Date;
  latest_shipment_date?: Date;
  customer_id?: number;
  shipping_country?: string;
  is_invoice_issued?: boolean;
  is_sample_order?: boolean;
  customer_shipping_fee?: number;
  owner_shipping_fee?: number;
  other_fee?: number;
  exchange_rate?: number;
  sales_invoice?: string;
  description?: string;
}

export interface Inbound {
  id?: number;
  purchase_id?: number;
  arrival_quantity: number;
  arrival_date?: Date;
  incoming_quantity: number;
  incoming_date?: Date;
  yield?: number;
  shipping_method?: string;
  shipping_cost?: number;
  created_at?: Date;
  updated_at?: Date;
  operator?: string;
}
