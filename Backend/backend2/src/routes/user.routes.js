import {Router} from "express"
import { regUser } from "../controllers/user.controller.js"
const route =Router()

router.route("/register").post(regUser)
export default router