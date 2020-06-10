import { useSelector, useDispatch } from 'react-redux';
import { StoreState } from '../data/index';
import { getFeed } from '../data/feed';
import { useCallback } from 'react';

export default function useFeed() {
  const feedList = useSelector((state: StoreState) => state.feed.feedList);
  const dispatch = useDispatch();
  const onGetFeed = useCallback(
    (feedData: any) => dispatch(getFeed(feedData))  ,
    [dispatch],
  );
  return { feedList, onGetFeed };
}
