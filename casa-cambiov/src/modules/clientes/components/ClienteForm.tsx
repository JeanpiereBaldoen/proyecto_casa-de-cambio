export const ClienteForm = () => {
  return (
    <form>
      <input
        type="text"
        placeholder="DNI"
        className="form-control mb-2"
      />

      <input
        type="text"
        placeholder="Nombres"
        className="form-control mb-2"
      />

      <button className="btn btn-primary">
        Guardar
      </button>
    </form>
  );
};