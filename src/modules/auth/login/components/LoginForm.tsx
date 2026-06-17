import type { FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { useLogin } from "../hooks/useLogin";

export const LoginForm = () => {
  const navigate = useNavigate();
  const { values, handleChange, login, isLoading, error } = useLogin();

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      await login();
      navigate("/dashboard");
    } catch (e) {
      // error shown by hook
    }
  };

  return (
    <div className="w-full max-w-md bg-slate-800 rounded-xl shadow-2xl p-8 text-gray-100">
      <div className="text-center mb-4">
        <h2 className="text-2xl font-extrabold">Iniciar Sesión</h2>
        <p className="text-sm text-slate-400 mt-2">Bienvenido — Accede a tu panel de Casa de Cambios</p>
      </div>

      <div className="text-sm text-slate-400 mb-4">📌 GUÍA DEL EQUIPO: Este formulario pertenece al módulo de Auth.</div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="email" className="block text-sm text-slate-300">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            value={values.email}
            onChange={handleChange}
            required
            className="mt-1 w-full bg-slate-700 border border-slate-700 focus:border-emerald-500 focus:ring-emerald-500 rounded-lg p-3 text-gray-100 outline-none transition"
          />
        </div>

        <div>
          <label htmlFor="password" className="block text-sm text-slate-300">Contraseña</label>
          <input
            id="password"
            name="password"
            type="password"
            value={values.password}
            onChange={handleChange}
            required
            className="mt-1 w-full bg-slate-700 border border-slate-700 focus:border-emerald-500 focus:ring-emerald-500 rounded-lg p-3 text-gray-100 outline-none transition"
          />
        </div>

        {error ? (
          <div className="text-sm text-red-300">{error}</div>
        ) : null}

        <button
          type="submit"
          disabled={isLoading}
          className="w-full mt-2 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-3 rounded-lg transition disabled:opacity-60"
        >
          {isLoading ? "Cargando..." : "Iniciar Sesión"}
        </button>
      </form>
    </div>
  );
};
