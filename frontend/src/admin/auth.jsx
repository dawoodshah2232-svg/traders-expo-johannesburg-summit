import { createContext, useCallback, useContext, useEffect, useState } from 'react'
import { Navigate, Outlet, useLocation, useNavigate } from 'react-router-dom'
import { api, getToken, setToken, setUnauthorizedHandler } from '../api/client'

const AuthContext = createContext(null)
const USER_KEY = 'admin_user'

function storedUser() {
  try { return JSON.parse(localStorage.getItem(USER_KEY)) } catch { return null }
}

export function AuthProvider({ children }) {
  const [token, setTokenState] = useState(getToken)
  const [user, setUser] = useState(storedUser)
  const navigate = useNavigate()

  const clear = useCallback(() => {
    setToken(null)
    localStorage.removeItem(USER_KEY)
    setTokenState(null)
    setUser(null)
  }, [])

  // Expired or revoked token → back to the login page
  useEffect(() => {
    setUnauthorizedHandler(() => {
      clear()
      navigate('/admin/login', { replace: true })
    })
  }, [clear, navigate])

  // POST /api/admin/login → { token, user }
  const login = async (email, password) => {
    const data = await api('/admin/login', { method: 'POST', body: { email, password } })
    setToken(data.token)
    localStorage.setItem(USER_KEY, JSON.stringify(data.user ?? null))
    setTokenState(data.token)
    setUser(data.user ?? null)
  }

  const logout = async () => {
    try { await api('/admin/logout', { method: 'POST' }) } catch { /* token may already be invalid */ }
    clear()
    navigate('/admin/login', { replace: true })
  }

  return <AuthContext.Provider value={{ token, user, login, logout }}>{children}</AuthContext.Provider>
}

export const useAuth = () => useContext(AuthContext)

// Wraps admin routes: no token → /admin/login (and come back here after signing in)
export function RequireAdmin() {
  const { token } = useAuth()
  const location = useLocation()
  if (!token) return <Navigate to="/admin/login" replace state={{ from: location.pathname }} />
  return <Outlet />
}
