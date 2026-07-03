import { Outlet } from "react-router-dom";

import { Navbar } from "../components/Navbar/Navbar";
import { Sidebar } from "../components/Sidebar/Sidebar";

export function MainLayout() {
  return (
    <>
      <Navbar />

      <div className="container">
        <Sidebar />

        <main>
          <Outlet />
        </main>
      </div>
    </>
  );
}