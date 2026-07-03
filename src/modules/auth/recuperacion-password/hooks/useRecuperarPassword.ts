/**
 * Custom hook para manejar la lógica de Recuperación de Contraseña
 */

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { recuperarService } from '../services/recuperarService';
import { useFormSubmit } from '@/shared/hooks/useFormSubmit';
import { recuperarPasswordFormSchema } from 
mimport type { RecuperarPasswordFormData } from '@/shared/schemas/formSchemas';

export function useRecuperarPassword() {
  const [step, setStep] = useState<'email' | 'codigo' | 'nueva-password'>('email');
  const [emailEnviado, setEmailEnviado] = useState('');

  const form = useForm<RecuperarPasswordFormData>({
    resolver: zodResolver(recuperarPasswordFormSchema),
    defaultValues: {
      email: '',
      codigoVerificacion: '',
      nuevaPassword: '',
      confirmarPassword: '',
    },
    mode: 'onChange',
  });

  const { setLoading, setError, setSuccess, isLoading, success, error } = useFormSubmit();

  const enviarCodigo = async (email: string) => {
    try {
      setLoading(true);
      setError(null);

      await recuperarService.enviarCodigo(email);

      setEmailEnviado(email);
      setStep('codigo');
      setSuccess(true);
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Error al enviar el código';
      setError(message);
    } finally {
      setLoading(false);
    }
  };

  const onSubmit = async (data: RecuperarPasswordFormData) => {
    try {
      setLoading(true);
      setError(null);

      await recuperarService.recuperarPassword(data);

      setSuccess(true);
      setStep('nueva-password');

      setTimeout(() => {
        form.reset();
      }, 500);
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Error al recuperar la contraseña';
      setError(message);
    } finally {
      setLoading(false);
    }
  };

  return {
    form,
    onSubmit,
    enviarCodigo,
    step,
    emailEnviado,
    isLoading,
    success,
    error,
  };
}



