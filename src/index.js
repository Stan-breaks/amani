const express = require("express");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const app = express();
const port = 3000;
const cors = require("cors");
//database
require("./database");

// middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(
  session({
    secret: "fdslajfsnfdsjsdaclcdsmcdskmsmmdsl",
    resave: true,
    saveUninitialized: true,
  }),
);

// routes
app.get("/", (req, res) => {
  res.send("Hello World");
});
app.use("/payment", require("./routes/payment"));

//auth routes
app.use("/auth", require("./routes/auth"));

// start server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
