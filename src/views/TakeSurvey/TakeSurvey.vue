<template>
  <div class="create__survey">
    <div class="heading" v-show="isAuthenticated">
      <h1 class="primary__heading text-align-center">
        {{ survey.title.toUpperCase() }}
      </h1>
    </div>
    <h5 class="error__msg">{{ message }}</h5>
    <v-form
      class="createSurvey__form"
      ref="form"
      lazy-validation
      v-show="isAuthenticated"
    >
      <div class="createSurvey__left">
        <v-text-field
          v-model="survey.email"
          label="Enter Your Email Id"
          :rules="[rules.required, rules.email]"
        >
        </v-text-field>
        <v-text-field
          v-model="survey.userName"
          label="Enter Your User Name"
          :rules="[rules.required]"
        ></v-text-field>
      </div>
      <div class="createSurvey__right">
        <h3 class="text-align-center">SUBMIT ANSWERS TO SURVEY</h3>
        <div class="survey__questions--wrapper">
          <div class="survey__question--wrapper">
            <div
              class="survey__question submit__question"
              v-for="(ques, index) in survey.questions"
              :key="index"
            >
              <div class="survey__question--heading submit__question--heading">
                <h4>{{ ques.question }}&nbsp;{{ ques.required ? "*" : "" }}</h4>
              </div>
              <v-text-field
                v-if="ques.type === 'text'"
                v-model="ques.response"
                label="Enter Your Answer"
                :rules="[ques.required && rules.required]"
              ></v-text-field>

              <v-textarea
                v-if="ques.type === 'paragraph'"
                :rules="[ques.required && rules.required]"
                outlined
                rows="3"
                row-height="25"
                name="input-7-4"
                label="Enter Your Answer"
                v-model="ques.response"
              ></v-textarea>

              <!-- MULTIPLE CHOICE QUESTION-->
              <v-radio-group
                v-model="ques.response"
                :rules="[ques.required && rules.required]"
                v-if="ques.type === 'mcq'"
              >
                <v-radio
                  v-for="(item, index) in ques.choice"
                  :key="index"
                  :label="item.choice"
                  :value="item.choice"
                  color="indigo darken-3"
                ></v-radio>
              </v-radio-group>
            </div>
          </div>
        </div>
      </div>
    </v-form>
    <div class="align__center" v-show="isAuthenticated">
      <button @click="submitTakeSurvey" class="button__lightGreen">
        SUBMIT
      </button>
    </div>
  </div>
</template>
<script>
import SurveyService from "../../services/SurveyService";
import "./TakeSurvey.css";
export default {
  props: ["surveyId"],
  data() {
    return {
      survey: {
        id: this.surveyId,
        userName: "",
        email: "",
        title: "",
        questions: [],
      },
      message: "",
      isAuthenticated: true,
      disclaimerMessage: "",
      rules: {
        required: (value) => !!value || `Field Required !`,
        email: (value) => {
          const pattern =
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          return pattern.test(value) || "Invalid E-mail ID";
        },
      },
    };
  },
  methods: {
    fetchSurvey() {
      SurveyService.fetchSurvey(this.surveyId)
        .then((res) => {
          const response = res.data;
          this.survey.title = response.title;
          const formQuestions = response.question.map((question) => ({
            ...question,
            response: null,
          }));
          this.survey.questions = formQuestions;
        })
        .catch((e) => {
          if (`${e.response.status}`.startsWith("4")) {
            this.isAuthenticated = false;
            this.message =
              "Sorry! You are not authorized to access the survey.";
            return;
          }
          this.isAuthenticated = false;
          this.message = e.response.data.message;
        });
    },
    async submitTakeSurvey(e) {
      e.preventDefault();
      const formRes = await this.$refs.form.validate();
      if (formRes.valid) {
        let surveyResponses = [];
        surveyResponses = this.survey.questions.map((question) => ({
          id: question.id,
          response: question.response,
        }));
        const apiData = {
          email: this.survey.email,
          name: this.survey.userName,
          surveyId: this.surveyId,
          responses: surveyResponses,
        };
        console.log("apiData???", apiData);
        SurveyService.submitTakeResponse(apiData)
          .then((response) => {
            if (response.status === 200) {
              // redirect to thankyou
            }
          })
          .catch((e) => {
            this.message = e.response.data.message;
          });
      }
    },
  },
  created() {
    this.fetchSurvey();
  },
};
</script>