import axios from "../Http";

export const authService = {
  login: (data) => {
    return new Promise((resolve, reject) => {
      axios
        .post("/login", data)
        .then((response) => {
          resolve(response);
        })
        .catch((error) => {
          reject(error);
        });
    });
  },

  register: (data) => {
    return new Promise((resolve, reject) => {
      axios
        .post("/register", data)
        .then((response) => {
          resolve(response);
        })
        .catch((error) => {
          reject(error);
        });
    });
  },

  setSession: (token) => {
    localStorage.setItem('access_token', token)
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  }
}
