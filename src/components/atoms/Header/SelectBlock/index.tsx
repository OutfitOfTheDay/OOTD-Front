import * as React from 'react';

import useGlobal from '../../../../hooks/useGlobal';
import * as S from './style';

interface IProps {
  isClicked: boolean;
  handleClosing: () => void;
}

const SelectBlock: React.FC<IProps> = ({ isClicked }) => {
  const { isLogin } = useGlobal();

  return (
    <S.BlockContainer isClicked={isClicked} isLogin={isLogin}>
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
};

export default SelectBlock;
