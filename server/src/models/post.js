const mongoose = require("mongoose");

// const postSchema = new mongoose.Schema(
//   {
//     title: {
//       type: String,
//       required: true,
//     },
//     content: {
//       type: String,
//       required: true,
//       max: [250, "Tweet cannot be more than 250 characters"],
//     },
//     comments: [
//       {
//         type: mongoose.Schema.Types.ObjectId,
//         ref: "Comment",
//       },
//     ],
//   },
//   { timestamps: true }
// );

const postSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    userId: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    comments: [
      {
        comment: {
          type: String,
        },
        userId: {
          type: String,
        },
        username: {
          type: String,
        },
        replies: [
          {
            reply: {
              type: String,
            },
            userId: {
              type: String,
            },
            username: {
              type: String,
            },
          },
        ],
      },
    ],
  },
  { timestamps: true }
);

const Post = mongoose.model("Post", postSchema);
module.exports = Post;
