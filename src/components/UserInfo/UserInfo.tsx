import { Button } from 'react-bootstrap';
import React, { useEffect, useState } from 'react';
import { useAppSelector } from '../../hooks/redux';
import './style.scss';
import { getUserData } from '../../utils/utils';
import { IUser } from '../types';
import UpDateUserModal from '../UpDateUserModal/UpDateUserModal';
import Loading from '../Loading/Loading';

interface UserInfoProps {
  userInfo: IUser;
}
function UserInfo({ userInfo }: UserInfoProps): JSX.Element {
  const [user, setUser] = useState<IUser>(userInfo);
  const [loading, setLoading] = useState(true);
  const { id } = useAppSelector((state) => state.userAuth);
  const [modalActive, setModalActive] = useState<boolean>(false);

  useEffect(() => {
    if (!modalActive) {
      getUserData(id as unknown as string)?.then((value) => {
        setUser(value!);
      });
    }
  }, [modalActive]);

  useEffect(() => {
    setLoading(false);
  }, [user]);

  return (
    <div className="user-info">
      <Button type="button" className="btn btn-outline-primary" onClick={() => setModalActive(!modalActive)}>Изменить информацию в профиле</Button>
      {modalActive
        && <UpDateUserModal active={modalActive} setActive={setModalActive} />}
      {
        loading
          ? (
            <div className="user-info">
              <Loading />
            </div>
          )
          : (
            <div className="user">
              <img className="avatar" src={user && user.avatarImg} alt="avatar" />
              <li>
                First name and Last name:&nbsp;
                {user && user.firstName}
                &nbsp;
                {user && user.lastName}
              </li>
              <li>
                Location:&nbsp;
                {user && user.location}
              </li>
              <li>
                Country:&nbsp;
                {user && user.country}
              </li>
              <li>
                City:&nbsp;
                {user && user.city}
              </li>
              <li>
                Like cats:&nbsp;
                {user && user.likeCats === true ? 'yes' : 'no'}
              </li>
              <li>
                Like dogs:&nbsp;
                {user && user.likeDogs === true ? 'yes' : 'no'}
              </li>
              <li>
                Favorite film:&nbsp;
                {user && user.favoriteFilm}
              </li>
            </div>
          )
      }
    </div>
  );
}

export default UserInfo;
