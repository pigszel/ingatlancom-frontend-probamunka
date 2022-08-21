export default (value) => {
  return value
    .replace(/[^0-9]/g, '')
    .replace(/(\d{2})(\d{2})(\d{4})(\d{3})/, '(+$1) $2 / $3-$4')
}
