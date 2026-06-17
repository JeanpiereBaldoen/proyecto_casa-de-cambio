export const ConfiguracionForm = () => {
  return (
    <form>

      <div className="mb-3">
        <label className="form-label">
          Nombre Empresa
        </label>

        <input
          type="text"
          className="form-control"
          placeholder="Casa de Cambio XYZ"
        />
      </div>

      <div className="mb-3">
        <label className="form-label">
          RUC
        </label>

        <input
          type="text"
          className="form-control"
          placeholder="20123456789"
        />
      </div>

      <div className="mb-3">
        <label className="form-label">
          Dirección
        </label>

        <input
          type="text"
          className="form-control"
        />
      </div>

      <div className="mb-3">
        <label className="form-label">
          Teléfono
        </label>

        <input
          type="text"
          className="form-control"
        />
      </div>

      <div className="mb-3">
        <label className="form-label">
          Correo
        </label>

        <input
          type="email"
          className="form-control"
        />
      </div>

      <button
        type="submit"
        className="btn btn-primary"
      >
        Guardar Configuración
      </button>

    </form>
  );
};