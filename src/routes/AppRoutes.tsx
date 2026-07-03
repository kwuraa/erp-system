import { Routes, Route } from "react-router-dom";

import { AuthLayout } from "../layouts/AuthLayout";
import { MainLayout } from "../layouts/MainLayout";

import { Login } from "../pages/Login";
import { Dashboard } from "../pages/Dashboard/Dashboard"
// import { Customers } from "../pages/Customers";
// import { Products } from "../pages/Products";
// import { NotFound } from "../pages/NotFound";

export function AppRoutes() {
    return (
        <Routes>
            <Route element={<AuthLayout />}>
                <Route path="/" element={<Login />} />
                <Route path="/login" element={<Login />} />
            </Route>

            <Route element={<MainLayout/>}>
                <Route path="/dashboard" element={<Dashboard/>}/>
            </Route>
        </Routes>
    );
}