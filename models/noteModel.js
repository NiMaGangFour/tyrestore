// src/models/noteModel.js
// Import the database instance
// import mongoose from "../database";
const mongoose = require("../database");
// Define the schema for a note
const schema = {
  title: { type: mongoose.SchemaTypes.String, required: true },
  content: { type: mongoose.SchemaTypes.String, required: true }
};

const collectionName = "notes"; // Name of the collection of documents
const noteSchema = mongoose.Schema(schema);
const Note = mongoose.model(collectionName, noteSchema);

// Export the Note model
module.exports = Note;
