import * as React from 'react';

import useGlobal from '../../../../hooks/useGlobal';
import useModal from '../../../../hooks/useModal';
import * as S from './style';
import { ModalTypes } from 'src/data/modal/modal';
import { Link, useHistory } from 'react-router-dom';

interface IProps {
  isClicked: boolean;
  handleClosing: () => void;
}

const SelectBlock: React.FC<IProps> = ({ isClicked, handleClosing }) => {
  const { isLogin, onSetIsLogin } = useGlobal();
  const { onChangeModal } = useModal();
  const history = useHistory();

  const onLogOut = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    onSetIsLogin(false);
    history.push('/');
  };
  
  return (
    <S.BlockContainer isClicked={isClicked} isLogin={isLogin}>
      {isLogin ? (
        <>
          <Link to="/mypage" onClick={handleClosing}>
            <S.ListItem>MY PAGE</S.ListItem>
          </Link>
          <Link to="/" onClick={handleClosing}>
            <S.ListItem onClick={onLogOut}>LOG OUT</S.ListItem>
          </Link>
        </>
      ) : (
        <S.ListItem
          onClick={() => {
            onChangeModal(ModalTypes.LogIn);
            handleClosing();
          }}
        >
          Login
        </S.ListItem>
      )}
    </S.BlockContainer>
  );
};

export default SelectBlock;
