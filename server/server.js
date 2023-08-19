/* Express App */
const express = require("express");
const app = express();

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

  console.log("origin: ", origin);
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

app.get("/test", (req, res) => {
  res.send("Hello World!");
});

app.listen(8000, () => {
  console.log("Facebook server listening on port 8000");
});
