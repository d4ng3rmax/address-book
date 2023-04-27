import axios from 'axios';
import { USERS_API_URL } from './apiUrls';

export const fetchUsers = async (params) => {
  try {
    const searchKeys = ['email', 'firstName', 'lastName', 'maidenName'];
    const allResults = [];

    for (const key of searchKeys) {
      const queryParams = new URLSearchParams();
      if (params.search) {
        queryParams.append('key', key);
        queryParams.append('value', params.search);
      }
      const response = await axios.get(`${USERS_API_URL}/filter?${queryParams.toString()}`);
      allResults.push(...response.data.users);
    }

    const uniqueResults = Array.from(new Set(allResults.map((user) => user.id))).map((id) =>
      allResults.find((user) => user.id === id)
    );

    return { users: uniqueResults };
  } catch (error) {
    console.error('Error fetching users:', error);
    return { users: [] };
  }
};

export const fetchUserById = async (id) => {
  try {
    const response = await axios.get(`${USERS_API_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching user by ID:', error);
    return null;
  }
};