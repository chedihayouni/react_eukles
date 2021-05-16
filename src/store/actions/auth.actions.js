import history from "../../history";
import { authService } from "../../services/authService";

/**
 * 
 * @param {*} data 
 * @returns 
 */
export function login(data) {
  return async () => {
    await authService
      .login(data)
      .then((response) => {
        authService.setSession(response.data.token);
        history.push('/dashboard')
      })
      .catch((error) => {
        return error;
      });
  };
};

/**
 * 
 * @param {*} data 
 * @returns 
 */
export function register(data) {
  return async () => {
    await authService
      .register(data)
      .then(() => {
        history.push('/login')
      })
      .catch((error) => {
        return error;
      });
  };
};

export const logout = () => {
  localStorage.removeItem('access_token');
  history.push('/login');
};
