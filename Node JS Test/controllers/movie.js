import { v4 as uuidv4 } from "uuid";

// resource
let movies = [];

// get all movies
export const getMovie = (req, res) => {
  res.status(200).send(movies);
};

// get movies by id
export const getMovieByID = (req, res) => {
  const id = req.params.id;

  const foundMovie = movies.find((user) => user.id === id);
  foundMovie && res.status(200).send(foundMovie);
  res.status(404).send("MOVIE NOT FOUND !");
};

// insert movie
export const insertMovie = (req, res) => {
  const movie = req.body;
  const genID = uuidv4();
  if (movie.title && movie.director && movie.release_data) {
    movies.push({
      id: genID,
      title: movie.title,
      director: movie.director,
      release_data: movie.release_data,
    });
    res.status(201).send(`MOVIE CREATED WITH ID : ${genID}`);
  }
  res
    .status(400)
    .send(
      "MISSING REQUIRED DATA ! , MAKE SURE TITLE / DIRECTOR / RELEASE_DATA FILLED PROPERLY"
    );
};

// update Movie
export const updateMovie = (req, res) => {
  const id = req.params.id;
  const { title, director, release_data } = req.body;

  const movie = movies.find((movie) => movie.id === id);

  if (movie) {
    if (title || director || release_data) {
      title && (movie.title = title);
      director && (movie.director = director);
      release_data && (movie.release_data = release_data);

      res.status(200).send("MOVIE UPDATED !");
    }
    res.status(200).send("NOTHING CHANGED !");
  }

  res.status(404).send("MOVIE NOT FOUND !");
};

// delete Movie
export const deleteMovie = (req, res) => {
  const id = req.params.id;
  const isMovieExist = movies.find((movie) => movie.id === id);

  if (isMovieExist) {
    movies = movies.filter((movie) => {
      return movie.id !== id;
    });
    res.status(200).send("MOVIE DELETED SUCCESSFULLY !");
  }
  res.status(404).send(`THE MOVIE WITH ID : ${id} NOT FOUND IN THE DATABASE`);
};
