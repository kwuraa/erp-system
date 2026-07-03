import { NavLink } from 'react-router-dom';

const menu = [
    {
        path: "/dashboard",
        title: "Dashboard",
    },
    {
        path: "/customers",
        title: "Clientes",
    },
    {
        path: "/products",
        title: "Produtos",
    },
    {
        path: "/orders",
        title: "Pedidos",
    },
    {
        path: "/users",
        title: "Usuários",
    },
    {
        path: "/settings",
        title: "Configurações",
    },
];

export function Sidebar() {
    return(
        <aside>
            <nav>
                <ul>
                    {menu.map((item) => (
                        <li key={item.path}>
                            <NavLink to={item.path}>{item.title}</NavLink>
                        </li>
                    ))}
                </ul>
            </nav>
        </aside>
    )
}