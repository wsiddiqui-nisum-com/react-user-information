import { BASE_URL } from "./config";

const UserService = {
  async getUsers() {
    try {
      return fetch(BASE_URL + "1.1/?results=15").then((response) =>
        response.json()
      );
    } catch (error) {
      throw error;
    }
  },
};

export default UserService;
