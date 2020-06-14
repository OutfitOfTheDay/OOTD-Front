import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { rootState } from '../data/index';
import { changeFeedItem, changeSortItem } from '../data/modules/FeedSort';

export default function useFeedSort() {
  const selectedFeedItem = useSelector(
    (state: rootState) => state.feedSortReducer.feed,
  );
  const selectedSortItem = useSelector(
    (state: rootState) => state.feedSortReducer.sort,
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

  return {
    onChangeFeedItem,
    onChangeSortItem,
    selectedFeedItem,
    selectedSortItem,
  };
}
