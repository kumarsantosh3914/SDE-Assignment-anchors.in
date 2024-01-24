// const CrudRepository = require("./crud-repository");
// const Post = require("../models/post");

// class PostRepository extends CrudRepository {
//   constructor() {
//     super(Post);
//   }
// }

// module.exports = PostRepository;
// post-repository.js
const Post = require("../models/post");

class PostRepository {
  async createPost(data) {
    console.log("repository", data);
    const post = await Post.create(data);
    return await post.save();
  }

  async getAllPosts() {
    return await Post.find();
  }

  async addComment(postId, commentData) {
    const post = await Post.findById(postId);
    if (!post) {
      throw new Error("Post not found");
    }

    post.comments.push(commentData);
    return await post.save();
  }

  async addReply(postId, commentId, replyData) {
    const post = await Post.findById(postId);
    if (!post) {
      throw new Error("Post not found");
    }

    const comment = post.comments.find((c) => c._id.toString() === commentId);
    if (!comment) {
      throw new Error("Comment not found");
    }

    comment.replies.push(replyData);
    return await post.save();
  }
}

module.exports = new PostRepository();
