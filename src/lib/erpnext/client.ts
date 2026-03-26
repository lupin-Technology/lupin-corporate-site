/** ERPNext REST API クライアント */

import type {
  DocType,
  DocTypeDataMap,
  ERPNextResponse,
  ListOptions,
} from "./types";

const ERPNEXT_URL = process.env.ERPNEXT_URL;
const ERPNEXT_API_KEY = process.env.ERPNEXT_API_KEY;
const ERPNEXT_API_SECRET = process.env.ERPNEXT_API_SECRET;

function getConfigError(): ERPNextResponse<never> {
  return {
    success: false,
    status: 500,
    message: "ERPNext の環境変数が設定されていません",
  };
}

async function fetchERPNext<T>(
  path: string,
  init?: RequestInit,
): Promise<ERPNextResponse<T>> {
  if (!ERPNEXT_URL || !ERPNEXT_API_KEY || !ERPNEXT_API_SECRET) {
    return getConfigError();
  }

  const url = `${ERPNEXT_URL}${path}`;

  try {
    const response = await fetch(url, {
      ...init,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `token ${ERPNEXT_API_KEY}:${ERPNEXT_API_SECRET}`,
        ...init?.headers,
      },
    });

    if (response.ok) {
      const json = (await response.json()) as { data: T };
      return { success: true, data: json.data };
    }

    const errorText = await response.text();
    return { success: false, status: response.status, message: errorText };
  } catch (error) {
    return {
      success: false,
      status: 500,
      message:
        error instanceof Error ? error.message : "ERPNext API 通信エラー",
    };
  }
}

/** ドキュメントを作成する */
export async function createDoc<T extends DocType>(
  doctype: T,
  data: DocTypeDataMap[T],
): Promise<ERPNextResponse<DocTypeDataMap[T]>> {
  return fetchERPNext(`/api/resource/${doctype}`, {
    method: "POST",
    body: JSON.stringify(data),
  });
}

/** 単一ドキュメントを取得する */
export async function getDoc<T extends DocType>(
  doctype: T,
  name: string,
): Promise<ERPNextResponse<DocTypeDataMap[T]>> {
  return fetchERPNext(`/api/resource/${doctype}/${encodeURIComponent(name)}`);
}

/** ドキュメント一覧を取得する */
export async function getDocList<T extends DocType>(
  doctype: T,
  options?: ListOptions,
): Promise<ERPNextResponse<DocTypeDataMap[T][]>> {
  const params = new URLSearchParams();

  if (options?.fields) {
    params.set("fields", JSON.stringify(options.fields));
  }
  if (options?.filters) {
    params.set("filters", JSON.stringify(options.filters));
  }
  if (options?.limit) {
    params.set("limit_page_length", String(options.limit));
  }
  if (options?.orderBy) {
    params.set("order_by", options.orderBy);
  }

  const query = params.toString();
  const path = `/api/resource/${doctype}${query ? `?${query}` : ""}`;

  return fetchERPNext(path);
}
