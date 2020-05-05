import * as React from 'react';

import {
  BlockTitle,
  BlockWrapper,
  FeedSortList,
  SortResetBtn,
  TitleWrapper,
} from 'atoms/StatusBlock';

const FeedSortStatusBlock: React.FC = () => (
  <BlockWrapper height={220}>
    <TitleWrapper>
      <BlockTitle margin={5}>FEED</BlockTitle>
      <SortResetBtn />
    </TitleWrapper>
    <FeedSortList />
    <BlockTitle margin={5}>SORT</BlockTitle>
    <FeedSortList />
  </BlockWrapper>
);

export default FeedSortStatusBlock;
