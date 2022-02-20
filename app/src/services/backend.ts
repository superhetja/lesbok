const BASE_URL = 'http://localhost:3000';

export const getUsers = async () => {
  return await fetch(BASE_URL + '/users', {
    method: 'GET',
  })
    .then((response) => response.json())
    .catch((error) => console.log('error: ', error));
};
