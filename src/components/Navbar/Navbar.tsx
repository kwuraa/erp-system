import style from "./Navbar.module.css"

export function Navbar(){
    return (
        <header className={style.navbar}>
            <h2>ERP System</h2>

            <div className={style.user}>
                <span>Kawamura</span>
                <div className={style.avatar}>K</div>
            </div>
        </header>
    )
}