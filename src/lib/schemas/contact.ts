import { z } from "zod";

import type { HubSpotField } from "@/lib/hubspot";

export const contactFormSchema = z.object({
  lastName: z.string().min(1, "姓を入力してください"),
  firstName: z.string().min(1, "名を入力してください"),
  company: z.string().min(1, "会社名を入力してください"),
  email: z
    .string()
    .min(1, "メールアドレスを入力してください")
    .email("正しいメールアドレスを入力してください"),
  phone: z.string().optional(),
  message: z.string().min(1, "お問い合わせ内容を入力してください"),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;

/** ContactFormData を HubSpot フィールド配列に変換する */
export function toHubSpotFields(data: ContactFormData): HubSpotField[] {
  const fields: HubSpotField[] = [
    { objectTypeId: "0-1", name: "lastname", value: data.lastName },
    { objectTypeId: "0-1", name: "firstname", value: data.firstName },
    { objectTypeId: "0-1", name: "company", value: data.company },
    { objectTypeId: "0-1", name: "email", value: data.email },
    { objectTypeId: "0-1", name: "message", value: data.message },
  ];

  if (data.phone) {
    fields.push({ objectTypeId: "0-1", name: "phone", value: data.phone });
  }

  return fields;
}
