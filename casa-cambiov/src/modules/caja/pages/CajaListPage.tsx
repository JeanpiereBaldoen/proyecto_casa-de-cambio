import { CajaForm } from "../components/CajaForm";

export const CajaListPage = () => {
  return (
    <div className="container mt-4">

      <h2>Gestión de Cajas</h2>

      <CajaForm />

      <hr />

      <table className="table table-bordered">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Saldo Inicial</th>
            <th>Saldo Actual</th>
            <th>Estado</th>
            <th>Acciones</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>1</td>
            <td>Caja Principal</td>
            <td>S/ 1000</td>
            <td>S/ 3500</td>
            <td>Activa</td>
            <td>
              <button className="btn btn-warning btn-sm me-2">
                Editar
              </button>

              <button className="btn btn-danger btn-sm">
                Eliminar
              </button>
            </td>
          </tr>
        </tbody>
      </table>

    </div>
  );
};