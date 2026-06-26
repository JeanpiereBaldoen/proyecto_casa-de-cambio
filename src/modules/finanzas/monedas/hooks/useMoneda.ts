/**
 * Custom hook para Moneda
 */

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { monedaService } from '../services/monedaService';
import { useFormSubmit } from '@/shared/hooks/useFormSubmit';
import { monedaFormSchema }
import type { MonedaFormData } from '@/shared/schemas/formSchemas';

export function useMoneda(id?: string) {
  const form = useForm<MonedaFormData>({
    resolver: zodResolver(monedaFormSchema),
    defaultValues: {
      nombre: '',
      codigo: '',
      simbolo: '',
      activa: true,
    },
    mode: 'onChange',
  });

  const { setLoading, setError, setSuccess, isLoading, success, error } = useFormSubmit();

  const onSubmit = async (data: MonedaFormData) => {
    try {
      setLoading(true);
      setError(null);

      await monedaService.save(data);

      setSuccess(true);
      setTimeout(() => {
        form.reset();
      }, 500);
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Error al guardar moneda';
      setError(message);
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


