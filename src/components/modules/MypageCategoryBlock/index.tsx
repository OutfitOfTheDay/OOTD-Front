import * as React from 'react';

import {
  BlockTitle,
  BlockWrapper,
  FeedSortList,
  SortResetBtn,
  TitleWrapper,
} from 'atoms/StatusBlock';
import useFeedSort from '../../../hooks/useFeedSort';

const MypageCategoryBlock: React.FC = () => {
  const { onChangeMypageFeedItem, selectedMypageFeedItem } = useFeedSort();

  const resetSort = () => {
    onChangeMypageFeedItem('MY STYLE');
  };

  return (
    <BlockWrapper className="mypageFeed">
      <TitleWrapper>
        <BlockTitle margin={5}>FEED</BlockTitle>
        <SortResetBtn resetSortation={resetSort} />
      </TitleWrapper>
      <FeedSortList
        firstItem="MY STYLE"
        secondItem="TAG"
        selectedItem={selectedMypageFeedItem}
        onChange={onChangeMypageFeedItem}
      />
    </BlockWrapper>
  );
};

export default MypageCategoryBlock;
