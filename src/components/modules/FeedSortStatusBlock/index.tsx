import * as React from 'react';

import {
  BlockTitle,
  BlockWrapper,
  FeedSortList,
  SortResetBtn,
  TitleWrapper,
} from 'atoms/StatusBlock';
import useFeedSort from '../../../hooks/useFeedSort';

const FeedSortStatusBlock: React.FC = () => {
  const {
    selectedFeedItem,
    selectedSortItem,
    onChangeFeedItem,
    onChangeSortItem,
  } = useFeedSort();

  return (
    <BlockWrapper className="sort">
      <TitleWrapper>
        <BlockTitle margin={5}>FEED</BlockTitle>
        <SortResetBtn />
      </TitleWrapper>
      <FeedSortList
        firstItem="OOTD"
        secondItem="STYLE"
        selectedItem={selectedFeedItem}
        onChange={onChangeFeedItem}
      />
      <BlockTitle margin={5}>SORT</BlockTitle>
      <FeedSortList
        firstItem="POPULAR"
        secondItem="NEW"
        selectedItem={selectedSortItem}
        onChange={onChangeSortItem}
      />
    </BlockWrapper>
  );
};

export default FeedSortStatusBlock;
