import express from 'express'
import {
  addOrderItems,
  getMyOrders,
  getOrderById,
  updateOrderToPaid,
} from '../controllers/orderController.js'
import { protect } from '../middleware/authMiddleware.js'
const router = express.Router()

//add a new order
router.route('/').post(protect, addOrderItems)
//get logged in user's orders
router.route('/myorders').get(protect, getMyOrders)
//get order by id
router.route('/:id').get(protect, getOrderById)
//update order to paid
router.route('/:id/pay').put(protect, updateOrderToPaid)

export default router
