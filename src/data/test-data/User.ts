interface User {
  id: number;
  email:string;
  password:string;
  firstName: string;
  lastName: string;
  nickName: string;
  location: string;
  country: string;
  city: string;
  avatarImg: string;
  likeCats: boolean;
  likeDogs: boolean;
  favoriteFilm: string;
}

export default User;
