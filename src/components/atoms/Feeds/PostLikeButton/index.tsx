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
  const { likePost, likedIdList, getLikedIdList } = useLikePost();
  const token = localStorage.getItem('token');

  useEffect(() => {
    getLikedIdList(token);
  }, []);

  useEffect(() => {
    setIsLikedPost();
    console.log(likedIdList);
  }, [postId]);

  const setIsLikedPost = () => {
    getLikedIdList(token);
    console.log(likedIdList.length);
    if (likedIdList.length !== 0) {
      let isLikedPost = likedIdList.some((id) => {
        return id === postId;
      });
      setIsSelected(isLikedPost);
    }
  };

  const onLikePost = () => {
    likePost(postId, token);
    setIsSelected(!isSelected);
  };

  const setTagImg = () => {
    if (isSelected) {
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
