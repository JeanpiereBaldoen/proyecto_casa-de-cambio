export const CierreCajaForm = () => {
  return (
    <form>

      <div className="mb-3">
        <label className="form-label">
          Fecha
        </label>

        <input
          type="date"
          className="form-control"
        />
      </div>

      <div className="mb-3">
        <label className="form-label">
          Usuario
        </label>

        <input
          type="text"
          className="form-control"
          placeholder="Usuario"
        />
      </div>

      <div className="mb-3">
        <label className="form-label">
          Monto Inicial
        </label>

        <input
          type="number"
          className="form-control"
        />
      </div>

      <div className="mb-3">
        <label className="form-label">
          Monto Final
        </label>

        <input
          type="number"
          className="form-control"
        />
      </div>

      <div className="mb-3">
        <label className="form-label">
          Diferencia
        </label>

        <input
          type="number"
          className="form-control"
        />
      </div>

      <div className="mb-3">
        <label className="form-label">
          Observación
        </label>

        <textarea
          className="form-control"
          rows={3}
        />
      </div>

      <button
        type="submit"
        className="btn btn-danger"
      >
        Cerrar Caja
      </button>

    </form>
  );
};