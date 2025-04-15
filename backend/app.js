import express from "express"; //importing express
import dotenv from "dotenv";
import cors from "cors";
import userRouter from "./routers/userRouter.js";

const app = express(); // this created an instace of express application.
dotenv.config();

app.use(
  cors({
    origin: "http://localhost:5173",
  })
);
app.use(express.json());

// handling routes
app.use("/", userRouter);

export default app; //exporting the express application instace because, the staring of the server is in the server.js file. there, the 'app' variable is required.

// express() -> creates the application instance
// app.listen() -> starts the server. [ app variable is stored with the application instance. ie; let app = express()]
