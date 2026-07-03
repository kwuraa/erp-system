import styles from "./Login.module.css"
import {Button} from "../../components/Button"
import {Input} from "../../components/Input"
import {useNavigate} from "react-router-dom"

 export function Login() {
    const navigate = useNavigate();

    function handleLogin() {
        
        navigate("/dashboard")
    }

    return (
        <>
        <section className={styles.sectionLogin}>
            <div className={styles.containerLogin}>
                
            
            <h1 className={styles.loginTittle}> ERP System</h1>
            <form>
                <Input type="text" label="Usuario" />
                <Input type="password" label="Senha"/>
            
            <div className={styles.buttonGroup}>
                <Button text="Entrar" onClick={handleLogin}/>
                <Button text="Criar Conta" variant="secondary"/>
            </div>
            </form>
            </div>
            
        </section>
        </>
    )
}
