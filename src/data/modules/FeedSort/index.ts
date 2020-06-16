const CHANGE_FEED_ITEM = 'CHANGE_FEED_ITEM';
const CHANGE_SORT_ITEM = 'CHANGE_SORT_ITEM';

interface ChangeFeedItem {
  type: typeof CHANGE_FEED_ITEM;
  payload: {
    feed: 'OOTD' | 'STYLE';
  };
}

interface ChangeSortItem {
  type: typeof CHANGE_SORT_ITEM;
  payload: {
    sort: 'POPULAR' | 'NEW';
  };
}

type FeedSortActionTypes = ChangeFeedItem | ChangeSortItem;

export const changeFeedItem = (feed: 'OOTD' | 'STYLE'): ChangeFeedItem => ({
  type: CHANGE_FEED_ITEM,
  payload: {
    feed,
  },
});

export const changeSortItem = (sort: 'POPULAR' | 'NEW'): ChangeSortItem => ({
  type: CHANGE_SORT_ITEM,
  payload: {
    sort,
  },
});

interface RootState {
  feed: 'OOTD' | 'STYLE';
  sort: 'POPULAR' | 'NEW';
}

const initialState: RootState = {
  feed: 'OOTD',
  sort: 'POPULAR',
};

const feedSortReducer = (
  state = initialState,
  action: FeedSortActionTypes,
): RootState => {
  switch (action.type) {
    case CHANGE_FEED_ITEM:
      return {
        ...state,
        feed: action.payload.feed,
      };
    case CHANGE_SORT_ITEM:
      return {
        ...state,
        sort: action.payload.sort,
      };
    default:
      return state;
  }
};

export default feedSortReducer;
