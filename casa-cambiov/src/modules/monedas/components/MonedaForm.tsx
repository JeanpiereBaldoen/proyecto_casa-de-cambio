export const MonedaForm = () => {
  return (
    <form>
      <input
        type="text"
        className="form-control mb-2"
        placeholder="Nombre"
      />

      <input
        type="text"
        className="form-control mb-2"
        placeholder="Código"
      />

      <button className="btn btn-success">
        Guardar
      </button>
    </form>
  );
};