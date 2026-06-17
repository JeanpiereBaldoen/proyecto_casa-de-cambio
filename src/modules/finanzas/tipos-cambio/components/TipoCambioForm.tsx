import type { FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { useTipoCambio } from "../hooks/useTipoCambio";

export const TipoCambioForm = () => {
  const navigate = useNavigate();
  const {
    precioCompra,
    precioVenta,
    handlePrecioCompraChange,
    handlePrecioVentaChange,
    guardarTipoCambio,
    isLoading,
    success,
  } = useTipoCambio();

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await guardarTipoCambio();
  };

  return (
    <div className="max-w-lg mx-auto bg-slate-800 rounded-xl p-6 shadow-lg text-gray-100">
      <h3 className="text-xl font-bold mb-2">Actualizar Tipo de Cambio</h3>
      <div className="text-sm text-slate-400 mb-4">📌 GUÍA DEL EQUIPO: Este formulario pertenece al Subdominio Tipos de Cambio.</div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="precioCompra" className="block text-sm text-slate-300">Precio de compra</label>
          <input id="precioCompra" name="precioCompra" type="number" step="0.01" value={precioCompra} onChange={handlePrecioCompraChange} className="mt-1 w-full bg-slate-700 border border-slate-700 focus:border-emerald-500 focus:ring-emerald-500 rounded-lg p-3 text-gray-100 outline-none" />
        </div>

        <div>
          <label htmlFor="precioVenta" className="block text-sm text-slate-300">Precio de venta</label>
          <input id="precioVenta" name="precioVenta" type="number" step="0.01" value={precioVenta} onChange={handlePrecioVentaChange} className="mt-1 w-full bg-slate-700 border border-slate-700 focus:border-emerald-500 focus:ring-emerald-500 rounded-lg p-3 text-gray-100 outline-none" />
        </div>

        <div>
          <button type="submit" disabled={isLoading} className="bg-emerald-500 hover:bg-emerald-600 px-4 py-2 rounded-md text-white font-semibold transition disabled:opacity-60">
            {isLoading ? 'Guardando...' : 'Guardar'}
          </button>
        </div>
      </form>

      {success ? (
        <div className="mt-4 p-4 rounded-md bg-emerald-900 text-emerald-100">
          <div className="font-semibold">¡Éxito! Tipo de cambio actualizado correctamente.</div>
          <div className="mt-3">
            <button onClick={() => navigate('/tipos-cambio')} className="bg-amber-400 hover:bg-amber-500 px-3 py-1 rounded-md font-semibold">Volver al listado</button>
          </div>
        </div>
      ) : null}
    </div>
  );
};
