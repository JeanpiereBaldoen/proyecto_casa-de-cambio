/**
 * Custom hook para manejar la lógica de Login
 * Separación entre vista (LoginForm) y lógica de negocio
 */

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useAuthStore } from '@/store/authStore';
import { authService } from '../services/authService';
import { useFormSubmit } from '@/shared/hooks/useFormSubmit';
import { loginFormSchema } from '@/shared/schemas/formSchemas';
import type { LoginFormData } from '@/shared/schemas/formSchemas';

export function useLogin() {
  const form = useForm<LoginFormData>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      email: '',
      password: '',
      recuerdame: false,
    },
    mode: 'onChange',
  });

  const { setLoading, setError, setSuccess, isLoading, success, error } = useFormSubmit();
  const login = useAuthStore((state) => state.login);

  const onSubmit = async (data: LoginFormData) => {
    try {
      setLoading(true);
      setError(null);

      // Llamar al servicio de autenticación

      const response = await authService.login({
        email: data.email,
        password: data.password,
        recuerdame: data.recuerdame,
      });

      if (!response || !response.token) {
        throw new Error('Respuesta inválida del servidor');
      }

      // Actualizar store de autenticación
      login(data.email);

      // Marcar como éxito
      setSuccess(true);

      // Limpiar formulario
      setTimeout(() => {
        form.reset();
      }, 500);
      return true;
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Error al iniciar sesión';
      setError(message);
      return false;
    } finally {
      setLoading(false);
    }
  };

  return {
    form,
    onSubmit,
    isLoading,
    success,
    error,
  };
}


