export const DashboardChart = () => {
  return (
    <div className="card shadow mt-4">
      <div className="card-body">

        <h4>Resumen de Operaciones</h4>

        <table className="table table-bordered mt-3">
          <thead>
            <tr>
              <th>Mes</th>
              <th>Compras</th>
              <th>Ventas</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>Enero</td>
              <td>120</td>
              <td>95</td>
            </tr>

            <tr>
              <td>Febrero</td>
              <td>140</td>
              <td>110</td>
            </tr>

            <tr>
              <td>Marzo</td>
              <td>160</td>
              <td>130</td>
            </tr>

            <tr>
              <td>Abril</td>
              <td>180</td>
              <td>150</td>
            </tr>
          </tbody>
        </table>

      </div>
    </div>
  );
};