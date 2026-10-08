// Always show the currency code next to the baht sign so international
// visitors know the price is in Thai baht. Safe if the data already has "THB".
export function formatPrice(price: string): string {
  return `${price.replace(/\s*THB\s*/i, "").trim()} THB`;
}
