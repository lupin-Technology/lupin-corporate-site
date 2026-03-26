"use server";

import { submitToHubSpot } from "@/lib/hubspot";
import { contactFormSchema, toHubSpotFields } from "@/lib/schemas/contact";

export type ContactFormState = {
  success: boolean;
  error?: string;
  fieldErrors?: Record<string, string[]>;
};

export async function submitContactForm(
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

  const fields = toHubSpotFields(parsed.data);

  const result = await submitToHubSpot({
    fields,
    context: {
      pageUri: String(formData.get("pageUri") ?? ""),
      pageName: String(formData.get("pageName") ?? ""),
    },
  });

  if (!result.success) {
    return {
      success: false,
      error: "送信に失敗しました。しばらくしてからお試しください。",
    };
  }

  return { success: true };
}
