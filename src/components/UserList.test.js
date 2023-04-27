import React from 'react';
import { render, screen } from '@testing-library/react';
import UserList from './UserList';

const mockUsers = [
  {
    id: 1,
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@example.com',
    phone: '555-5555',
    username: 'johndoe',
    image: 'http://example.com/image1.jpg',
  },
  {
    id: 2,
    firstName: 'Jane',
    lastName: 'Doe',
    email: 'jane.doe@example.com',
    phone: '555-5556',
    username: 'janedoe',
    image: 'http://example.com/image2.jpg',
  },
];

describe('UserList', () => {
  test('renders user list with provided users', () => {
    render(<UserList users={mockUsers} />);

    expect(screen.getByText('John Doe')).toBeInTheDocument();
    expect(screen.getByText('jane.doe@example.com')).toBeInTheDocument();
  });
});
