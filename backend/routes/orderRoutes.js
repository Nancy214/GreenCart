import express from 'express'
import {
  addOrderItems,
  getMyOrders,
  getOrderById,
  getOrders,
  updateOrderToDelivered,
  updateOrderToPaid,
} from '../controllers/orderController.js'
import { protect, admin } from '../middleware/authMiddleware.js'
const router = express.Router()

//add a new order
router.route('/').post(protect, addOrderItems).get(protect, admin, getOrders)
//get logged in user's orders
router.route('/myorders').get(protect, getMyOrders)
//get order by id
router.route('/:id').get(protect, getOrderById)
//update order to paid
router.route('/:id/pay').put(protect, updateOrderToPaid)
//update order to delivered
router.route('/:id/deliver').put(protect, admin, updateOrderToDelivered)

export default router
