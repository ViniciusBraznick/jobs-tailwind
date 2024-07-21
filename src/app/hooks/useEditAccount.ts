/* eslint-disable @typescript-eslint/no-explicit-any */
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { z, ZodObject, ZodRawShape } from 'zod';
import { useMutation } from "@tanstack/react-query";

export function useEditAccount<T extends ZodRawShape>(
  schema: ZodObject<T>,  
  defaults: any,
  mutateFunc: any,
) {
  type FormData = z.infer<typeof schema>;

  const { mutate, isPending } = useMutation({
    mutationFn: mutateFunc,
    onSuccess: () => {
      toast.success("Conta atualizada", {
        id: 'account_update'
      });
    },
    onError: (error) => {
      toast.error(`Ocorreu um erro ao tentar atualizar os dados da conta: ${error.response.data.messages.error || 'Erro desconhecido'}`, {
        id: 'account_update_error'
      })
    }
  });

  const { 
    register, 
    handleSubmit: 
    useFormHandleSubmit,
    formState: { errors },
    setValue,
    watch,
   } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: defaults,
  });


  const handleSubmit = useFormHandleSubmit(async (data) => {
    try {
      await mutate(data);
    } catch (error) {
      toast.error("Ocorreu um erro ao tentar atualizar os dados da conta")
    }
  });

  return {
    errors,
    isPending,
    register,
    handleSubmit,
    watch,
    setValue,
  };
}