import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useSideBar } from "../../../app/hooks/useSidebarContext";

interface useSideBarControllerProp {
  urlPath: string;
  isSubLink?: boolean;
  children?: { name: string; link: string; }[] | undefined;
}

export function useSideBarController({ urlPath, isSubLink, children }:useSideBarControllerProp) {
  const [isChildren] = useState(isSubLink);
  const { pathname } = useLocation();
  const navigate  = useNavigate()
  const isCurrentLink = urlPath === pathname || verifyChildreIsActive();
  const [isOpen, setIsOpen] = useState(false);
  const { handleOpenSideBar } = useSideBar();

  function handleToggleLinkOpen() {
    setIsOpen(prevstate => (!prevstate));
  }

  function verifyChildreIsActive() {
    const childrenActive = children?.find((link) => (link.link === pathname));
    return !!childrenActive;
  }

  function navigateTo() {
    if(urlPath === '') {
      handleOpenSideBar();
      return
    }
    navigate(urlPath);
  }

  return {
    isCurrentLink,
    isOpen,
    isChildren,
    handleToggleLinkOpen,
    navigateTo,
  }
}