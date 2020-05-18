import { useSelector } from 'react-redux';
import { StoreState } from '../data/index';

export default function useFeed() {
  const feedList = useSelector((state: StoreState) => state.feed.feedList);
  return feedList;
}
