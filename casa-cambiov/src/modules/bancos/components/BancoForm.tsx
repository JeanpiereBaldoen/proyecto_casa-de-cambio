export const BancoForm = () => {
  return (
    <form>

      <div className="mb-3">
        <label className="form-label">
          Nombre del Banco
        </label>

        <input
          type="text"
          className="form-control"
          placeholder="BCP"
        />
      </div>

      <div className="mb-3">
        <label className="form-label">
          Código
        </label>

        <input
          type="text"
          className="form-control"
          placeholder="BCP001"
        />
      </div>

      <div className="mb-3">
        <label className="form-label">
          Dirección
        </label>

        <input
          type="text"
          className="form-control"
          placeholder="Av. Principal"
        />
      </div>

      <div className="mb-3">
        <label className="form-label">
          Teléfono
        </label>

        <input
          type="text"
          className="form-control"
          placeholder="999999999"
        />
      </div>

      <button
        type="submit"
        className="btn btn-primary"
      >
        Guardar Banco
      </button>

    </form>
  );
};