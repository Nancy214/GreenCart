import express from 'express'
import {
  authUser,
  deleteUser,
  getUserById,
  getUserProfile,
  getUsers,
  registerUser,
  updateUser,
  updateUserProfile,
} from '../controllers/userController.js'
import { admin, protect } from '../middleware/authMiddleware.js'
const router = express.Router()

//auth user and get token
router.post('/login', authUser)
//get user profile //update user profile
router
  .route('/profile')
  .get(protect, getUserProfile)
  .put(protect, updateUserProfile)

//register a new user // get all users
router.route('/').post(registerUser).get(protect, admin, getUsers)

//delete a user
router
  .route('/:id')
  .delete(protect, admin, deleteUser)
  .get(protect, admin, getUserById)
  .put(protect, admin, updateUser)

export default router
