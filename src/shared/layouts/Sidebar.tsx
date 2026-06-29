import { NavLink } from 'react-router-dom';

interface SidebarLink {
  path: string;
  label: string;
  icon: string;
}

const Sidebar = () => {
  // Definimos los enlaces de navegación para la Casa de Cambio
  const links: SidebarLink[] = [
    { path: '/', label: 'Calculadora / Inicio', icon: '💱' },
    { path: '/historial', label: 'Mis Operaciones', icon: '📜' },
    { path: '/perfil', label: 'Mi Perfil', icon: '👤' },
  ];

  return (
    <aside style={{
      width: '240px',
      background: '#1e1e24',
      color: '#fff',
      height: '100vh',
      padding: '20px 10px',
      display: 'flex',
      flexDirection: 'column',
      gap: '10px',
      boxShadow: '2px 0 5px rgba(0,0,0,0.1)'
    }}>
      <div style={{ marginBottom: '20px', paddingLeft: '10px' }}>
        <h3 style={{ margin: 0, color: '#4ad9e4' }}>Dashboard</h3>
      </div>
      
      <nav style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        {links.map((link) => (
          <NavLink
            key={link.path}
            to={link.path}
            style={({ isActive }) => ({
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              padding: '12px',
              borderRadius: '6px',
              textDecoration: 'none',
              color: isActive ? '#fff' : '#b3b3b3',
              background: isActive ? '#007bff' : 'transparent',
              transition: 'background 0.2s',
            })}
          >
            <span>{link.icon}</span>
            <span>{link.label}</span>
          </NavLink>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;