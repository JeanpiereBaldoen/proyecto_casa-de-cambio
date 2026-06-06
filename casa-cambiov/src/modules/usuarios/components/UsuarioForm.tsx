export const UsuarioForm = () => {
  return (
    <form>
      <input
        type="text"
        className="form-control mb-2"
        placeholder="Usuario"
      />

      <input
        type="text"
        className="form-control mb-2"
        placeholder="Nombres"
      />

      <input
        type="email"
        className="form-control mb-2"
        placeholder="Correo"
      />

      <button className="btn btn-primary">
        Guardar Usuario
      </button>
    </form>
  );
};