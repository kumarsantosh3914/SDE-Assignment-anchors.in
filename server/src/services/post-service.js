// const PostRepository = require("../repository/post-repository");

// class PostService {
//   constructor() {
//     this.postRepository = new PostRepository();
//   }

//   async createPost(data) {
//     try {
//       const result = await this.postRepository.create(data);
//       return result;
//     } catch (error) {
//       console.log("Something went wrong in post service");
//       throw error;
//     }
//   }

//   async getAllPosts() {
//     try {
//       const result = await this.postRepository.getAll();
//       return result;
//     } catch (error) {
//       console.log("Something went wrong in post service");
//       throw error;
//     }
//   }

//   async updatePost(id, data) {
//     try {
//       const result = await this.postRepository.update(id, data);
//     } catch (error) {
//       console.log("Something went wrong in post service");
//       throw error;
//     }
//   }

//   async getPostById(id) {
//     try {
//       const result = await this.postRepository.getAllPosts(id);
//       return result;
//     } catch (error) {
//       console.log("Something went wrong in post service");
//       throw error;
//     }
//   }

//   async deletePost(id) {
//     try {
//       const result = await this.postRepository.destroy(idx);
//       return result;
//     } catch (error) {
//       console.log("Something went wrong in post service");
//       throw error;
//     }
//   }
// }

// module.exports = PostService;

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
