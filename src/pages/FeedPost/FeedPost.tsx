import axios from 'axios';
import React, { useEffect, useState } from 'react';
import 'react-quill/dist/quill.snow.css';
import PostForm from '../../components/PostForm/PostForm';
import User from '../../data/test-data/User';

const baseUrl = 'http://localhost:3004/users';

function FeedPost() {
  const [getUsers, setGetUsers] = useState<User[]>([]);
  // const [getUsersPost, setGetUsersPost] = useState<PostAndUser>();

  // function getPosts() {
  // getUsers.forEach(async (x) => {
  //   const userPost = await axios.get(`${baseUrl}/${x.id}/posts`);
  //   const allPosts = userPost.data;
  //   const post = allPosts.filter((user: Posts) => user.userId === allPosts[0].userId);
  //   const compare = {
  //     user: x,
  //     post,
  //   };
  //   setGetUsersPost(compare);
  // });
  // }
  // getPosts();

  async function getData() {
    const response = await axios.get(baseUrl);
    setGetUsers(response.data);
  }
  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="feed-posts col-12">
      <div className="container">
        <PostForm users={getUsers} />
      </div>
    </div>
  );
}

export default FeedPost;
