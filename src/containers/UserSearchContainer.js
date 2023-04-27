import React, { useState } from 'react';
import { fetchUsers } from '../api';
import UserList from '../components/UserList';

const UserSearchContainer = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState('');
  const [currentSearch, setCurrentSearch] = useState('');

  const handleSearch = async (event) => {
    event.preventDefault();
    setCurrentSearch(searchTerm);
    const users = await fetchUsers({ search: searchTerm });
    setSearchResults(users.users);
  };

  return (
    <div>
      <h1>Buscar Contatos</h1>
      <form onSubmit={handleSearch}>
        <div className="submit-form">
          <div className="form-group">
            <div className="input-group mb-3">
              <input
                type="text"
                placeholder="Digite o nome ou e-mail"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="form-control"
              />
              <button type="submit" className="btn btn-success">Buscar</button>
            </div>
          </div>
        </div>
      </form>
      {searchResults.length > 0 ? (
        <div>
          <h3>Resultados da busca:</h3>
          <UserList users={searchResults} currentSearch={currentSearch} />
        </div>
      ) : (
        searchTerm.length > 0 && <p></p>
      )}
    </div>
  );
};

export default UserSearchContainer;