import { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { StoreState } from '../data/index';
import { getFeed, getMypageFeed, setIsMypage } from '../data/feed/feed';
import * as apiTypes from '../data/api/apiTypes';

export default function useFeed() {
  const feedList = useSelector((state: StoreState) => state.feed.feed);
  const isMypage = useSelector((state: StoreState) => state.feed.isMypage);
  const dispatch = useDispatch();
  const onGetFeed = useCallback(
    (feedRequestParams: apiTypes.FeedRequestParams) =>
      dispatch(getFeed(feedRequestParams)),
    [dispatch],
  );
  const onGetMypageFeed = useCallback(() => dispatch(getMypageFeed()), [
    dispatch,
  ]);

  const onSetIsMypage = useCallback(
    (isMypage: boolean) => dispatch(setIsMypage(isMypage)),
    [dispatch],
  );
  return { feedList, onGetFeed, onGetMypageFeed, onSetIsMypage, isMypage };
}
