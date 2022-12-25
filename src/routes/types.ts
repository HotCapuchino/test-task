export type UserParams = {
  userId: string;
};

export type PostParams = UserParams & {
  postId: string;
};
