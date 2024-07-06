import { Link } from "react-router-dom";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";

import { ArrowRightIcon } from "@radix-ui/react-icons";
import { InputPassword } from "../../components/InputPassword";
import { UserType } from "../../../app/entities/UserType";
import { useRegisterController } from "./useRegisterController";

export function Register({ type }: UserType) {
  const usertype = type === 'candidate' ? 'candidato' : 'empresa';

  const { register, errors, handleSubmit, isPending } = useRegisterController({ type });

  return(
    <section className="flex items-center justify-center h-full">
      <div className="max-w-md m-auto w-full">
        <h1 className="text-2xl font-bold text-gray-950 mt-10">
          Cadastre-se como {usertype}
        </h1>
        <p className=" mb-16 text-gray-500">
          {type === 'candidate' ? 'Encontre a oportunidade perfeita para você' : 'Conecte-se com mais de 2000 profissionais'}
        </p>

        <form className="w-full" onSubmit={handleSubmit}>
          <fieldset className="space-y-6">
            <Input {...register('name')} error={errors.name?.message} type="text" placeholder="Nome"/>
            <Input {...register('email')} error={errors.email?.message}  type="email" placeholder="E-mail" />
            <InputPassword {...register('password')} error={errors.password?.message} autoComplete="none" type="password" placeholder="Senha" />
            <InputPassword {...register('confirm_password')} error={errors.confirm_password?.message} autoComplete="none" type="password" placeholder="Confirme sua senha" />
          </fieldset>

          <Button isLoading={isPending} className="w-full mb-6 mt-8">Criar conta como {usertype}</Button>
          <Link title="Crie sua conta como empresa" className="text-gray-400 gap-3 font-medium flex items-center justify-center m-auto w-fit" to={`/${type === 'company' ? 'candidate' : 'company'}/register`}>Sou {type === 'company' ? 'candidato' : 'empresa'} <ArrowRightIcon/></Link>
        </form>

        <p className="text-center block mt-10">Já tem uma conta? <Link className="text-blue-500 underline font-medium" to="/login">Entrar!</Link></p>
      </div>
    </section>
  )
}