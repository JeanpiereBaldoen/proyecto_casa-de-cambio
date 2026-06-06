import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LoginPage } from "../../modules/auth/pages/LoginPage";
import { DashboardPage } from "../../modules/dashboard/pages/DashboardPage";
import { ClienteListPage } from "../../modules/clientes/pages/ClienteListPage";
import { MonedaListPage } from "../../modules/monedas/pages/MonedaListPage";
import { TipoCambioListPage } from "../../modules/tipos-cambio/pages/TipoCambioListPage";
import { CompraListPage } from "../../modules/compras/pages/compraListPage";
import { VentaListPage } from "../../modules/ventas/pages/VentaListPage";
import { OperacionListPage } from "../../modules/operaciones/pages/OperacionListPage";
import { ReporteListPage } from "../../modules/reportes/pages/ReporteListPage";
import { UsuarioListPage } from "../../modules/usuarios/pages/UsuarioListPage";
import { RolListPage } from "../../modules/roles/pages/RolListPage";
import { PermisoListPage } from "../../modules/permisos/pages/PermisoListPage";
import { BancoListPage } from "../../modules/bancos/pages/BancoListPage";
import { CajaListPage } from "../../modules/caja/pages/CajaListPage";
import { PerfilPage } from "../../modules/perfil/pages/PerfilPage";
import { AperturaCajaListPage } from "../../modules/aperturacaja/pages/AperturaCajaListPage";
import { AuditoriaListPage } from "../../modules/auditoria/pages/AuditoriaListPage";
import { BitacoraListPage } from "../../modules/bitacora/pages/BitacoraListPage";
import { CierreCajaListPage } from "../../modules/cierrecaja/pages/CierreCajaListPage";
import { ComprobanteListPage } from "../../modules/comprobantes/pages/ComprobanteListPage";
import { ConfiguracionPage } from "../../modules/configuracion/pages/ConfiguracionPage";
import { CuentaBancariaListPage } from "../../modules/cuentasbancarias/pages/CuentaBancariaListPage";
import { MovimientoCajaListPage } from "../../modules/movimientoscaja/pages/MovimientosCajaListPage";
import { NotificacionPage } from "../../modules/notificaciones/pages/NotificacionPage";
import { TransferenciaListPage } from "../../modules/transferencias/pages/TransferenciaListPage";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/clientes" element={<ClienteListPage />} />
        <Route path="/monedas" element={<MonedaListPage />} />
        <Route path="/tipos-cambio" element={<TipoCambioListPage />} />
        <Route path="/compras" element={<CompraListPage />} />
        <Route path="/ventas" element={<VentaListPage />} />
        <Route path="/operaciones" element={<OperacionListPage />} />
        <Route path="/reportes" element={<ReporteListPage />} />
        <Route path="/usuarios" element={<UsuarioListPage />} />
        <Route path="/roles" element={<RolListPage />} />
        <Route path="/permisos" element={<PermisoListPage />} />
        <Route path="/bancos" element={<BancoListPage />} />
        <Route path="/caja" element={<CajaListPage />} />
        <Route path="/perfil" element={<PerfilPage />} />
        <Route path="/apertura-caja" element={<AperturaCajaListPage />} />
        <Route path="/auditoria" element={<AuditoriaListPage />} />
        <Route path="/bitacora" element={<BitacoraListPage />} />
        <Route path="/cierrecaja" element={<CierreCajaListPage />} />
        <Route path="/comprobantes" element={<ComprobanteListPage />} />
        <Route path="/configuracion" element={<ConfiguracionPage />} />
        <Route path="/cuentasbancarias" element={<CuentaBancariaListPage />} />
        <Route path="/movimientoscaja" element={<MovimientoCajaListPage />} />
        <Route path="/notificaciones" element={<NotificacionPage />} />
        <Route path="/transferencias" element={<TransferenciaListPage />} />

      </Routes> 
    </BrowserRouter>
  );
};