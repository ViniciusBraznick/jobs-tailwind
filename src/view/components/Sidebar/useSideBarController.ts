import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

interface useSideBarControllerProp {
  urlPath: string;
  isSubLink?: boolean;
}

export function useSideBarController({ urlPath, isSubLink }:useSideBarControllerProp) {
  const [isOpen, setIsOpen] = useState(false);
  const [isChildren] = useState(isSubLink);
  const { pathname } = useLocation();
  const isCurrentLink = urlPath === pathname;
  const navigate  = useNavigate()

  function handleToggleLinkOpen() {
    setIsOpen(prevstate => (!prevstate));
  }

  function navigateTo() {
    if(urlPath === '') return;
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