const CHANGE_FEED_ITEM = 'CHANGE_FEED_ITEM';
const CHANGE_SORT_ITEM = 'CHANGE_SORT_ITEM';
const CHANGE_MYPAGE_SORT_ITEM = 'CHANGE_MYPAGE_SORT_ITEM';

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

interface ChangeMypageFeedItem {
  type: typeof CHANGE_MYPAGE_SORT_ITEM;
  payload: {
    feed: 'MY STYLE' | 'TAG';
  };
}

type FeedSortActionTypes =
  | ChangeFeedItem
  | ChangeSortItem
  | ChangeMypageFeedItem;

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

export const changeMypageFeedItem = (
  feed: 'MY STYLE' | 'TAG',
): ChangeMypageFeedItem => ({
  type: CHANGE_MYPAGE_SORT_ITEM,
  payload: {
    feed,
  },
});

interface RootState {
  feed: 'OOTD' | 'STYLE';
  sort: 'POPULAR' | 'NEW';
  mypageFeed: 'MY STYLE' | 'TAG';
}

const initialState: RootState = {
  feed: 'OOTD',
  mypageFeed: 'MY STYLE',
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
    case CHANGE_MYPAGE_SORT_ITEM:
      return {
        ...state,
        mypageFeed: action.payload.feed,
      };
    default:
      return state;
  }
};

export default feedSortReducer;
