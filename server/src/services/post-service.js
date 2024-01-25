const PostRepository = require("../repository/post-repository");
class PostService {
  async createPost(title, userId, username, content) {
    try {
      console.log("post service", content);
      const newPost = await PostRepository.createPost({
        title,
        userId,
        username,
        content,
      });
      return newPost;
    } catch (error) {
      throw error;
    }
  }

  async getAllPosts() {
    try {
      const posts = await PostRepository.getAllPosts();
      return posts;
    } catch (error) {
      throw error;
    }
  }

  async addComment(postId, commentData) {
    try {
      const updatedPost = await PostRepository.addComment(postId, commentData);
      return updatedPost;
    } catch (error) {
      throw error;
    }
  }

  async addReply(postId, commentId, replyData) {
    try {
      const updatedPost = await PostRepository.addReply(
        postId,
        commentId,
        replyData
      );
      return updatedPost;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = new PostService();
