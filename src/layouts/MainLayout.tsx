import { Outlet } from "react-router-dom";

import { Navbar } from "../components/Navbar/Navbar";
import { Sidebar } from "../components/Sidebar/Sidebar";

import style from "./MainLayout.module.css"

export function MainLayout() {
  return (
    <>
      <Navbar />

      <div className={style.container}>
        <Sidebar />

        <main className={style.content}>
          <Outlet />
        </main>
      </div>
    </>
  );
}