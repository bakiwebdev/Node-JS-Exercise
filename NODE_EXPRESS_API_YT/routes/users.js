import express from "express";
import {
  getUser,
  getUserByID,
  createUser,
  deleteUserByID,
  updateUser,
} from "../controllers/user.js";

const router = express.Router();

// router to get the user
router.get("/", getUser);

// router to get user with id
router.get("/:id", getUserByID);

// router to delete user by id
router.delete("/:id", deleteUserByID);

// router to put new data to the database
router.post("/", createUser);

// router to update data partially
router.patch("/:id", updateUser);

export default router;
