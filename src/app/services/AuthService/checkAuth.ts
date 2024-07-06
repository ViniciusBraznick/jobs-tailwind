import { httpClient } from "../httpClient";

export interface checkAuthResponse {
  id: string;
  email: string;
  isCompany: boolean;
}

export async function checkAuth() {
  const { data } = await httpClient.get<checkAuthResponse>('/auth/check');
  return data;
}