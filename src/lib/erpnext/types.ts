/** ERPNext DocType 型定義 */

// ---------- Lead ----------
export type ERPNextLead = {
  lead_name: string;
  email_id: string;
  phone?: string;
  company_name?: string;
  source?: string;
  status?: string;
  notes?: string;
};

// ---------- DocType マッピング ----------
export type DocType = "Lead";

export type DocTypeDataMap = {
  Lead: ERPNextLead;
};

// ---------- API レスポンス ----------
export type ERPNextResponse<T> =
  | { success: true; data: T }
  | { success: false; status: number; message: string };

// ---------- リスト取得オプション ----------
export type ListOptions = {
  fields?: string[];
  filters?: [string, string, string][];
  limit?: number;
  orderBy?: string;
};
