import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUsers } from '../reducers/userReducer';
import { Link } from 'react-router-dom';

const UserList = ({ users, currentSearch }) => {
  const dispatch = useDispatch();
  const fetchedUsers = useSelector((state) => state.users.users);
  const status = useSelector((state) => state.users.status);
  const error = useSelector((state) => state.users.error);

  useEffect(() => {
    if (!users && status === 'idle') {
      dispatch(fetchUsers());
    }
  }, [users, status, dispatch]);

  const renderUsers = users || fetchedUsers;

  if (status === 'loading') {
    return <div>Loading...</div>;
  } else if (status === 'failed') {
    return <div>Error: {error}</div>;
  } else if (status === 'succeeded' || users) {
    return (
      <div>
        <h1>Lista de Usuários</h1>
        <div className='result-div'>
          {renderUsers.map((user) => (
            <div key={user.id} className='result-box'>
              <h3>{user.firstName} {user.lastName}</h3>
              <p><strong>Email:</strong> {user.email}</p>
              <p><strong>Username:</strong> {user.username}</p>
              <img src={user.image} alt={`${user.firstName} ${user.lastName}`} />
              <Link to={{pathname: `/user/${user.id}`, search: `?search=${currentSearch}`}}>
                <button type="button" className="btn btn-success">Mais detalhes</button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    );
  }
  return null;
};

export default UserList;