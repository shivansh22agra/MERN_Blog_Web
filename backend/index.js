import express from "express";
import mongoose from "mongoose";
import blogRouter from "./routes/blog_Route.js";

const app = express();
app.use(express.json());

app.use("/", blogRouter);
mongoose.set("strictQuery", false);
mongoose
  .connect(
    "mongodb+srv://agrawalshivansh22:CKlRP9dHZsBiETCB@mernblogcluster.nc8yubp.mongodb.net/",
    { useNewUrlParser: true }
  )
  .then(() => {
    console.log("connected to mongoose");
  });
const PORT = process.env.PORT || 3000;
const articleInfo = {
  "learn-react": { comments: [] },
  "learn-node": { comments: [] },
  "my-thoughts-on-learning-react": { comments: [] },
};
// app.get("/api/article/:name", (req, res) => {
//   const articleName = req.params.name;
//   res.send(getAllblogs);
//   //   const collection = mongoose.connection.db.collection("Articles");
//   //   collection.findOne({ name: articleName }, (err, result) => {
//   //     res.status(200).send(result);
//   //   });
// });
app.post("/api/article/:name/add-comments", (req, res) => {
  const { username, text } = req.body;
  const articleName = req.params.name;
  articleInfo[articleName].comments.push({ username, text });
  res.status(200).send(articleInfo[articleName]);
});

app.listen(PORT, () => {
  console.log(`running ${PORT}`);
});
