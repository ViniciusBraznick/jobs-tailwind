import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { registerService } from "../../../app/services/RegisterService";
import { RegisterParams } from "../../../app/services/RegisterService/register";
import toast from "react-hot-toast";
import { useAuth } from "../../../app/hooks/useAuth";

interface useRegisterControllerProps {
  type: 'company' | 'candidate';
}

const schema = z.object({
  name: z.string().min(1, 'Nome é obrigatório'),
  email: z.string().min(1, 'E-mail é obrigatório').email('Informe um e-mail válido'),
  password: z.string().min(8, 'Senha deve conter pelo menos 8 dígitos'),
  confirm_password: z.string().min(8, 'Senha deve conter pelo menos 8 dígitos'),
}).refine((data) => data.password === data.confirm_password, {
  message: 'As senhas não conferem',
  path: ['confirm_password'],
});

type RegisterSchema = z.infer<typeof schema> 

export function useRegisterController({ type }:useRegisterControllerProps){
  const { signin } = useAuth();

  const { 
    register,
    handleSubmit: reactHookFormSubmit,
    formState: { errors }
   } = useForm<RegisterSchema>({
    resolver: zodResolver(schema),
  });

  const { mutateAsync, isPending } = useMutation({
    mutationFn: async (data: RegisterParams) => {
      return type === 'candidate' ? await registerService.registerCandidate(data) : await registerService.registerCompany(data);
    }
  });

  const handleSubmit = reactHookFormSubmit(async (data) => {
    try{ 
        const { token } = await mutateAsync(data);
        signin(token);
    } catch(err) {
      console.log(err);
      toast.error('Desculpe, algo deu errado do nosso lado. Por favor, tente novamente mais tarde.');
    }
  });

  return { register, handleSubmit, errors, isPending }
}