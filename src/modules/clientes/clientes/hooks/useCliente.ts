/**
 * Custom hook para Cliente
 */

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { clienteService } from '../services/clienteService';
import { useFormSubmit } from '@/shared/hooks/useFormSubmit';
import { clienteFormSchema }
import type { ClienteFormData } from '@/shared/schemas/formSchemas';

export function useCliente(id?: string) {
  const form = useForm<ClienteFormData>({
    resolver: zodResolver(clienteFormSchema),
    defaultValues: {
      tipoDocumento: '',
      numeroDocumento: '',
      nombre: '',
      apellido: '',
      email: '',
      telefono: '',
      direccion: '',
      ciudad: '',
    },
    mode: 'onChange',
  });

  const { setLoading, setError, setSuccess, isLoading, success, error } = useFormSubmit();

  const onSubmit = async (data: ClienteFormData) => {
    try {
      setLoading(true);
      setError(null);

      await clienteService.save(data);

      setSuccess(true);
      setTimeout(() => {
        form.reset();
      }, 500);
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Error al guardar cliente';
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




