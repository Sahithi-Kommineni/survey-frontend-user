import http from "../http-common";
class AuthService {
  signIn(authData) {
    return http.post(`/auth/signin`,authData);
  }
  signOut(emailId) {
    return http.get(`/auth/signout/${emailId}`);
  }
}
export default new AuthService();