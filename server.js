const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const userRoutes = require("./Routes/userRoutes");

const app = express();

// middleware
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect("mongodb://127.0.0.1:27017/userFormDB")
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

// routes
app.use("/api/users", userRoutes);

// test route
app.get("/", (req, res) => {
  res.send("Backend is running");
});

// server start
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
