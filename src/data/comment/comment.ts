import * as apiTypes from '../api/apiTypes';

export const GET_COMMENT = 'GET_COMMENT' as const;
export const GET_COMMENT_SUCCESS = 'GET_COMMENT_SUCCESS' as const;
export const GET_COMMENT_FAILURE = 'GET_COMMENT_FAILURE' as const;
export const ADD_COMMENT = 'ADD_COMMENT' as const;
export const ADD_COMMENT_SUCCESS = 'ADD_COMMENT_SUCCESS' as const;
export const ADD_COMMENT_FAILURE = 'ADD_COMMENT_FAILURE' as const;

export const getComment = (postId: number) => ({
  type: GET_COMMENT,
  payload: postId,
});

export const addComment = (comment: string, postId: number) => ({
  type: ADD_COMMENT,
  payload: { comment, postId },
});

export interface GetCommentAsyncActionType {
  type: typeof GET_COMMENT_SUCCESS | typeof GET_COMMENT_FAILURE;
  payload: any;
}

export interface AddCommentAsyncActionType {
  type: typeof ADD_COMMENT_SUCCESS | typeof ADD_COMMENT_FAILURE;
  payload: any;
}

export type CommentAction =
  | ReturnType<typeof getComment>
  | ReturnType<typeof addComment>
  | GetCommentAsyncActionType
  | AddCommentAsyncActionType;

export interface CommentState {
  commentList: apiTypes.CommentDataType[];
  writingComment: string;
  stateCode: number;
}

export const initialState: CommentState = {
  commentList: [
    {
      userId: 'a',
      date: '2020.6.12',
      _id: '0',
      postId: '0',
      text: '오류가 발생한 것 같아요',
      user: {
        userName: '#OOTD',
        profile:
          'https://i.pinimg.com/originals/0a/90/c3/0a90c3c2fddb55d4110adbe3f5b02d92.png',
      },
    },
  ],
  writingComment: '',
  stateCode: 200,
};

export default function comment(
  state = initialState,
  action: CommentAction,
): CommentState {
  switch (action.type) {
    case GET_COMMENT:
      return { ...state };
    case GET_COMMENT_SUCCESS:
      return { ...state, commentList: action.payload };
    case GET_COMMENT_FAILURE:
      return { ...state };
    case ADD_COMMENT:
      return { ...state, writingComment: action.payload.comment };
    case ADD_COMMENT_SUCCESS:
      return { ...state, stateCode: action.payload };
    case ADD_COMMENT_FAILURE:
      return { ...state };
    default:
      return { ...state };
  }
}
