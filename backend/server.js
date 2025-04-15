import app from "./app.js";
import mongoose from "mongoose";

// use Ctrl + Z in the keyboard to wrap all content within the viewport.

const connect2DB = async () => {
  try {
    const connection_string = process.env.connection_string;
    const port = process.env.port || 4000;
    await mongoose.connect(connection_string);
    app.listen(port, () =>
      console.log(
        `Database connected,\nServer listening for request via port ${port}...`
      )
    );
  } catch (error) {
    console.log("Database connection failed\nServer denied to connect...");
  }
};
connect2DB();
