import express from 'express'
import {
  authUser,
  getUserProfile,
  registerUser,
} from '../controllers/userController.js'
import { protect } from '../middleware/authMiddleware.js'
const router = express.Router()

//auth user and get token
router.post('/login', authUser)
//get user profile
router.route('/profile').get(protect, getUserProfile)
//register a new user
router.route('/').post(registerUser)

export default router
