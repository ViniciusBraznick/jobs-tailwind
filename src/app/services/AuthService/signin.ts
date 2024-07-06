import { httpClient } from "../httpClient"

export interface SigninProps {
  email: string;
  password: string;
} 

interface SigninResponse {
  email: string;
  token: string;
  type: string;
  expireIn: number;
}

export async function signin(params:SigninProps) {
  const { data } = await httpClient.post<SigninResponse>('/auth/login', params);
  return data;
}