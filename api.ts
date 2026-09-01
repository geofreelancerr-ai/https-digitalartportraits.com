export class ApiUnavailableError extends Error {
  constructor() {
    super("The order service is unavailable in this preview.");
    this.name = "ApiUnavailableError";
  }
}

export async function api<T>(path: string, init?: RequestInit): Promise<T> {
  const response = await fetch(path, {
    credentials: "include",
    headers: { "content-type": "application/json", ...(init?.headers || {}) },
    ...init
  });
  const isJson = response.headers.get("content-type")?.includes("application/json") ?? false;
  const payload: unknown = isJson ? await response.json().catch(() => ({})) : {};
  const errorPayload = payload && typeof payload === "object" ? payload as Record<string, unknown> : {};
  if (!isJson) throw new ApiUnavailableError();
  if (!response.ok) throw new Error(typeof errorPayload.error === "string" ? errorPayload.error : "The request could not be completed.");
  return payload as T;
}
