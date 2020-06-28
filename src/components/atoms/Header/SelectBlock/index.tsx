import * as React from 'react';

import useGlobal from '../../../../hooks/useGlobal';
import useModal from '../../../../hooks/useModal';
import * as S from './style';
import { ModalTypes } from 'src/data/modal/modal';

interface IProps {
  isClicked: boolean;
  handleClosing: () => void;
}

const SelectBlock: React.FC<IProps> = ({ isClicked }) => {
  const { isLogin } = useGlobal();
  const { onChangeModal } = useModal();

  return (
    <S.BlockContainer isClicked={isClicked} isLogin={isLogin}>
      {isLogin ? (
        <>
          <S.ListItem>MY PAGE</S.ListItem>
          <S.ListItem>LOG OUT</S.ListItem>
        </>
      ) : (
        <S.ListItem onClick={() => onChangeModal(ModalTypes.LogIn)}>
          Login
        </S.ListItem>
      )}
    </S.BlockContainer>
  );
};

export default SelectBlock;
