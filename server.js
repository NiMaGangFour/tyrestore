const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const Note = require("./models/noteModel");

const port = process.env.PORT || 5000;
// const mongoose = require("mongoose");

// console.log that your server is up and running
app.listen(port, () =>
  console.log(`Server listening at http://localhost: ${port}`)
);

// create a GET route
app.get("/express_backend", (req, res) => {
  res.send({ express: "YOUR EXPRESS BACKEND IS CONNECTED TO REACT" });
});

app.use(bodyParser.json({ type: "application/json" })).use(
  cors({
    methods: ["POST", "GET", "PUT", "DELETE"],
    allowedHeaders: [
      "Access-Control-Allow-Origin",
      "Content-Type",
      "x-access-token"
    ]
  })
);

// Line 1 and 2 is requiring Express and allows us to use it inside of our server.js file.
// Line 3 is setting the port that our Express server will be running on.
// Line 6 will simply console.log a message that will let us know our server is up and running.
// Line 9–11 is setting up a GET route that we will eventually be fetched from within our client side React application.
// const dbPath =
//   "mongodb+srv://dbUser:nCRo9dSrxTl3rBfg@cluster0-frk7s.mongodb.net/test?retryWrites=true&w=majority";
// mongoose.connect(dbPath, {
//   useNewUrlParser: true
// });

// const db = mongoose.connection;
// db.on("error", () => {
//   console.log("> error occurred from the database");
// });
// db.once("open", () => {
//   console.log("> successfully opened the database");
// });

// module.exports = mongoose;

// Apply middleware
