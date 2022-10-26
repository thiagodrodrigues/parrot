import api from "./config";

interface LoginPayload {
  email: string;
  senha: string;
}
export function login(payload: LoginPayload) {
  return api.post("/login", payload);
}
