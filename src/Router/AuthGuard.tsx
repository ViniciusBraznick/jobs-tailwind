import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../app/hooks/useAuth';

interface AuthGuardProps {
  isPrivate: boolean;
  userAllowed?: 'candidate' | 'company';
}

export function AuthGuard({ isPrivate, userAllowed }: AuthGuardProps) {
  const { signedIn, user } = useAuth();

  const userType = user?.isCompany ? 'company' : 'candidate';

  if(!signedIn && isPrivate){
    return <Navigate to="/login" />;
  }

  if(signedIn && !isPrivate || userAllowed && userAllowed !== userType){
    return <Navigate to="/" />;
  }

  return <Outlet />
}