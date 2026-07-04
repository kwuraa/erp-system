import {
    LayoutDashboard,
    Users,
    Package,
    ShoppingCart,
    UserCog,
    Settings
} from "lucide-react";

export const sidebarMenu = [
     {
        path: "/dashboard",
        title: "Dashboard",
        icon: LayoutDashboard,
    },
    {
        path: "/customers",
        title: "Clientes",
        icon: Users,
    },
    {
        path: "/products",
        title: "Produtos",
        icon: Package,
    },
    {
        path: "/orders",
        title: "Pedidos",
        icon: ShoppingCart,
    },
    {
        path: "/users",
        title: "Usuários",
        icon: UserCog,
    },
    {
        path: "/settings",
        title: "Configurações",
        icon: Settings,
    },
]

export default sidebarMenu