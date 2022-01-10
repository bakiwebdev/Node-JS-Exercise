import { expect } from "@jest/globals";
import { async } from "regenerator-runtime";
import request from "supertest";
import app from "./app.js";

describe("GET /movie", () => {
  // happy path
  test("should return a status code 200", async () => {
    const response = await request(app).get("/movie");

    expect(response.statusCode).toBe(200);
  });
  test("should specify the content-type when the server request", async () => {
    const response = await request(app).get("/movie");

    expect(response.headers["content-type"]).toEqual(
      expect.stringContaining("json")
    );
  });

  //error path
  test("should return a status code 404 when search with wrong id", async () => {
    const randomID = "nqrwekjroqer";
    const response = await request(app).get(`/movie/${randomID}`);

    expect(response.statusCode).toBe(404);
  });
});

describe("POST /movie", () => {
  // happy path
  describe("given title, directory and release_date", () => {
    test("should return the succuss status 201", async () => {
      const response = await request(app).post("/movie").send({
        title: "Inception",
        director: "Christopher Nolan",
        release_data: "2010-07-162",
      });
      expect(response.statusCode).toBe(201);
    });
  });

  // error path
  describe("when the title, director and release_date missing", () => {
    test("should return with a status code 404", async () => {
      const response = await request(app).post("/movie").send({
        title: "Inception",
        director: "Christopher Nolan",
      });
      expect(response.statusCode).toBe(400);
    });
  });
});

describe("DELETE /movie", () => {
    // happy path
    test("should return status code 200 when delete movies with specified id", async () => {
        // create a movie
        await request(app).post("/movie").send({
            title: "Inception",
            director: "Christopher Nolan",
            release_data: "2010-07-162",
        });
        // get the id of the movie
        const getMovies = await request(app).get("/movie");

        // delete the movie
        const response2 = await request(app).delete(`/movie/${getMovies.body[0].id}`);
        expect(response2.statusCode).toBe(200);
    })
    //error path 
  test("should return status code 404 when try to delete with wrong ID", async () => {
    const randomID = "nqrwekjroqer";
    const response = await request(app).delete(`/movie/${randomID}`);

    expect(response.statusCode).toBe(404);
  });
});
