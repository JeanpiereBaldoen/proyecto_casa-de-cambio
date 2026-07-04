export const endpoints = {
  auth: {
    login: '/auth/login',
  },
  clientes: {
    base: '/clientes',
    activos: '/clientes?activos=true',
  },
  monedas: {
    base: '/finanzas/monedas',
    activos: '/finanzas/monedas?activa=true',
  },
  tiposCambio: {
    base: '/finanzas/tipos-cambio',
    activos: '/finanzas/tipos-cambio?activos=true',
  },
} as const;

