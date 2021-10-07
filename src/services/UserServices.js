import { BASE_URL } from "./config";

const UserService = {
  async getUsers() {
    try {
      return fetch(BASE_URL + "1.1/?results=15",{
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        headers: {
          'Content-Type': 'application/json'
        },
        referrerPolicy: 'no-referrer').then((response) =>
        response.json()
      );
    } catch (error) {
      throw error;
    }
  },
};

export default UserService;
