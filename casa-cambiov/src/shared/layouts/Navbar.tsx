import { NavLink } from "react-router-dom";

export const Navbar = () => {
  return (
    <header className="w-full bg-slate-950 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="text-xl font-bold text-white">CasaCambio</div>
          </div>

          <nav className="flex items-center gap-4">
            <NavLink to="/dashboard" className={({isActive}) => `text-sm px-3 py-2 rounded-md ${isActive ? 'bg-slate-800 text-emerald-400' : 'text-slate-300 hover:text-emerald-300'}`}>
              Dashboard
            </NavLink>
            <NavLink to="/clientes" className={({isActive}) => `text-sm px-3 py-2 rounded-md ${isActive ? 'bg-slate-800 text-emerald-400' : 'text-slate-300 hover:text-emerald-300'}`}>
              Clientes
            </NavLink>
            <NavLink to="/monedas" className={({isActive}) => `text-sm px-3 py-2 rounded-md ${isActive ? 'bg-slate-800 text-emerald-400' : 'text-slate-300 hover:text-emerald-300'}`}>
              Monedas
            </NavLink>
            <NavLink to="/tipos-cambio" className={({isActive}) => `text-sm px-3 py-2 rounded-md ${isActive ? 'bg-slate-800 text-emerald-400' : 'text-slate-300 hover:text-emerald-300'}`}>
              Tipos de Cambio
            </NavLink>
          </nav>
        </div>
      </div>
    </header>
  );
};
