import { DashboardStats } from "../components/DashboardStats";
import { DashboardChart } from "../components/DashboardChart";

export const DashboardPage = () => {
  return (
    <div className="container mt-4">
      <h1>Dashboard</h1>

      <DashboardStats />

      <DashboardChart />
    </div>
  );
};