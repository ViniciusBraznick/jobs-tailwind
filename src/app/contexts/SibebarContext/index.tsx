import { createContext, useState } from "react";

export interface sidebarContextProps {
  sidebarIsOpen: boolean,
  handleToggleSidebar(): void,
  handleOpenSideBar(): void,
  handleCloseSideBar(): void,
}

export const sidebarContext = createContext({} as sidebarContextProps);

export function SidebarProvider({ children }: { children: React.ReactNode }) {
  const [sidebarIsOpen, setSidebarIsOpen] = useState(false);

  function handleToggleSidebar() {
    setSidebarIsOpen(prevState => !prevState);
  }

  function handleOpenSideBar() {
    setSidebarIsOpen(true);
  }

  function handleCloseSideBar() {
    setSidebarIsOpen(false);
  }

  return (
    <sidebarContext.Provider value={{
      sidebarIsOpen,
      handleToggleSidebar,
      handleOpenSideBar,
      handleCloseSideBar
    }}>
      {children}
    </sidebarContext.Provider>
  )
}