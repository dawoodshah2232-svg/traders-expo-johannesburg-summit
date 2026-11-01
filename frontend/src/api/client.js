// Small fetch wrapper for the Laravel API (VITE_API_URL, e.g. https://thetradersexpo.com/backend/api)
const BASE = (import.meta.env.VITE_API_URL || '').replace(/\/+$/, '')
const TOKEN_KEY = 'admin_token'

export const getToken = () => localStorage.getItem(TOKEN_KEY)
export const setToken = token => (token ? localStorage.setItem(TOKEN_KEY, token) : localStorage.removeItem(TOKEN_KEY))

export class ApiError extends Error {
  constructor(message, status, data) {
    super(message)
    this.status = status
    this.data = data
  }
}

// Called when the API answers 401 so the admin app can send the user back to the login page
let onUnauthorized = () => {}
export const setUnauthorizedHandler = fn => { onUnauthorized = fn }

// body: plain object (sent as JSON) or FormData (for file uploads). raw: return the Response (e.g. for downloads).
export async function api(path, { method = 'GET', body, headers, raw = false } = {}) {
  if (!BASE) throw new ApiError('VITE_API_URL is not set.', 0)
  const token = getToken()
  const isForm = body instanceof FormData
  let res
  try {
    res = await fetch(BASE + path, {
      method,
      headers: {
        Accept: 'application/json',
        ...(body !== undefined && !isForm && { 'Content-Type': 'application/json' }),
        ...(token && { Authorization: `Bearer ${token}` }),
        ...headers,
      },
      body: body === undefined || isForm ? body : JSON.stringify(body),
    })
  } catch {
    throw new ApiError('Cannot reach the server. Please try again.', 0)
  }

  if (raw && res.ok) return res
  const data = res.status === 204 ? null : await res.json().catch(() => null)
  if (!res.ok) {
    if (res.status === 401 && token) onUnauthorized()
    // Laravel validation errors: show the first field message
    const firstError = data?.errors && Object.values(data.errors)[0]?.[0]
    throw new ApiError(firstError || data?.message || `Request failed (${res.status})`, res.status, data)
  }
  return data
}
