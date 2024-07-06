import { Link } from "react-router-dom";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { InputPassword } from "../../components/InputPassword";
import { useLoginController } from "./useLoginController";

export function Login() {
  const { register, handleSubmit, errors, isPending } = useLoginController();

  return (
    <>
      <h1 className="text-2xl font-bold text-gray-950 mt-10">Acesse sua conta</h1>
      <p className="mb-16 text-gray-500">Faça login para acessar sua conta</p>

      <form className="w-full" onSubmit={handleSubmit}>
        <fieldset className="space-y-6">
          <Input error={errors.email?.message} {...register('email')} type="text" placeholder="E-mail" />
          <InputPassword error={errors.password?.message} {...register('password')} type="password" autoComplete="none" placeholder="Senha" />
        </fieldset>
        <Link className="text-blue-500 underline font-medium block mt-2 w-fit" to="/recover-password">Esqueci minha senha</Link>

        <Button isLoading={isPending} className="w-full mb-6 mt-8" type="submit">Entrar</Button>
        <p className="text-center">Ainda não tem uma conta? <Link className="text-blue-500 underline font-medium" to="/candidate/register">Cadastre-se agora!</Link></p>
      </form>
    </>
  );
}
