import { PrismaClient } from '@prisma/client'

const client = new PrismaClient()

// barchasi
export function allCategories() {
  return client.category.findMany()
}

// yaratish
export function createCategory(name) {
  return client.category.create({
    data: {
      name
    }
  })
}

export function updateCategory(id, name) {
  return client.category.update({
    data: {
      name
    },
    where: {
      id
    }
  })
}

// o`chirish
export function removeCategory(id) {
  return client.category.delete({
    where: {
      id
    }
  })
}
