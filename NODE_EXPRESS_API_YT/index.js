// express module
import express from "express";

// middleware
// express.json(); // another middleware option
import bodyParser from "body-parser"

// import userRouter from router directory
import userRoutes from "./routes/users.js"

// init express app 
const app = express();
// specify port
const PORT = 5000;

// bodyParser middleware
app.use(bodyParser.json());
// setup user route
app.use('/users', userRoutes);

// Create first route => a default router
app.get('/',(req, res) => {
    res.send("Hello From Home")
})

// make app to listen
app.listen(PORT, () => console.log(`Server running on port: http://localhost:${PORT}`))
