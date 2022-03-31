import express from "express";
import { trending, see ,edit, deleteVideo, upload } from "../controllers/videoController";
 
const videoRouter = express.Router();

// /upload를 /:id 밑에 두면 url에서 'upload'를 'id' 값으로 인식
videoRouter.get("/:id(\\d+)", see);
videoRouter.get("/:id(\\d+)/edit", edit);
videoRouter.get("/:id(\\d+)/delete", deleteVideo);
videoRouter.get("/upload", upload );


 
export default videoRouter; 