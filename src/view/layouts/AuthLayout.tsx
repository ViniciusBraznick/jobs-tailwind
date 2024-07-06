import { Outlet } from "react-router-dom";
// import illustration2 from '../../assets/illustration-2.png';
import illustration from '../../assets/illustration.png';
import Logo from '../../assets/logo.svg';

export function AuthLayout() {
  return (
    <>
      <div className="flex h-full">
        <main className="flex-1 h-full">
          <section className="flex items-center justify-center h-full">
            <div className="max-w-md m-auto w-11/12">
              <img src={Logo} />
              <Outlet />
            </div>
          </section>
        </main>

        <aside className="flex-1 max-md:hidden h-full ">
          <img className="w-full h-full object-cover" src={illustration} />
        </aside>
      </div>
    </>
  )
}