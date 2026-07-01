import styles from "./Input.module.css"

interface InputProps {
    type?: "text" | "email" | "password";
    placeholder?: string;
}

export function Input({
    type = "text", placeholder 
}: InputProps) {
    return (
        <input className={styles.input} type={type} placeholder={placeholder} />
    )
}