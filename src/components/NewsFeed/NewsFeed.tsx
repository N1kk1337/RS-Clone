import { useQuery } from '@tanstack/react-query';
import { deleteDoc, doc } from 'firebase/firestore';
import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { db } from '../../firebase';
import { useAppSelector } from '../../hooks/redux';
import {
  createPost, getUserData, useFirestoreCollection,
} from '../../utils/utils';
import Loading from '../Loading/Loading';
import Post from '../Post/Post';
import { IFeedPost, IUser } from '../types';

// eslint-disable-next-line react/no-unused-prop-types
function NewsFeed(props: { users: Array<IUser>, isMyPage: boolean, isGlobal: boolean }) {
  const { users, isMyPage } = props;
  const { id } = useAppSelector((state) => state.userAuth);
  const { data: userData } = useQuery<IUser | null>(['user', id], () => getUserData(id!));
  const [t] = useTranslation();
  const allPosts = users.map((user) => useFirestoreCollection(`users/${user.userId}/posts`)) as {
    status: 'error' | 'success' | 'loading';
    data: IFeedPost[] | undefined;
    error: unknown;
    refetch: () => void;
  }[];

  function handleRefetch() {
    allPosts.forEach(({ refetch }) => refetch());
  }

  const [formValues, setFormValues] = useState('');

  const postSubmitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    createPost(
      userData?.userId!,
      formValues,
      userData?.firstName!,
      userData?.lastName!,
      userData?.nickName!,
      userData?.avatarImg!,
    );
    handleRefetch();
    setFormValues('');
  };

  const handleNewPostChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setFormValues(e.target.value);
  };

  const handleDelete = async (userId: string, postId: string) => {
    try {
      await deleteDoc(doc(db, 'users', userId, 'posts', postId));
      handleRefetch();
    } catch (e) {
      console.error('Error deleting document: ', e);
    }
  };

  return (

    <div className="feed-posts col-12">
      {isMyPage
          && (
            <Form onSubmit={postSubmitHandler} className="post-form col-12">
              <Form.Group className="mb-3 form-group" controlId="ControlTextarea1">

                <Form.Control
                  value={formValues}
                  as="textarea"
                  placeholder="Got some news?"
                  style={{ height: '100px' }}
                  onChange={handleNewPostChange}
                />
              </Form.Group>
              <Button variant="primary" type="submit">
                {t('button.post')}
              </Button>
            </Form>
          )}
      {allPosts[0].status === 'success' ? allPosts.map((postPerUser) => (
        postPerUser.data!.map(
          (post) => <Post isMine key={post.id} handleDelete={handleDelete} post={post} />,
        )
      )).reverse() : <Loading />}

    </div>
  );
}
export default NewsFeed;
