import React, { useState, useEffect } from 'react';

import * as S from './style';
import { feed } from '../../../../assets/index';
import useLikePost from '../../../../hooks/useLikePost';

interface Props {
  width: string;
  height: string;
  postId: string;
  likedId: string[];
}

const PostLikeButton: React.FC<Props> = ({
  width,
  height,
  postId,
  likedId,
}) => {
  const [isSelected, setIsSelected] = useState<boolean>(false);
  const { likePost } = useLikePost();
  const token = localStorage.getItem('token');

  useEffect(() => {
    setIsLikedPost();
  }, []);

  const setIsLikedPost = () => {
    let isLikedPost = likedId.some((id) => {
      return id === postId;
    });
    console.log(isLikedPost);
    setIsSelected(isLikedPost);
  };

  const onLikePost = () => {
    likePost(postId, token);
    setIsSelected(!isSelected);
  };

  const setTagImg = () => {
    if (isSelected === true) {
      return feed.tag_selected;
    } else {
      return feed.tag_unSelected;
    }
  };

  return (
    <S.PostButtonWrapper>
      <S.PostButton
        src={setTagImg()}
        alt="tagButton"
        width={width}
        height={height}
        onClick={onLikePost}
      />
      <S.PostButton
        src={feed.comment}
        alt="commentButton"
        width={width}
        height={height}
      />
    </S.PostButtonWrapper>
  );
};

export default PostLikeButton;
