import { httpClient } from "../httpClient";

interface candidateResponse {
  id: string;
  userId: string;
  name: string;
  position: string;
  telephone: string;
  city: string;
  stateProvince: string;
  country: string;
  street: string;
  number: number;
  postCode: string;
}

export async function getCandidate() {
  const { data } = await httpClient.get<candidateResponse>('candidate/get');
  return data;
}