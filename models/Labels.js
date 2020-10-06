const mongoose = require("mongoose");
const { Schema } = mongoose;

const labelSchema = new Schema({
  label: String,
  _user: String,
});

mongoose.model("labels", labelSchema);
