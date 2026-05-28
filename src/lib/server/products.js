
import { connectDB } from "$lib/server/db"
import { MenuModel } from "$lib/server/models/Menu"

export async function getProducts(category) {
  await connectDB()
  const menu = await MenuModel.find(category ? { category } : {}).lean()
  return menu
}
