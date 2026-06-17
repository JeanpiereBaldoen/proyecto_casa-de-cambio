import { ReactNode } from "react";

const Widget = ({ title, value }: { title: string; value: string | number }) => (
  <div className="bg-slate-800 rounded-xl p-6 shadow-lg">
    <div className="text-sm text-slate-300">{title}</div>
    <div className="mt-3 text-2xl font-extrabold text-white">{value}</div>
  </div>
);

export const DashboardPage = () => {
  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <p className="text-sm text-slate-400">Resumen rápido de operaciones y métricas</p>
      </div>

      <div className="mb-4 p-4 rounded-lg bg-slate-800 border-l-4 border-emerald-500 text-slate-100">
        📌 GUÍA DEL EQUIPO: Este Dashboard pertenece al Módulo de Administración. Aquí van los gráficos reales.
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Widget title="Usuarios Activos" value={124} />
        <Widget title="Total Cambiado Hoy (S/)" value={"S/ 45,320"} />
        <Widget title="Ganancias" value={"S/ 1,234"} />
      </div>
    </div>
  );
};
