const currencyFormatter = new Intl.NumberFormat(undefined, {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
})

export function formatCurrency(value) {
  if (typeof value !== 'number') return String(value)
  return currencyFormatter.format(value)
}

export function formatNumber(value) {
  return String(value)
}
