import {Router} from 'express'
import { adminService } from '../services'
const adminRoutes=Router()

adminRoutes.get('/login',adminService.login)