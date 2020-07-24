import * as apiTypes from '../api/apiTypes';

export const GET_COMMENT = 'GET_COMMENT' as const;
export const GET_COMMENT_SUCCESS = 'GET_COMMENT_SUCCESS' as const;
export const GET_COMMENT_FAILURE = 'GET_COMMENT_FAILURE' as const;
export const ADD_COMMENT = 'ADD_COMMENT' as const;
export const ADD_COMMENT_SUCCESS = 'ADD_COMMENT_SUCCESS' as const;
export const ADD_COMMENT_FAILURE = 'ADD_COMMENT_FAILURE' as const;

export const getComment = (postId: string, token: string): GetComment => ({
  type: GET_COMMENT,
  payload: { postId, token },
});

export const addComment = (
  text: string,
  postId: string,
  token: string,
): AddComment => ({
  type: ADD_COMMENT,
  payload: { text, postId, token },
});

export interface GetComment {
  type: typeof GET_COMMENT;
  payload: {
    postId: string;
    token: string;
  };
}

export interface AddComment {
  type: typeof ADD_COMMENT;
  payload: {
    token: string;
    text: string;
    postId: string;
  };
}

export interface GetCommentAsyncActionType {
  type: typeof GET_COMMENT_SUCCESS | typeof GET_COMMENT_FAILURE;
  payload: apiTypes.CommentDataType[];
}

export interface AddCommentAsyncActionType {
  type: typeof ADD_COMMENT_SUCCESS | typeof ADD_COMMENT_FAILURE;
  payload: number;
}

export type CommentAction =
  | ReturnType<typeof getComment>
  | ReturnType<typeof addComment>
  | GetCommentAsyncActionType
  | AddCommentAsyncActionType;

export interface CommentState {
  commentList: apiTypes.CommentDataType[] | null;
  writingComment: string;
  stateCode: number;
  reRenderCount: number;
}

export const initialState: CommentState = {
  commentList: [
    {
      comment: {
        userId: '',
        date: 'yyyy.mm.dd',
        _id: '',
        postId: '',
        text: '로딩중이에요',
      },
      user: {
        _id: '',
        userName: 'OOTD',
        profile: '',
      },
    },
  ],
  writingComment: '',
  stateCode: 0,
  reRenderCount: 0,
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
      return { ...state, writingComment: action.payload.text };
    case ADD_COMMENT_SUCCESS:
      return { ...state, reRenderCount: state.reRenderCount + 1 };
    case ADD_COMMENT_FAILURE:
      return { ...state };
    default:
      return { ...state };
  }
}
