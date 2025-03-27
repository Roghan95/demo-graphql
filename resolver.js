const posts = [
  {
    id: "1",
    title: "Apprendre GraphQL",
    content: "Lorem ipsum apprendre GraphQL",
    authorId: "1",
  },
  {
    id: "2",
    title: "Apprendre Express",
    content: "Lorem ipsum apprendre Express",
    authorId: "2",
  },
];

const authors = [
  {
    id: "1",
    name: "Joe",
    email: "joe@gmail.com",
    age: 30,
  },
  {
    id: "2",
    name: "Jane",
    email: "jane@gmail.com",
    age: 25,
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

  Post: {
    author(parent) {
      return authors.find((author) => author.id === parent.authorId);
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
