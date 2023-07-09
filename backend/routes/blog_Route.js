import express from "express";
import { getAllblogs,postblog } from "../controller/Blog_Controller.js";
const blogRouter = express.Router();
blogRouter.get("/api/article/:name", getAllblogs);
blogRouter.post("/api/article", postblog);

export default blogRouter;
