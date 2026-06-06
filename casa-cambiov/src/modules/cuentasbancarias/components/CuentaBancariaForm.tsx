export const CuentaBancariaForm = () => {
  return (
    <form>

      <div className="mb-3">
        <label className="form-label">
          Banco
        </label>

        <input
          type="text"
          className="form-control"
          placeholder="BCP"
        />
      </div>

      <div className="mb-3">
        <label className="form-label">
          Número de Cuenta
        </label>

        <input
          type="text"
          className="form-control"
          placeholder="1234567890"
        />
      </div>

      <div className="mb-3">
        <label className="form-label">
          Tipo de Cuenta
        </label>

        <select className="form-select">
          <option>Ahorros</option>
          <option>Corriente</option>
        </select>
      </div>

      <div className="mb-3">
        <label className="form-label">
          Moneda
        </label>

        <select className="form-select">
          <option>PEN</option>
          <option>USD</option>
          <option>EUR</option>
        </select>
      </div>

      <div className="mb-3">
        <label className="form-label">
          Saldo
        </label>

        <input
          type="number"
          className="form-control"
        />
      </div>

      <button
        type="submit"
        className="btn btn-primary"
      >
        Guardar Cuenta
      </button>

    </form>
  );
};