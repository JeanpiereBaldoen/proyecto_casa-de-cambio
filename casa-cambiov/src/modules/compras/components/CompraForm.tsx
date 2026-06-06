export const CompraForm = () => {
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

      <button className="btn btn-primary">
        Registrar Compra
      </button>
    </form>
  );
};