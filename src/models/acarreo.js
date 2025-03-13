export async function DineroARetirar(monto) {
  let valorAcumulado = 0
  const divisas = [10000, 20000, 50000, 100000]

  var billetes = {}
  for (let d of divisas) {
    billetes[d] = 0
  }

  while (valorAcumulado != monto) {
    for (let i = 0; i < 4; i++) {
      for (let j = i; j < 4; j++) {
        valorAcumulado += divisas[j]
        billetes[divisas[j]] = billetes[divisas[j]] + 1
        if (valorAcumulado > monto) {
          valorAcumulado -= divisas[j]
          billetes[divisas[j]] = billetes[divisas[j]] - 1
          break
        } else if (valorAcumulado == monto) {
          console.log(billetes)
          return billetes
        }
      }
    }
  }
}
