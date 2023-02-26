export const baseUrl = 'http://localhost:3004/users';

export interface IUser {
  userId: string;
  email: string;
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
  friends?:string[]
}

export interface IFeedPost {
  firstName: string;
  lastName: string;
  nickName: string;
  avatarImg: string;
  like?: number;
  id: string;
  time?: string;
  text: string;
  views?: number;
  comments?: Comments
  userId: string;
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
