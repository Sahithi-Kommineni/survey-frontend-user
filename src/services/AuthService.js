import http from "../http-common";
class AuthService {
  signIn(authData) {
    return http.post(`/auth/signin`,authData);
  }
  signOut(userId) {
    return http.get(`/user/logout/${userId}`);
  }
}
export default new AuthService();