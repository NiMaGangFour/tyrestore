// database.js
const mongoose = require("mongoose");
const dbPath =
  "mongodb+srv://dbUser:nCRo9dSrxTl3rBfg@cluster0-frk7s.mongodb.net/tyrestore_dev?retryWrites=true&w=majority";
mongoose.connect(dbPath, {
  useNewUrlParser: true
});
const db = mongoose.connection;
db.on("error", () => {
  console.log("> error occurred from the database");
});
db.once("open", () => {
  console.log("> successfully opened the database");
});
module.exports = mongoose;
