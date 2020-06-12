export interface CommentDataType {
  userId: string;
  date: string;
  _id: string;
  postId: string;
  text: string;
  user: {
    userName: string;
    profile: string;
  };
}

export interface WritingCommentType {
  comment: string;
  postId: string;
}
