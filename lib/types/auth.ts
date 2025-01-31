export interface LoginData {
  email: string
  password: string
}

export interface RegisterData {
  email: string
  name: string
  password: string
}

export interface User {
  id: string
  email: string
  name: string
  role: string
}

export interface AuthResponse {
  access_token: string
  user: User
}

export interface AuthState {
  user: User | null
  token: string | null
  isAuthenticated: boolean
  login: (response: AuthResponse) => void
  logout: () => void
}

