import { browser } from '$app/environment';

export function getCart() {
  if (!browser) return []
  return JSON.parse(localStorage.getItem('cart') || '[]');
}
export function saveCart(cart: any) {
  if (!browser) return;
  localStorage.setItem("cart", JSON.stringify(cart));
}
export function addToCart(item: any) {
  const cart = getCart();
  console.log(cart)
  cart.push(item);
  console.log('pushed:', cart)
  saveCart(cart)
  console.log('Saved:', getCart())
}
export function removeItem(id: any) {
  const cart = getCart();
  const updated = cart.filter(item => (item.id) !== id);

  saveCart(updated);
}
