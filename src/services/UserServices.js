import { BASE_URL } from "./config";

const UserService = {
  async getUsers() {
    try {
      return fetch(BASE_URL + "1.1/?results=15",{
        method: 'GET', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit
        headers: {
          'Content-Type': 'application/json'
        },
        referrerPolicy: 'no-referrer'}).then((response) => {
          const contentType = response.headers.get('content-type');
          if (!contentType || !contentType.includes('application/json')) {
            throw new TypeError("Oops, we haven't got JSON!");
          }
          return response.json();
        }
      );
    } catch (error) {
      throw error;
    }
  },
};

export default UserService;
