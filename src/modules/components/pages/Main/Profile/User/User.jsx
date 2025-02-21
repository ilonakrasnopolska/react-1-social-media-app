import React from "react";
import Classes from './User.module.css';
import UserInfo from "../../../../common/UserInfo/UserInfo";
import Avatar from "../../../../common/Avatar";
import { useFetchAndDispatch } from "../../../../../hooks/useFetchAndDispatch";
import { fetchProfileData } from "../../../../../../api/profileAPI";
import { ClipLoader } from "react-spinners";

const User = ({userData, isLoading, t}) => {
  useFetchAndDispatch(() => fetchProfileData(userData));
  return (
    <section className='user section'>
      <article className={Classes.content}>
      {isLoading && Object.keys(userData).length === 0 ? (
          <div className={Classes.spinner}>
            <ClipLoader color="#194770" size={50} />
          </div>
        ) : (
          <>
            <Avatar src={String(userData.avatar)} alt="Avatar" className={Classes.avatar} />
            <div className={Classes.about}>
              <h1>{userData.name}</h1>
              <UserInfo userData={userData} Classes={Classes} t={t} />
            </div>
          </>
        )}
      </article>
    </section>
  );
}

export default User;
