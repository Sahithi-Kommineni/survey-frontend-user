import http from "../http-common";
class SurveyService {
  fetchSurvey(id) {
    return http.get(`/opensurvey?surveyId=${id}`);
  }
  submitTakeResponse(surveyData) {
    return http.post(`/getresponse`, surveyData);
  }
}
export default new SurveyService();