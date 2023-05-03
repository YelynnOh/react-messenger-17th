import styled from "styled-components";
import { useState } from "react";
import userData from "../../json/userData.json";
import { User } from "../../common/interface"


const Profile = () => {
    const [value, setValue] = useState('');
    const [search, searching] = useState(false);
    const users = userData.users;

    return (
        <div>
        {users.map(user => (
        <ProfileWrapper>
            {/* 왜 이미지를 꼭 https 주소로 넣어야 했을까.. 으헝헝.. */}
            <ProfileImg>
                <img src={user.profileImage}></img>
            </ProfileImg>
            <ProfileInfo>
            <h3>{user.name}</h3>
            <p>{user.message}</p>
            </ProfileInfo>
        </ProfileWrapper>           
        ))}
        </div>
    );
  };
export default Profile;

const ProfileWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 5rem;
  gap: 15px;
`;

const ProfileImg = styled.div`
  width: 3rem;
  object-fill: cover;
  margin-left: 0.8rem;
  img {
    width: 3rem;
    height: 3rem;
    border-radius: 1rem;
    border: 2px solid #D9D9D9;
    cursor: pointer;
  }
`;

const ProfileInfo = styled.div`
  font-size: 0.9rem;
  height: 6rem;
`;

