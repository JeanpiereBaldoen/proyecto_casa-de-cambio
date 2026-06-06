export const TipoCambioForm = () => {
  return (
    <form>
      <input
        type="number"
        className="form-control mb-2"
        placeholder="Tipo Compra"
      />

      <input
        type="number"
        className="form-control mb-2"
        placeholder="Tipo Venta"
      />

      <button className="btn btn-warning">
        Guardar
      </button>
    </form>
  );
};