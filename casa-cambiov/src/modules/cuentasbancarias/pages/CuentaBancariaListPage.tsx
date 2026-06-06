import { CuentaBancariaForm } from "../components/CuentaBancariaForm";

export const CuentaBancariaListPage = () => {
  return (
    <div className="container mt-4">

      <h2>Cuentas Bancarias</h2>

      <CuentaBancariaForm />

      <hr />

      <table className="table table-bordered">
        <thead>
          <tr>
            <th>ID</th>
            <th>Banco</th>
            <th>Número</th>
            <th>Tipo</th>
            <th>Moneda</th>
            <th>Saldo</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>1</td>
            <td>BCP</td>
            <td>1234567890</td>
            <td>Ahorros</td>
            <td>USD</td>
            <td>5000</td>
          </tr>
        </tbody>
      </table>

    </div>
  );
};