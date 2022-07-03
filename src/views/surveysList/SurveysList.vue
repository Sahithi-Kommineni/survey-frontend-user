<template>
  <div class="surveys__list">
    <div class="createUser__topHeadings">
      <h1 class="primary__heading">Surveys List</h1>
      <h5>Manage surveys</h5>
    </div>
    <table>
      <thead>
        <tr>
          <th>Survey Name</th>
          <th>Created By</th>
          <th>Description</th>
          <th>Operations</th>
        </tr>
      </thead>
      <tbody v-for="survey in surveys">
        <tr>
          <td data-column="Survey Name">{{ survey.title }}</td>
          <td data-column="Created By">{{ survey.createdBy }}</td>
          <td data-column="Description">{{ survey.description }}</td>
          <td data-column="Operations">
            <span class="operations__wrapper">
              <v-icon large color="blue darken-2" class="icon">
                mdi-format-list-bulleted-type
              </v-icon>
              <v-icon large color="red darken-2" class="icon">
                mdi-delete
              </v-icon>
            </span>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
export default {
  data() {
    return {
      surveys: [
        {
          createdBy: "Elon Musk",
          title: "Employee Survey",
          description:
            "Employees are the most important asset of any company, so their feedback is important. An online survey is a quick, convenient & cost-saving way to do this.",
        },
        {
          createdBy: "Joseph",
          title: "Customer Satisfaction Survey",
          description:
            "How satisfied are your customers? This type of survey will allow you to connect easily with your customers and get direct feedback from them.",
        },
        {
          createdBy: "Micheal",
          title: "Product Survey",
          description:
            "To make your product the best it can be, it is important to get feedback from your customers. A product feedback survey will provide you with valuable information.",
        },
      ],
    };
  },
};
</script>
<style>
</style>
