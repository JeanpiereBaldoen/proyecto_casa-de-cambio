/**
 * Custom hook para Compra
 */

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { compraService } from '../services/compraService';
import { useFormSubmit } from '@/shared/hooks/useFormSubmit';
import { useCalculations } from '@/shared/hooks/useCalculations';
import { compraFormSchema }
import type { CompraFormData } from '@/shared/schemas/formSchemas';

export function useCompra(id?: string) {
  const form = useForm<CompraFormData>({
    resolver: zodResolver(compraFormSchema),
    defaultValues: {
      clienteId: '',
      monedaId: '',
      montoDivisas: 0,
      tipoCambioAplicado: 0,
      comision: 0,
    },
    mode: 'onChange',
  });

  const { setLoading, setError, setSuccess, isLoading, success, error } = useFormSubmit();
  const { calcularCompra } = useCalculations();

  const onSubmit = async (data: CompraFormData) => {
    try {
      setLoading(true);
      setError(null);

      await compraService.save(data);

      setSuccess(true);
      setTimeout(() => {
        form.reset();
      }, 500);
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Error al registrar compra';
      setError(message);
    } finally {
      setLoading(false);
    }
  };

  return {
    form,
    onSubmit,
    calcularCompra,
    isLoading,
    success,
    error,
  };
}


