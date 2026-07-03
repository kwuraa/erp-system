import styles from "./DashboardCard.module.css";

interface DashboardCardProps {
    title: string;
    value: string | number;
}

export function DashboardCard({
    title,
    value,
}: DashboardCardProps) {
    return (
        <article className={styles.cards}>
            <h3>{title}</h3>

            <strong>{value}</strong>
        </article>
    );
}