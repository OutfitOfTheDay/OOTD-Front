import React from 'react';

import * as S from './style';
import useModal from 'src/hooks/useModal';
import { ModalTypes } from 'src/data/modal/modal';

const ModalOverlay: React.FC = () => {
  const { onChangeModal } = useModal();
  return <S.ModalOverlay onClick={() => onChangeModal(ModalTypes.none)} />;
};

export default ModalOverlay;
