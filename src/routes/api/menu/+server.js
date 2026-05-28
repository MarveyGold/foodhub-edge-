import { getProducts } from "$lib/server/products";
import { json } from "@sveltejs/kit";
export async function GET() {
  const menu = await getProducts()
  return json(menu)
}
