import * as React from 'react';

import * as S from './style';

interface Props {
  firstItem: string;
  secondItem: string;
  selectedItem: string;
  onChange: (item: string) => void;
}

const FeedSortList: React.FC<Props> = ({
  firstItem,
  secondItem,
  selectedItem,
  onChange,
}) => (
  <S.list>
    <S.listItem
      onClick={() => onChange(firstItem)}
      isSelected={selectedItem === firstItem}
    >
      #{firstItem}
    </S.listItem>
    <S.listItem
      onClick={() => onChange(secondItem)}
      isSelected={selectedItem === secondItem}
    >
      #{secondItem}
    </S.listItem>
  </S.list>
);

export default FeedSortList;
