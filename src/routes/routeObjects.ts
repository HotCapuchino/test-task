export const routes = {
  index: "/",
  users: {
    index: "/users",
    user: "/users/:userId/posts",
    open: (userId: number) => `/users/${userId}/posts`,

    posts: {
      index: "/users/:userId/posts/:postId",
      open: (userId: number, postId: number) =>
        `${routes.users.open(userId)}/${postId}`,
    },
  },
};
