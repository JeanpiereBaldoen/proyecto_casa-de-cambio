import { Outlet } from 'react-router-dom';
import { Navbar } from './Navbar'; // <-- ¡Solo agrégale las llaves aquí!
import Sidebar from './Sidebar';

const MainLayout = () => {
  return (
    <div style={{ display: 'flex', minHeight: '100vh', background: '#f8f9fa' }}>
      {/* Menu Lateral Fijo */}
      <Sidebar />

      {/* Contenedor del contenido derecho */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        {/* Barra Superior */}
        <Navbar />

        {/* Zona de contenido dinámico donde cambian las páginas */}
        <main style={{ flex: 1, padding: '24px', overflowY: 'auto' }}>
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default MainLayout;