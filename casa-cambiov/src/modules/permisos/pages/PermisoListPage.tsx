import { PermisoForm } from "../components/PermisoForm";

export const PermisoListPage = () => {
  return (
    <div className="container mt-4">

      <h2>Gestión de Permisos</h2>

      <PermisoForm />

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
            <td>Crear Usuario</td>
            <td>
              Permite registrar usuarios
            </td>
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