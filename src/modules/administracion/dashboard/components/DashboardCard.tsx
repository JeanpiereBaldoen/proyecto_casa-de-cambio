interface DashboardCardProps {
  titulo: string;
  valor: string | number;
}

export const DashboardCard = ({
  titulo,
  valor,
}: DashboardCardProps) => {
  return (
    <div className="card shadow-sm mb-3">
      <div className="card-body text-center">
        <h6 className="card-title text-muted">
          {titulo}
        </h6>

        <h2 className="fw-bold">
          {valor}
        </h2>
      </div>
    </div>
  );
};