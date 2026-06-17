import { useState, type ChangeEvent } from "react";
import type { LoginRequest } from "../interfaces/LoginRequest";

export const useLogin = () => {
  const [values, setValues] = useState<LoginRequest>({
    email: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setValues((prev) => ({ ...prev, [name]: value }));
  };

  const login = async () => {
    setIsLoading(true);
    setError(null);

    return new Promise<void>((resolve, reject) => {
      setTimeout(() => {
        if (values.email.trim() && values.password.trim()) {
          setIsLoading(false);
          resolve();
        } else {
          setError("Email y contrase�a son requeridos.");
          setIsLoading(false);
          reject(new Error("Datos inv�lidos"));
        }
      }, 1000);
    });
  };

  return {
    values,
    handleChange,
    login,
    isLoading,
    error,
  };
};
