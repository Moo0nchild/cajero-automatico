import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export const userStore = create(
  persist(
    (set, get) => ({
      saldoTotal: 0,
      nombre: '',
      valorTransaccion: '',
      transaccionAcumulada: '',
      billetesStructure: {},

      setSaldoTotal: (value) => {
        set({ saldoTotal: value })
      },

      setNombre: (value) => set({ nombre: value }),
      setValorTransaccion: (value) => set({ valorTransaccion: value }),
      setTransaccionAcumulada: (value) => set({ transaccionAcumulada: value }),
      setBilletesStructure: (value) => set({ billetesStructure: value }),

      realizarRetiro: (monto) => {
        const saldoActual = get().saldoTotal

        if (monto > 0 && saldoActual >= monto) {
          const nuevoSaldo = saldoActual - monto
          set({ saldoTotal: nuevoSaldo })
          console.log('Saldo después del retiro:', nuevoSaldo)
        } else {
          console.warn('️Saldo insuficiente o monto inválido')
        }
      },
    }),
    {
      name: 'userStore',
      getStorage: () => sessionStorage,
    }
  )
)
