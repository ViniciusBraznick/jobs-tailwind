import { CandidateAccountData } from "../../entities/CadidateAccountData";
import { httpClient } from "../httpClient";

export async function updateCandidateData(params:CandidateAccountData ) {
  const { data } = await httpClient.put('/candidate/update', params);
  return data;
}