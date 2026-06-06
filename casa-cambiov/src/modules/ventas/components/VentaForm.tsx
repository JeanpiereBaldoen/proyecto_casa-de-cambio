export const VentaForm = () => {
  return (
    <form>
      <input
        type="text"
        className="form-control mb-2"
        placeholder="Cliente"
      />

      <input
        type="number"
        className="form-control mb-2"
        placeholder="Monto"
      />

      <button className="btn btn-success">
        Registrar Venta
      </button>
    </form>
  );
};