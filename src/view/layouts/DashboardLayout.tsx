import { Outlet } from "react-router-dom";
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";

export function DashboardLayout() {
  return(
    <div className="h-full flex">
      <Sidebar />

      <main className="flex flex-col w-full gap-8">
        <Header />
        <div className="h-full w-full px-8">
          <Outlet />
        </div>
      </main>
    </div>
  );
}