import React, { useState, useEffect } from 'react';
import * as S from './style';
import {
  FeedImg,
  WritingComment,
  TagCommentCount,
  PostLikeButton,
  DetailPostWriterProfile,
  PostModifyButton,
} from 'atoms/Feeds';
import useComment from '../../../hooks/useComment';
import usePost from 'src/hooks/usePost';
import CommentWrapper from '../../modules/CommentWrapper/index';

interface Props {}

const DetailPost: React.FC<Props> = () => {
  const { feedList, postIndex } = usePost();
  const { onGetComment, reRenderCount } = useComment();
  const postData = feedList[postIndex];
  const postId = postData.post._id;
  const writerInfoData = {
    profile: postData.user.profile,
    userName: postData.user.userName,
    weather: postData.post.weather,
    date: postData.post.date,
  };
  const [photoIndex, setPhotoIndex] = useState<number>(0);
  const numberOfPhoto = postData.post.pictures.length;
  const getPhotoIndex = (index: number): void => {
    setPhotoIndex(index);
  };
  const getNextIndex = (): void => {
    if (photoIndex !== numberOfPhoto - 1) {
      setPhotoIndex(photoIndex + 1);
    } else setPhotoIndex(0);
  };
  const getPrevIndex = (): void => {
    if (photoIndex !== 0) {
      setPhotoIndex(photoIndex - 1);
    } else setPhotoIndex(numberOfPhoto - 1);
  };
  useEffect(() => {
    onGetComment(postId);
  }, [reRenderCount]);

  return (
    <S.DetailPostContainer>
      <S.DetailPostWrapper>
        <S.PostModifyButtonWrapper>
          <PostModifyButton fontSize={0.875} />
        </S.PostModifyButtonWrapper>
        <S.DetailPost>
          <FeedImg
            isDetail={true}
            postPhotos={postData.post.pictures}
            writerInfoData={writerInfoData}
            photoIndex={photoIndex}
            getNextIndex={getNextIndex}
            getPrevIndex={getPrevIndex}
          />
          <S.DetailPostContentWrapper>
            <S.ScrollArea>
              <DetailPostWriterProfile
                profilePhoto={postData.user.profile}
                name={postData.user.userName}
                writeDate={postData.post.date}
                weather={postData.post.weather}
              />
              <S.DetailWriting>{postData.post.content}</S.DetailWriting>
              <CommentWrapper />
            </S.ScrollArea>
            <div>
              <S.DetailPostInfoWrapper>
                <PostLikeButton width="1.125rem" height="1.563rem" />
                <TagCommentCount
                  likeCount={postData.post.likeN}
                  commentCount={postData.post.cmtN}
                  fontSize={'0.625rem'}
                />
              </S.DetailPostInfoWrapper>
              <WritingComment postId={postId} />
            </div>
          </S.DetailPostContentWrapper>
        </S.DetailPost>
      </S.DetailPostWrapper>
    </S.DetailPostContainer>
  );
};

export default DetailPost;
