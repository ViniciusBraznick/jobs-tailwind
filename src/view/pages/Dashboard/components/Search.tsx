import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import * as Dialog from '@radix-ui/react-dialog';
import { Input } from "../../../components/Input";

export function Search() {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button className="w-10 h-10 bg-gray-50 text-gray-400 rounded-full flex items-center justify-center">
          <MagnifyingGlassIcon className="w-6 h-6 text-gray-400" />
        </button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="bg-black/45 backdrop-blur-sm data-[state=open]:animate-overlayShow fixed inset-0 z-10" />
        <Dialog.Content className="data-[state=open]:animate-contentShow fixed top-[20%] left-[50%] max-h-[85vh] w-[90vw] z-20 max-w-[450px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-white shadow-md focus:outline-none">
          <form>
            <div className="flex items-center w-full">
              <Input className="w-full border-none" name="Buscar" placeholder="Pesquisar por..."/>
            </div>
          </form>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}