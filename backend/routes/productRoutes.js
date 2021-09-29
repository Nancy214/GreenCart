import express from 'express'
import {
  getProducts,
  getProductById,
} from '../controllers/productController.js'
const router = express.Router()

//fetch all products
router.route('/').get(getProducts)

//fetch product by id
router.route('/:id').get(getProductById)

export default router
