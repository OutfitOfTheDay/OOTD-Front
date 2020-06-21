import * as apiTypes from '../api/apiTypes';

export const GET_COMMENT = 'GET_COMMENT' as const;
export const GET_COMMENT_SUCCESS = 'GET_COMMENT_SUCCESS' as const;
export const GET_COMMENT_FAILURE = 'GET_COMMENT_FAILURE' as const;
export const ADD_COMMENT = 'ADD_COMMENT' as const;
export const ADD_COMMENT_SUCCESS = 'ADD_COMMENT_SUCCESS' as const;
export const ADD_COMMENT_FAILURE = 'ADD_COMMENT_FAILURE' as const;

export const getComment = (postId: string): GetComment => ({
  type: GET_COMMENT,
  payload: { postId },
});

export const addComment = (text: string, postId: string): AddComment => ({
  type: ADD_COMMENT,
  payload: { text, postId },
});

export interface GetComment {
  type: typeof GET_COMMENT;
  payload: {
    postId: string;
  };
}

export interface AddComment {
  type: typeof ADD_COMMENT;
  payload: {
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
  commentList: apiTypes.CommentDataType[];
  writingComment: string;
  stateCode: number;
  reRenderCount: number;
}

export const initialState: CommentState = {
  commentList: [
    {
      comment: {
        userId: 'asdf',
        date: 'yyyy.mm.dd',
        _id: 'adsf',
        postId: 'aasdf',
        text: '가나다라',
      },
      user: {
        _id: '',
        userName: '가나다',
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
