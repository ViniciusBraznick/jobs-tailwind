import { useNavigate } from "react-router-dom";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { useEditAccountDataController } from "./useEditAccountDataController";
import { ChevronLeftIcon } from "@radix-ui/react-icons";
import { useAuth } from "../../../app/hooks/useAuth";

export function EditAccountData() {
  const navigate  = useNavigate();
  const { user } = useAuth();
  const { register, handleSubmit, errors, isPending } = useEditAccountDataController();

  return(
    <div className="container mx-auto">
      <span className="cursor-pointer text-gray-500 flex items-center" onClick={() => navigate(-1)}> <ChevronLeftIcon /> Voltar</span>
      <h1 className="text-2xl font-bold">Dados da Conta</h1>
      <div className="bg-white p-6 rounded-3xl mt-6">

        <div className="flex gap-8 max-md:flex-col justify-between mt-10">
          <div className="md:max-w-72 w-full">
            <strong className="text-lg">Edite as informações da sua conta</strong>
            <p className="block mt-2">Esses dados são usados por recrutadores para entrar em contato com você</p>
          </div>

          <form onSubmit={handleSubmit} className=" max-w-screen-lg  w-full">
              <div className="space-y-6">
                <div className="flex gap-6 max-md:flex-col">
                  <fieldset className=" gap-4 w-full">
                    <Input {...register('name')} error={errors.name?.message} type="text" placeholder="Nome" />
                  </fieldset>

                  <fieldset className="w-full">
                    <Input {...register('position')}  error={errors.position?.message} type="text" name="position" placeholder="Cargo" />
                  </fieldset>
                </div>

                <div className="flex gap-6 max-md:flex-col">
                  <fieldset className=" gap-4 w-full">
                    <Input type="text" name="email" value={user?.email} title="E-mail não pode ser editado" disabled placeholder="E-mail" />
                  </fieldset>

                  <fieldset className="w-full">
                    <Input {...register('telephone')} maxLength={15} error={errors.telephone?.message} type="text" placeholder="Telefone" />
                  </fieldset>
                </div>

                <div className="flex gap-6 max-md:flex-col">
                  <fieldset className=" gap-4 w-full">
                    <Input {...register('street')} type="text" error={errors.street?.message} placeholder="Endereço" />
                  </fieldset>

                  <fieldset className="w-full lg:max-w-32">
                    <Input {...register('number')} maxLength={4} error={errors.number?.message} type="number" placeholder="Número" />
                  </fieldset>

                  <fieldset className="w-full">
                    <Input {...register('postalCode')} error={errors.postalCode?.message} type="text" placeholder="CEP" />
                  </fieldset>
                </div>

                <div className="flex gap-6 max-md:flex-col">
                  <fieldset className="gap-4 w-full">
                    <Input {...register('city')}  error={errors.city?.message} type="text" placeholder="Cidade" />
                  </fieldset>

                  <fieldset className="w-full">
                    <Input {...register('stateProvince')}  error={errors.stateProvince?.message} type="text"  placeholder="Estado" />
                  </fieldset>

                  <fieldset className="w-full">
                    <Input {...register('country')} error={errors.country?.message} type="text" placeholder="País" />
                  </fieldset>
                </div>
              </div>

              <Button type="submit" isLoading={isPending} className="ml-auto mt-6">Salvar alterações</Button>
          </form>
        </div>
      </div>
    </div>
  )
}