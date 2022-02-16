import express from "express";
import {
  getMovie,
  getMovieByID,
  insertMovie,
  updateMovie,
  deleteMovie,
} from "../controllers/movie.js";
const router = express.Router();

// get all movies
router.get("/", getMovie);

// get movie by id
router.get("/:id", getMovieByID);

// insert movie
router.post("/", insertMovie);

//update movie by id
router.patch("/:id", updateMovie);

// delete movie form array
router.delete("/:id", deleteMovie);
export default router;
