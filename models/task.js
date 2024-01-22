let mongoose = require("mongoose");
let Schema = mongoose.Schema;

let taskSchema = new Schema({
  name: {
    type: String,
  },
  phone: {
    type: String,
  },
  email: {
    type: String,
  },
  hobbies: {
    type: String,
  },
});

let Task = mongoose.model("task", taskSchema);
module.exports = Task;
