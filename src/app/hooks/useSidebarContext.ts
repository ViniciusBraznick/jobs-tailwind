import { useContext } from "react";
import { sidebarContext } from "../contexts/SibebarContext";

export function useSideBar() {
  return useContext(sidebarContext);
}
