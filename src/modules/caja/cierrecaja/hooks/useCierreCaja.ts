/**
 * Custom hook para Cierre de Caja
 */

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { cierreCajaService } from '../services/cierreCajaService';
import { useFormSubmit } from '@/shared/hooks/useFormSubmit';
import { cierreCajaFormSchema }
import type { CierreCajaFormData } from '@/shared/schemas/formSchemas';

export function useCierreCaja() {
  const form = useForm<CierreCajaFormData>({
    resolver: zodResolver(cierreCajaFormSchema),
    defaultValues: {
      usuarioId: '',
      monedas: [],
    },
    mode: 'onChange',
  });

  const { setLoading, setError, setSuccess, isLoading, success, error } = useFormSubmit();

  const onSubmit = async (data: CierreCajaFormData) => {
    try {
      setLoading(true);
      setError(null);

      await cierreCajaService.save(data);

      setSuccess(true);
      setTimeout(() => {
        form.reset();
      }, 500);
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Error al cerrar caja';
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
