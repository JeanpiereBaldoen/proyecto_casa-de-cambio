export const AperturaCajaForm = () => {
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
          placeholder="0.00"
        />
      </div>

      <div className="mb-3">
        <label className="form-label">
          Observación
        </label>

        <textarea
          className="form-control"
          rows={3}
        ></textarea>
      </div>

      <button
        type="submit"
        className="btn btn-success"
      >
        Abrir Caja
      </button>

    </form>
  );
};