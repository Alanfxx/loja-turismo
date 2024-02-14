function getReviewByRating(rating: number): string {
  if (rating >= 9) return 'Excelente'
  if (rating >= 8) return 'Muito bom'
  if (rating >= 7) return 'Bom'
  if (rating >= 6) return 'Ruim'
  return 'Péssimo'
}

function numberToBrl(currency: number): string {
  if (!currency) return '-'
  return currency.toLocaleString('pt-br', { maximumFractionDigits: 2 })
}

function addZero(value: number): string {
  const tempValue = value.toString()
  return tempValue.length === 1 ? `0${tempValue}` : tempValue
}

function isValidHttpUrl(value: string) {
  try {
    const newUrl = new URL(value)
    return newUrl.protocol === 'http:' || newUrl.protocol === 'https:'
  } catch (err) {
    return false
  }
}

export { getReviewByRating, numberToBrl, addZero, isValidHttpUrl }
