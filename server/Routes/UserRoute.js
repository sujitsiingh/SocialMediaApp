import express from "express";
import { getUser, updateUser, deleteUser, getAllUsers, followUser, UnFollowUser } from "../Controllers/UserController.js";

const router = express.Router();

// router.get('/', async(req, res)=>{res.send("user route")})

router.get('/:id', getUser)
router.get('/',getAllUsers)
router.put('/:id', updateUser)
router.delete('/:id', deleteUser)
router.put('/:id/follow', followUser)
router.put('/:id/unfollow', UnFollowUser)
export default router;
