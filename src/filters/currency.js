export default (value, currency = 'HUF') => {
  if (typeof value !== 'number') return

  const currencyMapper = {
    Ft: 'HUF',
    Euro: 'EUR',
  }

  const formatter = new Intl.NumberFormat('hu-HU', {
    style: 'currency',
    currency: currencyMapper?.[currency] || currency,
    maximumSignificantDigits: 3,
  })

  return formatter.format(value)
}
