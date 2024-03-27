require("dotenv").config();
const uri = process.env.MONGODB_URI;
const mongoose = require("mongoose");
mongoose.set("strictQuery", false);
mongoose
  .connect(uri)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log(err));
