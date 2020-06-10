import * as React from 'react';

import * as S from './style';

interface IProps {
  isLogin: boolean;
}

const SelectBlock: React.FC<IProps> = ({ isLogin }) => (
  <S.BlockContainer isLogin={isLogin}>
    {isLogin ? (
      <>
        <S.ListItem>MY PAGE</S.ListItem>
        <S.ListItem>LOG OUT</S.ListItem>
      </>
    ) : (
      <S.ListItem>Login</S.ListItem>
    )}
  </S.BlockContainer>
);

export default SelectBlock;
