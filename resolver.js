const posts = [
  {
    id: "1",
    title: "Apprendre GraphQL",
    content: "Lorem ipsum apprendre GraphQL",
  },
  {
    id: "2",
    title: "Apprendre Express",
    content: "Lorem ipsum apprendre Express",
  },
];

export const resolvers = {
  Query: {
    getPosts() {
      return posts;
    },
    getPost(parent, args) {
      const id = args.id;
      return posts.find((post) => post.id === id);
    },
  },

  Mutation: {
    addPost(parent, args) {
      const newPost = {
        id: Date.now().toString(),
        title: args.title,
        content: args.content,
      };
      return newPost;
    },
    updatePost(parent, args) {
      const id = args.id;
      const post = posts.find((post) => post.id === id);
      if (args.title) {
        post.title = args.title;
      }
      if (args.content) {
        post.content = args.content;
      }
      return post;
    },
    deletePost(parent, args) {
      const id = args.id;
      const postIndex = posts.findIndex((post) => post.id === id);
      if (postIndex === -1) {
        throw new Error("Post not found");
      }
      posts.splice(postIndex, 1);
      return "Post deleted";
    },
  },
};
