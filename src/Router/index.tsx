import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { AuthLayout } from '../view/layouts/AuthLayout';
import { Login } from '../view/pages/Login';
import { Register } from '../view/pages/Register';
// import { NotFound } from '../view/pages/404';
import { Dashboard } from '../view/pages/Dashboard';
import { DashboardLayout } from '../view/layouts/DashboardLayout';
import { AuthGuard } from './AuthGuard';
import { EditAccountData } from '../view/pages/EditAccountData';
// Company
import { CompanyEditAccountData } from '../view/pages/company/CompanyEditAccountData';


export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AuthGuard isPrivate={false} />}>
          <Route element={<AuthLayout />}>
            <Route path='/login' element={<Login />} />
            <Route path='/candidate/register' element={<Register type='candidate' />} />
            <Route path='/company/register' element={<Register type='company' />} />
          </Route>
        </Route>

        <Route element={<AuthGuard isPrivate userAllowed='candidate' />}>
          <Route element={<DashboardLayout />}>
            <Route path='/candidate/applications' element={<Dashboard />} />
            <Route path='/candidate/preferences' element={<Dashboard />} />
            <Route path='/candidate/account/curriculum' element={<Dashboard />} />
            <Route path='/candidate/account/security' element={<Dashboard />} />
            <Route path='/candidate/account/privacy' element={<Dashboard />} />
            <Route path='/candidate/account/data' element={<EditAccountData />} />
          </Route>
        </Route>

        <Route element={<AuthGuard isPrivate />}>
          <Route element={<DashboardLayout />}>
            <Route path='/chat' element={<Dashboard />} />
            <Route path='/' element={<Dashboard />} />
          </Route>
        </Route>

        <Route element={<AuthGuard isPrivate userAllowed='company' />}>
          <Route element={<DashboardLayout />}>
            <Route path='/company/preferences' element={<Dashboard />} />
            <Route path='/company/account/curriculum' element={<Dashboard />} />
            <Route path='/company/account/security' element={<Dashboard />} />
            <Route path='/company/account/privacy' element={<Dashboard />} />
            <Route path='/company/account/data' element={<CompanyEditAccountData />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}