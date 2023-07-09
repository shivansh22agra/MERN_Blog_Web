import mongoose from "mongoose";
const Schema = mongoose.Schema;
const blogSchema = new Schema({
  name: {
    type: String,
  },
  comments: {
    type: Array,
  },
});
export default mongoose.model("blog", blogSchema);
