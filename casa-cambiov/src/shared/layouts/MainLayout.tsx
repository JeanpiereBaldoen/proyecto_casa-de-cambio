export const MainLayout = () => {
  return (
    <div className="container-fluid">
      <div className="row">

        <div className="col-2 bg-dark text-white min-vh-100">
          <h3 className="mt-3">Casa Cambio</h3>

          <ul className="nav flex-column mt-4">
            <li className="nav-item">
              <a className="nav-link text-white" href="/dashboard">
                Dashboard
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link text-white" href="/clientes">
                Clientes
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link text-white" href="/monedas">
                Monedas
              </a>
            </li>
          </ul>
        </div>

        <div className="col-10">
          <h1 className="mt-3">Bienvenido</h1>
        </div>

      </div>
    </div>
  );
};