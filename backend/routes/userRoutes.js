import express from 'express'
import { login, logout, register,getUser } from '../controllers/userController.js'
import { isAuthenticated } from '../middlewares/auth.js'

const router = express.Router()
//register user
router.post('/register',register )
//login user
router.post('/login',login)
//logout
router.get('/logout',isAuthenticated,logout)
//get user
router.get("/getuser", isAuthenticated, getUser);
export default router