import React, { useState } from 'react';
import UserItem from './UserItem';

const Users = () => {
  const data = [
    {
      id: "1",
      login: "Mojombo",
      avatarUrl: "https://avatars0.githubusercontent.com/u/1?v=4",
      htmlUrl: "https://github.com/mojombo"
    },
    {
      id: "2",
      login: "Defunkt",
      avatarUrl: "https://avatars0.githubusercontent.com/u/2?v=4",
      htmlUrl: "https://github.com/defunkt"
    },
    {
      id: "3",
      login: "pjhyett",
      avatarUrl: "https://avatars0.githubusercontent.com/u/3?v=4",
      htmlUrl: "https://github.com/pjhyett"
    },
  ];

  const [users, setUsers] = useState(data);
  return (
    <div style={userStyle}>
      {users.map(user => (
        <UserItem
          key={user.id}
          user={user}
        />
      ))}
    </div>
  );
};

const userStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gridGap: "1rem",
};

export default Users;