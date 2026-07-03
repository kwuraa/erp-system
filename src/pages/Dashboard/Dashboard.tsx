import { DashboardCard } from "../../components/Card/DashboardCard";

export function Dashboard() {
    return (
        <>
            <h1>Dashboard</h1>

            <div>
                <DashboardCard
                    title="Clientes"
                    value={125}
                />

                <DashboardCard
                    title="Produtos"
                    value={53}
                />

                <DashboardCard
                    title="Pedidos"
                    value={18}
                />

                <DashboardCard
                    title="Receita"
                    value="R$ 12.450"
                />
            </div>
        </>
    );
}