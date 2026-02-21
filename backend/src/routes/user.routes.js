import {Router} from "express";
import {registerUser, loginUser, logoutUser, getProfile} from "../controllers/user.controllers.js";
import authMiddleware from "../middleware/auth.middleware.js";
 
const router = Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/profile", authMiddleware, getProfile);
router.post("/logout", authMiddleware, logoutUser);

export default router;