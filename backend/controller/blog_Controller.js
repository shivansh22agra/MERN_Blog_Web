import blog from "../models/blog_Model.js";
export const getAllblogs = async (req, res) => {
  let name = req.params.name;
  let blogs;
  try {
    blogs = await blog.find({});
  } catch {
    res.status(500).json({ message: err.message });
  }
  return res.status(200).json({ data: blogs });
};
export const postblog = async (req, res) => {
  const { name, comments } = req.body;
  const newblog = new blog({
    name,
    comments,
  });
  try {
    await newblog.save();
  } catch (err) {
    console.log(err);
  }
  res.status(200).json({ data: newblog });
};
