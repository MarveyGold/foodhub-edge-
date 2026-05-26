import { getProducts } from "$lib/server/products";

export async function load() {
  const menu = await getProducts()
  return menu
}
