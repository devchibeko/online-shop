import { Router } from "express"
import { createProduct, allProducts, findProductByCategory } from "../services/products.service.js"
import { handleError } from './util.js'

const router = Router()

router.get('/', (req, res) => {
  allProducts()
    .then(products => res.json({
      message: 'All products',
      products
    }))
    .catch(err => handleError('All products', err, res))
})

router.get('/:cid', (req, res) => {
  findProductByCategory(+req.params.cid)
    .then(products => res.json({
      message: 'Products By Category',
      products
    }))
    .catch(err => handleError('Products By Category', err, res))
})

router.post('/', (req, res) => {
  const { name, about, price, cid } = req.body

  createProduct(name, about, price, cid)
    .then(products => res.json({
      message: 'Create Products',
      products
    }))
    .catch(err => handleError('Create Products', err, res))
})


export default router