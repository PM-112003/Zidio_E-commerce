import app from "./app.js";
import connectDB from "./utils/db.js";

const PORT = 5000;

// Connect to MongoDB
connectDB();

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});