import { useForm } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from "zod";
import { authService } from "../../../app/services/AuthService";
import { useAuth } from "../../../app/hooks/useAuth";
import { useMutation } from "@tanstack/react-query";
import { SigninProps } from "../../../app/services/AuthService/signin";
import toast from "react-hot-toast";

const schema = z.object({
  email: z.string().min(1, 'E-mail é obrigatório').email('Informe um e-mail válido'),
  password: z.string().min(8, 'Senha deve conter pelo menos 8 dígitos'),
});

type FormSchema = z.infer<typeof schema>;

export function useLoginController() {
  const { signin } = useAuth();

  const {
    register,
    handleSubmit: reactHookFormSubmit,
    formState: { errors },
  } = useForm<FormSchema>({
    resolver: zodResolver(schema),
  });

  const { mutateAsync, isPending } = useMutation({
    mutationFn: async (data: SigninProps) => {
      return authService.signin(data);
    },
  });

  const handleSubmit = reactHookFormSubmit(async (data) => {
    try {
      const { token } = await mutateAsync(data);
      signin(token);
    } catch (err) {
      toast.error('Desculpe, algo deu errado do nosso lado. Por favor, tente novamente mais tarde.');
    }
  });

  return {
    register,
    handleSubmit,
    errors,
    isPending,
  };
}
