const express = require("express");
const cors = require("cors");

const app = express();

let allowed = ["http://localhost:4000", "http://localhost:3001"];

const options = (req, res) => {
  let temp;
  let origin = req.header("origin");
  console.log("origin", origin);
  if (allowed.includes(origin)) {
    console.log("ya");
    temp = {
      origin: true,
      optionSuccessStatus: 200,
    };
  } else {
    temp = {
      origin: false,
    };
  }
  return res(null, temp);
};

// const options = {
//   origin: "http://localhost:3000",
//   useSuccessStatus: 200,
// };

app.use(cors(options));

app.get("/test", (req, res) => {
  res.send("Hello World!");
});

app.listen(8000, () => {
  console.log("Facebook server listening on port 8000");
});
