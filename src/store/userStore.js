import { create } from 'zustand'
export const userStore = create((set) => ({
  numTarjeta: null,
  passTarjeta: null,
  numAhorro: null,
  passAhorro: null,
  numNequi: null,
  passNequi: null,
  billetesStructure: {},
  getNumTarjeta: (value) =>
    set((state) => ({
      numTarjeta: value,
    })),
  getPassTarjeta: (value) =>
    set((state) => ({
      passTarjeta: value,
    })),
  getNumAhorro: (value) =>
    set((state) => ({
      numAhorro: value,
    })),
  getPassAhorro: (value) =>
    set((state) => ({
      passAhorro: value,
    })),
  getNumNequi: (value) =>
    set((state) => ({
      numNequi: value,
    })),
  getPassNequi: (value) =>
    set((state) => ({
      passNequi: value,
    })),
  getBilletesStructure: (value) =>
    set((state) => ({
      billetesStructure: value,
    })),
}))
