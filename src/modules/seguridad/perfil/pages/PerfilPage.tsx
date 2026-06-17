import { PerfilForm } from "../components/PerfilForm";

export const PerfilPage = () => {
  return (
    <div className="container mt-4">

      <h2>Mi Perfil</h2>

      <div className="card p-4 shadow-sm">
        <PerfilForm />
      </div>

    </div>
  );
};