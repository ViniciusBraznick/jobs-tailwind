import { createContext, useCallback, useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { authService } from "../../services/AuthService";
import { checkAuthResponse } from "../../services/AuthService/checkAuth";
import { localStorageKeys } from "../../config/localStorageKeys";

export interface AuthContextProps {
  signedIn: boolean;
  user: checkAuthResponse | undefined;
  signin(accessToken: string): void;
  signout(): void;
}

export const AuthContext = createContext({} as AuthContextProps);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [signedIn, setSignedIn] = useState<boolean>(() => {
    const storedAccessToken = localStorage.getItem(localStorageKeys.ACCESS_TOKEN);

    return !!storedAccessToken;
  });

  const { isError, isSuccess, data } = useQuery({
    queryKey: ['auth', 'check'],
    queryFn: () => authService.checkAuth(),
    staleTime: 3600,
    enabled: signedIn,
  });

  const signin = useCallback((accessToken: string) => {
    localStorage.setItem(localStorageKeys.ACCESS_TOKEN, accessToken);
    setSignedIn(true);
  }, []);

  const signout = useCallback(() => {
    localStorage.removeItem(localStorageKeys.ACCESS_TOKEN);
    setSignedIn(false);
  }, []);

  useEffect(() => {
    if(isError){
      signout()
    }
  },[isError, signout]);

  return (
    <AuthContext.Provider value={{
      signedIn: isSuccess && signedIn,
      user: data,
      signin,
      signout,
    }}>
      {children}
    </AuthContext.Provider>
  );
}
