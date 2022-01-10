import express from "express";
import movieRouter from './routers/movie.js'

const app = express();
app.use(express.json())
app.use('/movie', movieRouter)

export default app