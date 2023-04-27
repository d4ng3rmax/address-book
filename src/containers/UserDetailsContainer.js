import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchUserById } from '../api';
import UserDetails from '../components/UserDetails';

const UserDetailsContainer = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      const fetchedUser = await fetchUserById(id);
      setUser(fetchedUser);
    };

    fetchUser();
  }, [id]);

  return (
    <div>
      <h1>Detalhes do usuário</h1>
      {user ? <UserDetails user={user} /> : <p>Carregando detalhes do usuário...</p>}
      {/* {user ? <UserDetails user={user} /> : <p>Carregando detalhes do usuário...</p>} */}
    </div>
  );
};

export default UserDetailsContainer;
