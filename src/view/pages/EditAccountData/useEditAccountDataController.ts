import { z } from "zod";
import { candidateService } from "../../../app/services/CandidateService";
import { CandidateAccountData } from "../../../app/entities/CadidateAccountData";
import { useEffect } from "react";
import { useEditAccount } from "../../../app/hooks/useEditAccount";

const schema = z.object({
  name: z.string().trim().min(1, 'Nome é obrigatório'),
  position: z.string().trim().min(1, 'Cargo é obrigatório'),
  telephone: z.string()
              .trim()
              .min(1, 'Telefone é obrigatório')
              .max(15, 'Número inválido')
              .transform((phone) => phone.replace(/[^a-zA-Z0-9]/g, "")),
  city: z.string().trim().min(1, 'Cidade é obrigatório'),
  stateProvince: z.string().trim().min(1, 'Estado é obrigatório'),
  country: z.string().trim().min(1, 'País é obrigatório'),
  street: z.string().trim().min(1, 'Endereço é obrigatório'),
  number: z.coerce.number().min(1, 'Numero é obrigatório'),
  postalCode: z.string().trim().min(1, 'CEP é obrigatório'),
});

export function useEditAccountDataController() {
  const mutateFunc = async (data:CandidateAccountData) => {
    await candidateService.updateCandidateData(data);
  }

  const defaults = {
    name: '',
    position: '',
    telephone: '',
    city: '',
    stateProvince: '',
    postalCode: '',
    street: '',
  }

  const { errors, handleSubmit,register,setValue,watch,isPending } = useEditAccount(schema, defaults, mutateFunc);

  const telephone = watch('telephone');
  const postalCode = watch('postalCode');

  useEffect(() => {
    setValue('telephone', telephone.replace(/\D/g,'').replace(/(\d{2})(\d)/,"($1) $2").replace(/(\d)(\d{4})$/,"$1-$2"));
  }, [telephone, setValue]);


  useEffect(() => {
    setValue('postalCode', postalCode.replace(/\D/g,'').replace(/\D/g, '').replace(/(\d{5})(\d)/, '$1-$2').replace(/(-\d{3})\d+?$/, '$1'));
  }, [postalCode, setValue]);


  useEffect(() => {
    (async () => {
      const { name, position, telephone, street, number, postalCode, city, stateProvince, country } = await candidateService.getCandidate();

      setValue('name', name || "")
      setValue('position', position || "")
      setValue('telephone', telephone || "")
      setValue('city', city || "")
      setValue('stateProvince', stateProvince || "")
      setValue('country', country || "")
      setValue('street', street || "")
      setValue('number', number || 0)
      setValue('postalCode', postalCode || "")
    })();
  }, [setValue])

  return {
    errors,
    register,
    handleSubmit,
    isPending,
  };
}