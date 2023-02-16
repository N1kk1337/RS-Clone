export const baseUrl = 'http://localhost:3004/users';

export interface User {
  id?: number;
  email?: string;
  password?: string;
  firstName?: string;
  lastName?: string;
  nickName?: string;
  location?: string;
  country?: string;
  city?: string;
  avatarImg?: string;
  likeCats?: boolean;
  likeDogs?: boolean;
  favoriteFilm?: string;
  posts?: FeedPost[];
}

export interface FeedPost {
  like?: number;
  id?: number;
  userId?: number;
  time?: string;
  text?: string;
  postTime?: string;
  views?: number;
  comments?: Comments
}

export interface Comments {
  comment: string
  commentsId: number
}

// export interface PostAndUser {
//   user: User;
//   post: Posts;
// }
// export interface AnswerPost {
//   user: User;
//   post: Posts;
// }
