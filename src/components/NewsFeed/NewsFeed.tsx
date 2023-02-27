import { useQuery } from '@tanstack/react-query';
import { deleteDoc, doc } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { db } from '../../firebase';
import { useAppSelector } from '../../hooks/redux';
import {
  createPost, getUserData, useFirestoreCollection,
} from '../../utils/utils';
import Loading from '../Loading/Loading';
import Post from '../Post/Post';
import { IFeedPost, IUser } from '../types';

function NewsFeed(props: { users: Array<IUser>, isMyPage: boolean, isGlobal: boolean }) {
  const { users, isMyPage } = props;
  const { id } = useAppSelector((state) => state.userAuth);
  const { status: userStatus, error: userError, data: userData } = useQuery<IUser | null>(['user', id], () => getUserData(id!));

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
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, [users]);

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
    loading
      ? <Loading />
      :
      <div className="feed-posts col-12">
        {isMyPage
          && (
            <Form onSubmit={postSubmitHandler} className="post-form col-12">
              <Form.Group className="mb-3 form-group" controlId="ControlTextarea1">
                <span className="post-avatar">
                  {/* here it will be avatar image instead of svg */}
                  <svg
                    height="20"
                    viewBox="0 0 20 20"
                    width="20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      clipRule="evenodd"
                      d="M5.5 5.5c.57 0 1-.2 1.34-.52.24-.24.43-.54.55-.74l.06-.1c.15-.23.26-.37.39-.47.11-.08.3-.17.66-.17h3c.36 0 .55.09.66.17.13.1.24.24.4.48l.05.09c.12.2.3.5.55.74.33.32.77.52 1.34.52.73 0 .99 0 1.19.04.9.18 1.59.88 1.77 1.77.04.2.04.46.04 1.19v3.45c0 .85 0 1.45-.04 1.9-.04.46-.1.72-.2.92-.22.42-.57.77-.99.98-.2.1-.46.17-.91.21-.46.04-1.06.04-1.91.04h-6.9c-.85 0-1.45 0-1.91-.04a2.4 2.4 0 0 1-.91-.2 2.25 2.25 0 0 1-.99-.99 2.4 2.4 0 0 1-.2-.91c-.04-.46-.04-1.06-.04-1.91V8.5c0-.73 0-.99.04-1.19.18-.9.88-1.59 1.77-1.77.2-.04.46-.04 1.19-.04zm3-3.5c-.64 0-1.14.16-1.54.46-.39.27-.62.63-.78.9l-.08.11c-.13.22-.2.34-.3.43-.06.05-.12.1-.3.1h-.09c-.61 0-1.03 0-1.4.07a3.75 3.75 0 0 0-2.94 2.95C1 7.38 1 7.8 1 8.42v3.56c0 .81 0 1.47.04 2 .05.55.14 1.03.37 1.47.36.7.93 1.28 1.64 1.64.44.23.92.32 1.47.37.53.04 1.18.04 2 .04H13.48c.81 0 1.47 0 2-.04a3.84 3.84 0 0 0 1.47-.37c.7-.36 1.28-.93 1.64-1.64.23-.44.32-.92.37-1.47.04-.53.04-1.19.04-2V8.41c0-.61 0-1.03-.07-1.4a3.75 3.75 0 0 0-2.95-2.94 7.5 7.5 0 0 0-1.4-.07h-.08c-.18 0-.24-.05-.3-.1-.1-.1-.17-.2-.3-.43l-.08-.12c-.16-.26-.4-.62-.78-.9-.4-.29-.9-.45-1.54-.45zm3.75 8.25a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0zm1.5 0a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0z"
                      fillRule="evenodd"
                    />
                  </svg>
                </span>
                <Form.Control
                  value={formValues}
                  as="textarea"
                  placeholder="Got some news?"
                  style={{ height: '100px' }}
                  onChange={handleNewPostChange}
                />
              </Form.Group>
              <Button variant="primary" type="submit">
                Post
              </Button>
            </Form>
          )}
        {allPosts[0].status === 'success' && allPosts.map((postPerUser) => (
          postPerUser.data!.map(
            (post) => <Post key={post.id} handleDelete={handleDelete} post={post} />,
          )
        ))}

      </div>
  );
}
export default NewsFeed;
