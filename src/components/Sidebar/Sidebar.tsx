import { NavLink } from 'react-router-dom';
import style from "./Sidebar.module.css"

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
        <aside className={style.sidebar}>
            <nav>
                <ul>
                    {menu.map((item) => (
                        <li className={style.link} key={item.path}>
                            <NavLink to={item.path}>{item.title}</NavLink>
                        </li>
                    ))}
                </ul>
            </nav>
        </aside>
    )
}