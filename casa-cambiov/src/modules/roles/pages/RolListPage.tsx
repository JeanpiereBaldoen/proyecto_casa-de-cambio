import { RolForm } from "../components/RolForm";

export const RolListPage = () => {
  return (
    <div className="container mt-4">

      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2>Gestión de Roles</h2>
      </div>

      <RolForm />

      <hr />

      <table className="table table-bordered">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Descripción</th>
            <th>Acciones</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>1</td>
            <td>Administrador</td>
            <td>Acceso completo</td>
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