import { ComprobanteForm } from "../components/ComprobanteForm";

export const ComprobanteListPage = () => {
  return (
    <div className="container mt-4">

      <h2>Comprobantes</h2>

      <ComprobanteForm />

      <hr />

      <table className="table table-bordered">
        <thead>
          <tr>
            <th>ID</th>
            <th>Número</th>
            <th>Tipo</th>
            <th>Cliente</th>
            <th>Monto</th>
            <th>Fecha</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>1</td>
            <td>CMP-0001</td>
            <td>Boleta</td>
            <td>Juan Pérez</td>
            <td>1500</td>
            <td>2026-06-02</td>
          </tr>
        </tbody>
      </table>

    </div>
  );
};