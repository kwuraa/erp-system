import styles from "./Button.module.css"

interface ButtonProps {
    text: string;
    type?: "button" | "submit" | "reset";
    onClick?: () => void; 
}

export function Button({
    text, type = "button", onClick,
    }: ButtonProps) {
        return (
            <button
            className={styles.button}
            type={type}
            onClick={onClick}>
                {text}
            </button>
        )

}