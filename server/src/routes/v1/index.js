const express = require("express");
const authContorller = require("../../controller/auth-controller");
const postController = require("../../controller/post-controller");
const userController = require("../../controller/user-controller");

const router = express.Router();

router.post("/signup", userController.signup);
router.post("/signin", userController.signin);

router.post("/posts", postController.createPost);
router.get("/posts", postController.getAllPosts);
router.post("/posts/:postId/comments", postController.addComment);
router.post(
  "/posts/:postId/comments/:commentId/replies",
  postController.addReply
);

module.exports = router;
