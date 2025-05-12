import React from 'react';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const User = ({ user, onDelete }: any) => {
  return (
    <div>
      {user.name}
      <button id="user-delete" onClick={() => onDelete(user.id)}>
        delete
      </button>
    </div>
  );
};

export default User;
