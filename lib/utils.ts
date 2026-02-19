export function formatPrice(price: number): string {
  return price.toLocaleString('es-PE', {
    style: 'currency',
    currency: 'PEN',
  });
}
