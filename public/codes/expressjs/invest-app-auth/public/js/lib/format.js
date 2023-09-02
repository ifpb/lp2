export function formatCurrency(value) {
  return Number(value).toLocaleString('pt-br', {
    style: 'currency',
    currency: 'BRL',
  });
}

export function formatDate(value, pattern) {
  const date = new Date(value).toLocaleDateString('pt-br');

  if (pattern === 'ymd') {
    return date.split('/').reverse().join('-');
  } else {
    return date;
  }
}
