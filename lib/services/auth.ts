import { fetchApi } from "@/lib/utils/api"
import type { LoginData, RegisterData, AuthResponse } from "@/lib/types/auth"

export async function login(data: LoginData): Promise<AuthResponse> {
  return fetchApi("/auth/login", {
    method: "POST",
    body: data,
  })
}

export async function register(data: RegisterData): Promise<AuthResponse> {
  return fetchApi("/auth/register", {
    method: "POST",
    body: data,
  })
}

export async function getProfile(token: string) {
  return fetchApi("/auth/profile", {
    token,
  })
}

export async function logout() {
  return fetchApi("/auth/logout", {
    method: "POST",
  })
}

