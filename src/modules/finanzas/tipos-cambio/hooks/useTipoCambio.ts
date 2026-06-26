/**
 * Custom hook para Tipo de Cambio
 */

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { tipoCambioService } from '../services/tipoCambioService';
import { useFormSubmit } from '@/shared/hooks/useFormSubmit';
import { tipoCambioFormSchema } from '@/shared/schemas/formSchemas';
import type { TipoCambioFormData } from '@/shared/schemas/formSchemas';

export function useTipoCambio(id?: string) {
  const form = useForm<TipoCambioFormData>({
    resolver: zodResolver(tipoCambioFormSchema),
    defaultValues: {
      monedaOrigen: '',
      monedaDestino: '',
      precioCompra: 0,
      precioVenta: 0,
      fechaVigencia: new Date().toISOString().split('T')[0],
    },
    mode: 'onChange',
  });

  const { setLoading, setError, setSuccess, isLoading, success, error } = useFormSubmit();

  const onSubmit = async (data: TipoCambioFormData) => {
    try {
      setLoading(true);
      setError(null);

      await tipoCambioService.save(data);

      setSuccess(true);
      setTimeout(() => {
        form.reset();
      }, 500);
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Error al guardar tipo de cambio';
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

