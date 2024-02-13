function getReviewByRating(rating: number): string {
  if (rating >= 9) return 'Excelente'
  if (rating >= 8) return 'Muito bom'
  if (rating >= 7) return 'Bom'
  if (rating >= 6) return 'Ruim'
  return 'Péssimo'
}

function numberToBrl(currency: number): string {
  return currency.toLocaleString('pt-br', { maximumFractionDigits: 2 })
}

export { getReviewByRating, numberToBrl }
