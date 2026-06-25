// Disbursement illustrations for HECM proceeds. Educational approximations.
export function monthlyPayment(principal, monthlyRate, months) {
  if (months <= 0) return 0
  if (monthlyRate === 0) return principal / months
  const factor = Math.pow(1 + monthlyRate, -months)
  return (principal * monthlyRate) / (1 - factor)
}

export function buildDisbursement({ option, netAvailable, age, monthlyRate, termYears }) {
  switch (option) {
    case 'lump':
      return { type: 'lump', lumpSum: netAvailable }
    case 'loc':
      return { type: 'loc', lineOfCredit: netAvailable }
    case 'tenure': {
      const months = Math.max((100 - age) * 12, 0)
      return { type: 'tenure', monthlyPayment: monthlyPayment(netAvailable, monthlyRate, months) }
    }
    case 'term': {
      const months = Math.max(termYears * 12, 0)
      return { type: 'term', monthlyPayment: monthlyPayment(netAvailable, monthlyRate, months) }
    }
    default:
      throw new Error(`Unknown disbursement option: ${option}`)
  }
}
