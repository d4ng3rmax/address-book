import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import UserHomeContainer from './containers/UserHomeContainer';
import UserListContainer from './components/UserList';
import UserSearchContainer from './containers/UserSearchContainer';
import UserDetailsContainer from './containers/UserDetailsContainer';
import './App.css';

function App() {
  return (
    <Router>
        <nav className="bg-dark navbar">
          <a href="/" className="nav-item">Home</a>
          <ul className="nav-links">
            <li className="nav-item">
              <Link to={"/list"} className="nav-link">Listagem dos Contatos</Link>
            </li>
            <li className="nav-item">
              <Link to={"/search"} className="nav-link">Buscar Contatos</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<UserHomeContainer />} />
          <Route path="/search" element={<UserSearchContainer />} />
          <Route path="/list" element={<UserListContainer />} />
          <Route path="/user/:id" element={<UserDetailsContainer />} />
        </Routes>
    </Router>
  );
}

export default App;