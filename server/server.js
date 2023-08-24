/* Express App */
const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");

dotenv.config();

const PORT = process.env.PORT;

app.use(express.json());

mongoose
  .connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("Connected to Database");
  })
  .catch((err) => {
    console.log("Error connecting to database: ", err);
  });

/** Cors policy */
const cors = require("cors");
let allowed = ["http://localhost:3000", "others"];
// const options = {
//   origin: "http://localhost:3000",
//   useSuccessStatus: 200,
// };
function options(req, res) {
  let temp;
  let origin = req.header("Origin");

  // console.log("origin: ", origin);
  if (allowed.indexOf(origin) > -1) {
    temp = {
      origin: true,
      optionSuccessStatus: 200,
    };
  } else {
    temp = {
      origin: false,
    };
  }
  res(null, temp);
}
app.use(cors(options));

/** Express Routes */
// Normal way
// const userRoutes = require("./routes/user");
// app.use("/", userRoutes);

// Dynamic way
const { readdirSync } = require("fs");
readdirSync("./routes").map((file) =>
  app.use("/", require("./routes/" + file))
);

app.listen(PORT, () => {
  console.log(`Facebook server running on port ${PORT}`);
});
