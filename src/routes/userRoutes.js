import express from "express";
import { createUser, deleteUser, getAllUsers, getUserById, updateUser } from "../controller/userController.js";
import validateUser from "../middlewares/inputValidator.js";

const router = express.Router();

// CRUD routes
router.post('/user', validateUser, createUser);           // Create user
router.get('/user', getAllUsers);           // Get all users
router.get('/user/:id', getUserById);       // Get user by id
router.put('/user/:id',validateUser, updateUser);        // Update user by id
router.delete('/user/:id', deleteUser);     // Delete user by id

export default router;
