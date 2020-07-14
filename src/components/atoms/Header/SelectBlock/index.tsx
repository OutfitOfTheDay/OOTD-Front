import * as React from 'react';

import useGlobal from '../../../../hooks/useGlobal';
import useModal from '../../../../hooks/useModal';
import * as S from './style';
import { ModalTypes } from 'src/data/modal/modal';
import { Link } from 'react-router-dom';

interface IProps {
  isClicked: boolean;
  handleClosing: () => void;
}

const SelectBlock: React.FC<IProps> = ({ isClicked }) => {
  const { isLogin, onSetIsLogin } = useGlobal();
  const { onChangeModal } = useModal();
  const onLogOut = () => {
    localStorage.removeItem('token');
    onSetIsLogin(false);
  };
  return (
    <S.BlockContainer isClicked={isClicked} isLogin={isLogin}>
      {isLogin ? (
        <>
          <Link to="/mypage">
            <S.ListItem>MY PAGE</S.ListItem>
          </Link>
          <Link to="/">
            <S.ListItem onClick={onLogOut}>LOG OUT</S.ListItem>
          </Link>
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
