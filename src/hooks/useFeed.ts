import { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { StoreState } from '../data/index';
import {
  getFeed,
  getMypageFeed,
  setIsMypage,
  getMypageTagFeed,
  deletePost,
} from '../data/feed/feed';
import * as apiTypes from '../data/api/apiTypes';

export default function useFeed() {
  const feedList = useSelector((state: StoreState) => state.feed.feed);
  const isMypage = useSelector((state: StoreState) => state.feed.isMypage);
  const reRenderCount = useSelector(
    (state: StoreState) => state.feed.reRenderCount,
  );
  const dispatch = useDispatch();
  const onGetFeed = useCallback(
    (feedRequestParams: apiTypes.FeedRequestParams) =>
      dispatch(getFeed(feedRequestParams)),
    [dispatch],
  );
  const onGetMypageFeed = useCallback(
    (token: string) => dispatch(getMypageFeed(token)),
    [dispatch],
  );

  const onGetMypageTagFeed = useCallback(
    (token: string) => dispatch(getMypageTagFeed(token)),
    [dispatch],
  );

  const onSetIsMypage = useCallback(
    (isMypage: boolean) => dispatch(setIsMypage(isMypage)),
    [dispatch],
  );

  const onDeletePost = useCallback(
    (postId: string, token: string) => dispatch(deletePost(postId, token)),
    [dispatch],
  );
  return {
    isMypage,
    feedList,
    onGetFeed,
    onGetMypageFeed,
    onGetMypageTagFeed,
    onSetIsMypage,
    onDeletePost,
    reRenderCount,
  };
}
