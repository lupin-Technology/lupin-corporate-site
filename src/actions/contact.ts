"use server";

import { submitContactToERPNext } from "./erpnext";
import type { ContactFormState } from "./hubspot";
import { submitContactToHubSpot } from "./hubspot";

/**
 * お問い合わせフォーム統合オーケストレーター
 * ERPNext（プライマリ）と HubSpot（セカンダリ）に並列送信する。
 * HubSpot の送信失敗は ERPNext の結果に影響しない。
 */
export async function submitContactForm(
  formData: FormData,
): Promise<ContactFormState> {
  const [erpnextResult] = await Promise.all([
    submitContactToERPNext(formData),
    submitContactToHubSpot(formData).catch(() => {
      // HubSpot はセカンダリ — 失敗しても ERPNext の結果を返す
    }),
  ]);

  return erpnextResult;
}
