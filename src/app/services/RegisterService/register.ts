import { httpClient } from "../httpClient"

export interface RegisterParams {
  name: string;
  email: string;
  password: string;
}

interface RegisterResponse {
  id: string;
  email: string;
  token: string;
  type: string;
  expireIn: number;
}

export async function registerCandidate(params: RegisterParams) {
  const { data } = await httpClient.post<RegisterResponse>('/auth/candidate/signup', params);
  return data;
}

export async function registerCompany(params: RegisterParams) {
  const { data } = await httpClient.post<RegisterResponse>('/auth/company/signup', params);
  return data;
}