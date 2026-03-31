/** HubSpot Forms API v3 クライアント */

export type HubSpotField = {
  objectTypeId: string;
  name: string;
  value: string;
};

export type HubSpotFormContext = {
  hutk?: string;
  ipAddress?: string;
  pageUri?: string;
  pageName?: string;
};

export type HubSpotSubmission = {
  fields: HubSpotField[];
  context?: HubSpotFormContext;
  submittedAt?: number;
};

export type HubSpotResponse =
  | { success: true; inlineMessage?: string }
  | { success: false; status: number; message: string };

const HUBSPOT_PORTAL_ID = process.env.NEXT_PUBLIC_HUBSPOT_PORTAL_ID;
const HUBSPOT_FORM_ID = process.env.NEXT_PUBLIC_HUBSPOT_FORM_ID;
const HUBSPOT_ACCESS_TOKEN = process.env.HUBSPOT_ACCESS_TOKEN;

const FORMS_API_BASE =
  "https://api.hsforms.com/submissions/v3/integration/secure/submit";

export async function submitToHubSpot(
  submission: HubSpotSubmission,
): Promise<HubSpotResponse> {
  if (!HUBSPOT_PORTAL_ID || !HUBSPOT_FORM_ID || !HUBSPOT_ACCESS_TOKEN) {
    return {
      success: false,
      status: 500,
      message: "HubSpot の環境変数が設定されていません",
    };
  }

  const url = `${FORMS_API_BASE}/${HUBSPOT_PORTAL_ID}/${HUBSPOT_FORM_ID}`;

  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      Authorization: `Bearer ${HUBSPOT_ACCESS_TOKEN}`,
    },
    body: JSON.stringify({
      ...submission,
      submittedAt: submission.submittedAt ?? Date.now(),
    }),
  });

  if (response.ok) {
    const data = (await response.json()) as { inlineMessage?: string };
    return { success: true, inlineMessage: data.inlineMessage };
  }

  const errorText = await response.text();
  return {
    success: false,
    status: response.status,
    message: errorText,
  };
}
