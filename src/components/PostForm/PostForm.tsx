/* eslint-disable jsx-a11y/label-has-associated-control */
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import PostsPlace from '../Posts/Posts';

import User from '../../data/test-data/User';
import './PostForm.scss';

const baseUrl = 'http://localhost:3004/users';

function PostForm(props: { user: User }) {
  const { user } = props;
  const [postsOfList, setPostsOfList] = useState<any[]>([]);

  async function getPosts() {
    const data = await axios.get(`${baseUrl}/${user.id}/posts`);
    setPostsOfList(data.data);
  }
  useEffect(() => {
    getPosts();
  }, []);
  return (
    <div>
      {
        postsOfList && postsOfList.map((posts) => (
          <PostsPlace user={user} posts={posts} key={posts.id} />
        ))
      }
    </div>
  );
}

export default PostForm;
