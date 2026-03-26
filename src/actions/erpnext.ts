"use server";

import { createDoc } from "@/lib/erpnext";
import { contactFormSchema, toERPNextLead } from "@/lib/schemas/contact";

import type { ContactFormState } from "./hubspot";

export async function submitContactToERPNext(
  formData: FormData,
): Promise<ContactFormState> {
  const raw = {
    lastName: formData.get("lastName"),
    firstName: formData.get("firstName"),
    company: formData.get("company"),
    email: formData.get("email"),
    phone: formData.get("phone"),
    message: formData.get("message"),
  };

  const parsed = contactFormSchema.safeParse(raw);

  if (!parsed.success) {
    const fieldErrors: Record<string, string[]> = {};
    for (const issue of parsed.error.issues) {
      const key = String(issue.path[0]);
      fieldErrors[key] = fieldErrors[key] ?? [];
      fieldErrors[key].push(issue.message);
    }
    return { success: false, error: "入力内容を確認してください", fieldErrors };
  }

  const leadData = toERPNextLead(parsed.data);
  const result = await createDoc("Lead", leadData);

  if (!result.success) {
    return {
      success: false,
      error: "送信に失敗しました。しばらくしてからお試しください。",
    };
  }

  return { success: true };
}
