// const PostService = require("../services/post-service");

// const postService = new PostService();

// // Create a new post
// const createPost = async (req, res) => {
//   try {
//     const response = await postService.createPost(req.body);
//     return res.status(201).json({
//       success: true,
//       message: "Successfully created a new post",
//       data: response,
//       err: {},
//     });
//   } catch (error) {
//     return res.status(500).json({
//       message: "Something went wrong",
//       data: {},
//       success: false,
//       err: error,
//     });
//   }
// };

// // Get all posts
// const getAllPosts = async (req, res) => {
//   try {
//     const response = await postService.getAllPosts();
//     return res.status(201).json({
//       success: true,
//       message: "Successfully fetched all the post",
//       data: response,
//       err: {},
//     });
//   } catch (error) {
//     return res.status(500).json({
//       message: "Something went wrong",
//       data: {},
//       success: false,
//       err: error,
//     });
//   }
// };

// // Update a post
// const update = async (req, res) => {
//   try {
//     const response = await postService.updatePost(req.params.id, req.body);
//     return res.status(201).json({
//       success: true,
//       message: "Successfully update the post",
//       data: response,
//       err: {},
//     });
//   } catch (error) {
//     return res.status(500).json({
//       message: "Something went wrong",
//       data: {},
//       success: false,
//       err: error,
//     });
//   }
// };

// module.exports = {
//   createPost,
//   update,
//   getAllPosts,
// };

const PostService = require("../services/post-service");
class PostController {
  async createPost(req, res) {
    try {
      const { title, userId, username, content } = req.body;
      // const postId = req.query.id || undefined;

      // Ensure 'content' is provided
      if (!content) {
        return res.status(400).json({ error: "Content is required" });
      }

      const newPost = await PostService.createPost(
        title,
        userId,
        username,
        content
      );
      res.status(201).json(newPost);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Failed to create a new post" });
    }
  }

  async getAllPosts(req, res) {
    try {
      const posts = await PostService.getAllPosts();
      res.status(200).json(posts);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Failed to get all posts" });
    }
  }

  async addComment(req, res) {
    try {
      const postId = req.query.id || req.params.postId;
      const { comment, userId, username } = req.body;
      const updatedPost = await PostService.addComment(postId, {
        comment,
        userId,
        username,
      });
      res.status(201).json(updatedPost);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Failed to add a new comment" });
    }
  }

  async addReply(req, res) {
    try {
      const postId = req.query.id || req.params.postId;
      const { commentId } = req.params;
      const { reply, userId, username } = req.body;
      const updatedPost = await PostService.addReply(postId, commentId, {
        reply,
        userId,
        username,
      });
      res.status(201).json(updatedPost);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Failed to add a new reply" });
    }
  }
}

module.exports = new PostController();
