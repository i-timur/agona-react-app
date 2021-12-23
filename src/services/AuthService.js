import { user } from '../utils/user';

export class AuthService {
  login(data) {
    if (data.login === user.login && data.password === user.password) {
      return true;
    }
    return false;
  }
}