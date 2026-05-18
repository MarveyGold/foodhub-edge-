import { browser } from '$app/environment';
import { writable } from 'svelte/store';

export function getCart() {
  if (!browser) return []
  return JSON.parse(localStorage.getItem('cart') || '[]');
}
export const cartStore = writable(getCart())
export function saveCart(cart: any) {
  if (!browser) return;
  localStorage.setItem("cart", JSON.stringify(cart));
}
export function addToCart(item: any) {
  const cart = getCart();
  cart.push(item);
  saveCart(cart)
}
export function removeItem(id: any) {
  const cart = getCart();
  const updated = cart.filter(item => { (item.imageUrl) !== id; console.log(item) });
  saveCart(updated);
}
