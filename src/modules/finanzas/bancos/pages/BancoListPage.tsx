import { BancoForm } from "../components/BancoForm";

export const BancoListPage = () => {
  return (
    <div className="container mt-4">

      <h2>Gestión de Bancos</h2>

      <BancoForm />

      <hr />

      <table className="table table-bordered">
        <thead>
          <tr>
            <th>ID</th>
            <th>Banco</th>
            <th>Código</th>
            <th>Teléfono</th>
            <th>Acciones</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>1</td>
            <td>BCP</td>
            <td>BCP001</td>
            <td>999999999</td>
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