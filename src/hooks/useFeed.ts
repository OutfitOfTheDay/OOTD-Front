import { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { StoreState } from '../data/index';
import { getFeed } from '../data/feed/feed';
import * as apiTypes from '../data/api/apiTypes';

export default function useFeed() {
  const feedList = useSelector((state: StoreState) => state.feed.feed);
  const dispatch = useDispatch();
  const onGetFeed = useCallback(
    (feedRequestParams: apiTypes.FeedRequestParams) =>
      dispatch(getFeed(feedRequestParams)),
    [dispatch],
  );
  return { feedList, onGetFeed };
}
