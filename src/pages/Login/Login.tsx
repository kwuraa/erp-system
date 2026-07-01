import styles from "./Login.module.css"
import {Button} from "../../components/Button"
import {Input} from "../../components/Input"

function Login() {
    return (
        <>
        <section className={styles.sectionLogin}>
            <div className={styles.containerLogin}>
                
            
            <h1> ERP System</h1>
            <form>
                <Input type="text" placeholder="Usuario"/>
                <Input type="password" placeholder="senha"/>
               
                <Button text="Entrar" />
            </form>
            </div>
            
        </section>
        </>
    )
}

export default Login