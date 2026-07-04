import { NavLink } from 'react-router-dom';
import style from "./Sidebar.module.css"
import menu from "../../data/sidebarMenu"
import { LayoutDashboard } from "lucide-react";


export function Sidebar() {
    return(
        <aside className={style.sidebar}>
            <nav className={style.menuList}>
                <ul>
                    {menu.map((item) => {
                        const Icon = item.icon;

                        return (
                            <li className={style.link} key={item.path}>
                                <NavLink
                                    to={item.path}
                                    className={({ isActive }) =>
                                        isActive ? style.active : ""
                                    }
                                >
                                    <Icon size={20} />
                                    <span>{item.title}</span>
                                </NavLink>
                            </li>
                        );
                    })}
                </ul>
            </nav>
        </aside>
    )
}