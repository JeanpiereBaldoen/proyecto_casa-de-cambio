import { useState, type ChangeEvent } from "react";

export const useTipoCambio = () => {
  const [precioCompra, setPrecioCompra] = useState(0);
  const [precioVenta, setPrecioVenta] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handlePrecioCompraChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPrecioCompra(Number(event.target.value));
  };

  const handlePrecioVentaChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPrecioVenta(Number(event.target.value));
  };

  const guardarTipoCambio = async () => {
    setIsLoading(true);
    setSuccess(false);

    return new Promise<void>((resolve) => {
      setTimeout(() => {
        setIsLoading(false);
        setSuccess(true);
        resolve();
      }, 1000);
    });
  };

  return {
    precioCompra,
    precioVenta,
    handlePrecioCompraChange,
    handlePrecioVentaChange,
    guardarTipoCambio,
    isLoading,
    success,
  };
};
