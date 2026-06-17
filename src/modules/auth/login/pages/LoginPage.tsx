import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../../../../store/authStore";

export const LoginPage = () => {
  const [usuario, setUsuario] = useState("");
  const [password, setPassword] = useState("");

  const login = useAuthStore((state) => state.login);
  const navigate = useNavigate();

  const handleLogin = () => {
    if (usuario && password) {
      login(usuario);
      navigate("/dashboard");
    }
  };

  return (
    <div className="container mt-5">
      <div className="card shadow p-4">

        <h2 className="text-center mb-4">
          Casa de Cambio
        </h2>

        <div className="mb-3">
          <label className="form-label">
            Usuario
          </label>

          <input
            type="text"
            className="form-control"
            placeholder="Ingrese su usuario"
            value={usuario}
            onChange={(e) => setUsuario(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">
            Contraseña
          </label>

          <input
            type="password"
            className="form-control"
            placeholder="Ingrese su contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button
          className="btn btn-primary w-100"
          onClick={handleLogin}
        >
          Iniciar Sesión
        </button>

      </div>
    </div>
  );
};