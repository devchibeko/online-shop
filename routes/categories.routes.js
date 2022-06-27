import { Router } from 'express'
import { allCategories, createCategory, removeCategory, updateCategory } from '../services/categories.service.js'
import { handleError } from './util.js'

const router = Router()

router.get('/', (req, res) => {
  allCategories()
    .then(categories => res.json({
      message: 'All categories',
      categories
    }))
    .catch(err => handleError('All Categories', err, res))
})

router.post('/', (req, res) => {
  let { name } = req.body
  createCategory(name)
  .then(categories => res.json({
    message: 'Create categories', 
    categories
  }))
    .catch(err => handleError('Create Categories', err, res))
})

router.put('/:id', (req, res) => {
  let { name } = req.body
  let id = req.params.id
  createCategory(id, name)
    .then(category => res.json(category))
    .catch(err => handleError('Updata Categories', err, res))
})

router.delete('/:id', (req, res) => {
  removeCategory(+req.params.id)
  .then(category => res.json(category))
  .catch(err => handleError('Delete Categories', err, res))
})

export default router