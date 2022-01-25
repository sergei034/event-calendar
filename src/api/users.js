import axios from 'axios';

export const fetchUsers = async () =>
  await (
    await axios.get('./__mocks__/users.json')
  ).data;
