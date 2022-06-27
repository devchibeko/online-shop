import { PrismaClient } from '@prisma/client'

const client = new PrismaClient()

export function allProducts() {
  return client.product.findMany()
}

export function createProduct(name, about, price, cid) {
  return client.product.create({
    data: {
      name,
      about,
      price,
      c_id: cid
    }
  })
}

export function findProductByCategory(cid) {
  return client.product.findMany({
    where: {
      c_id: cid
    }
  })
}