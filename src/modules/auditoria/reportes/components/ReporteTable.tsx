export const ReporteTable = () => {
  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th>ID</th>
          <th>Tipo</th>
          <th>Fecha Inicio</th>
          <th>Fecha Fin</th>
          <th>Total Operaciones</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>1</td>
          <td>Mensual</td>
          <td>01/01/2026</td>
          <td>31/01/2026</td>
          <td>50</td>
        </tr>
      </tbody>
    </table>
  );
};