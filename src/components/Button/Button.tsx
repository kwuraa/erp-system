import styles from "./Button.module.css"

interface ButtonProps {
    text: string;
    type?: "button" | "submit" | "reset";
    onClick?: () => void; 
    variant?: "primary" | "secondary"
}

export function Button({ variant = "primary",
    text, type = "button", onClick,
    }: ButtonProps) {

        const buttonClass = `${styles.button} ${styles[variant]}` 
        return (
            <button
            className={buttonClass}
            type={type}
            onClick={onClick}>
                {text}
            </button>
        )

}