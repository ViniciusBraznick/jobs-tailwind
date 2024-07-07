import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { AuthLayout } from '../view/layouts/AuthLayout';
import { Login } from '../view/pages/Login';
import { Register } from '../view/pages/Register';
// import { NotFound } from '../view/pages/404';
import { Dashboard } from '../view/pages/Dashboard';
import { DashboardLayout } from '../view/layouts/DashboardLayout';
import { AuthGuard } from './AuthGuard';
import { EditAccountData } from '../view/pages/EditAccountData';


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


        <Route element={<AuthGuard isPrivate />}>
          <Route element={<DashboardLayout />}>
            <Route path='/chat' element={<Dashboard />} />
            <Route path='/applications' element={<Dashboard />} />
            <Route path='/preferences' element={<Dashboard />} />
            <Route path='/account/curriculum' element={<Dashboard />} />
            <Route path='/account/security' element={<Dashboard />} />
            <Route path='/account/privacy' element={<Dashboard />} />
            <Route path='/account/data' element={<EditAccountData />} />
            <Route path='/' element={<Dashboard />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}