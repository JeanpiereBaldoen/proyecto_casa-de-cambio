/**
 * Custom hook para Apertura de Caja
 */

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { aperturaCajaService } from '../services/aperturaCajaService';
import { useFormSubmit } from '@/shared/hooks/useFormSubmit';
import { aperturaCajaFormSchema }
import type { AperturaCajaFormData } from '@/shared/schemas/formSchemas';

export function useAperturaCaja() {
  const form = useForm<AperturaCajaFormData>({
    resolver: zodResolver(aperturaCajaFormSchema),
    defaultValues: {
      usuarioId: '',
      montoInicial: 0,
      monedas: [],
    },
    mode: 'onChange',
  });

  const { setLoading, setError, setSuccess, isLoading, success, error } = useFormSubmit();

  const onSubmit = async (data: AperturaCajaFormData) => {
    try {
      setLoading(true);
      setError(null);

      await aperturaCajaService.save(data);

      setSuccess(true);
      setTimeout(() => {
        form.reset();
      }, 500);
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Error al abrir caja';
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
}\n
