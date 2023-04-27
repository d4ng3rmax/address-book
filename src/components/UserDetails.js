import React from 'react';
import { Link } from 'react-router-dom';

const UserDetails = ({ user }) => {
  if (!user) {
    return null;
  }

  let currentSearch = new URLSearchParams(Location.search).get('search');
  
  return (
    <div>
      <p>Nome: {user.firstName} {user.lastName}</p>
      <p>E-mail: {user.email}</p>
      <p>Gênero: {user.gender}</p>
      <p>Idade: {user.age}</p>
      <p>Cor dos olhos: {user.eyeColor}</p>
      {/* <Link to="/">Voltar</Link> */}
      <Link to={`/search?search=${currentSearch}`}>Voltar</Link>
    </div>
  );
};

export default UserDetails;