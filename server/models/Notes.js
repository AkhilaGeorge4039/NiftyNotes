
const mongoose = require('mongoose');
const schema = mongoose.Schema;

const NotesModelSchema = new schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  shared: {
    type: Boolean,
    required: false,
  },
  color: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
});

const NotesModel = mongoose.model("NotesModel", NotesModelSchema);
module.exports = NotesModel;