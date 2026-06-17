import { useNavigate } from "react-router-dom";

export const TipoCambioListPage = () => {
  const navigate = useNavigate();

  return (
    <div className="max-w-3xl mx-auto">
      <div className="mb-6">
        <h1 className="text-2xl font-bold">Tipos de Cambio</h1>
        <p className="text-sm text-slate-400">Tipo de cambio oficial — actualizado manualmente</p>
      </div>

      <div className="bg-slate-800 rounded-xl p-8 shadow-2xl text-center">
        <div className="text-sm text-slate-300">Tipo de Cambio (Hoy)</div>
        <div className="mt-3 text-3xl font-extrabold text-white">Compra: <span className="text-emerald-400">3.75</span> — Venta: <span className="text-emerald-400">3.79</span></div>

        <div className="mt-6">
          <button onClick={() => navigate('/tipos-cambio/nuevo')} className="bg-emerald-500 hover:bg-emerald-600 transition text-white font-semibold px-4 py-2 rounded-md">
            Nuevo Tipo de Cambio
          </button>
        </div>

        <div className="mt-4 text-sm text-slate-400">📌 GUÍA DEL EQUIPO: Este componente pertenece al Módulo de Finanzas (Subdominio Tipos de Cambio).</div>
      </div>
    </div>
  );
};
