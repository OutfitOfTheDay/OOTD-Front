import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { rootState } from '../data/index';
import {
  changeFeedItem,
  // changeMypageFeedItem,
  changeSortItem,
} from '../data/modules/FeedSort';

export default function useFeedSort() {
  const selectedFeedItem = useSelector(
    (state: rootState) => state.feedSortReducer.feed,
  );
  const selectedSortItem = useSelector(
    (state: rootState) => state.feedSortReducer.sort,
  );
  const selectedMypageFeedItem = useSelector(
    (state: rootState) => state.feedSortReducer.mypageFeed,
  );

  const dispatch = useDispatch();

  const onChangeFeedItem = useCallback(
    (feed: 'OOTD' | 'STYLE') => dispatch(changeFeedItem(feed)),
    [dispatch],
  );
  const onChangeSortItem = useCallback(
    (sort: 'POPULAR' | 'NEW') => dispatch(changeSortItem(sort)),
    [dispatch],
  );
  const onChangeMypageFeedItem = useCallback(
    (feed: 'MY STYLE' | 'TAG') => dispatch(changeMypageFeedItem(feed)),
    [dispatch],
  );

  return {
    onChangeFeedItem,
    onChangeMypageFeedItem,
    onChangeSortItem,
    selectedFeedItem,
    selectedMypageFeedItem,
    selectedSortItem,
  };
}
