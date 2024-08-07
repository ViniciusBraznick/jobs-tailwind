import { BellIcon, Cross1Icon, ExitIcon, HamburgerMenuIcon } from "@radix-ui/react-icons";
import * as Avatar from '@radix-ui/react-avatar';

import { Popover } from "./Popover";
import { useAuth } from "../../app/hooks/useAuth";
import { Search } from "../pages/Dashboard/components/Search";
import { Link } from "react-router-dom";
import { useSideBar } from "../../app/hooks/useSidebarContext";

export function Header() {
  const { signout, user } = useAuth();
  const { handleToggleSidebar, sidebarIsOpen } = useSideBar();

  return(
    <header className="flex justify-between items-center px-4 py-4 shadow-sm bg-white">
      <div className="flex items-center gap-4">
        <Search />
      </div>

      <div className="flex items-center gap-4">
        <button className="w-10 h-10 bg-gray-50 rounded-full flex items-center justify-center">
          <BellIcon className="w-6 h-6 text-gray-400" />
        </button>

        <Popover.Root>
          <Popover.Trigger>
            <button className="w-10 h-10 bg-gray-50 text-gray-400 rounded-full flex items-center justify-center">
             <Avatar.Root>
                <Avatar.Fallback className="font-semibold">
                  {user?.email[0].toUpperCase()}
                </Avatar.Fallback>
             </Avatar.Root>
            </button>
          </Popover.Trigger>

          <Popover.Content className="flex flex-col">
            <Link to="/account">Minha Conta</Link>
            <Link to="/preferences">Preferências</Link>
            <Link to="/terms" >Termos de uso</Link>

            <span className="border-t"></span>

            <button className="flex items-center gap-2 text-red-500" onClick={signout}>
              <ExitIcon />
              Sair
            </button>
          </Popover.Content>
        </Popover.Root>

        <button onClick={handleToggleSidebar} className="w-10 h-10 bg-gray-50 rounded-full flex items-center justify-center md:hidden">
          {sidebarIsOpen ? <Cross1Icon className="w-6 h-6 text-gray-400" /> : <HamburgerMenuIcon className="w-6 h-6 text-gray-400" />}
        </button>
      </div>
    </header>
  )
}