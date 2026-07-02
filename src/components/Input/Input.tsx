import styles from "./Input.module.css"

interface InputProps {
    type?: "text" | "email" | "password";
    label?: string;
}

export function Input({
    type = "text", label 
}: InputProps) {
    return (
    <div className={styles.inputGroup}>
        <input className={styles.input} type={type} placeholder=" "/>
        <label className={styles.floatingLabel}>{label}</label>
    </div>
    )
}