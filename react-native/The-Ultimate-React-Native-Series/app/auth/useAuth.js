import authStorage from './storage';
import jwtDecode from 'jwt-decode';
import { useAuthContext } from './provider';

const useAuth = () => {
  const { user, setUser } = useAuthContext();

  const login = (token) => {
    setUser(jwtDecode(token));
    authStorage.storeToken(token);
  };

  const logout = () => {
    setUser(null);
    authStorage.removeToken();
  };

  return { user, login, logout };
};

export default useAuth;
