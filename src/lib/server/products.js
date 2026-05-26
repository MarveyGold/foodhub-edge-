
import { connectDB } from "$lib/server/db"
import { MenuModel } from "$lib/server/models/Menu"

export async function getProducts() {
  await connectDB()
  const menu = await MenuModel.find().lean()
  return { menu: JSON.parse(JSON.stringify(menu)) }
}
