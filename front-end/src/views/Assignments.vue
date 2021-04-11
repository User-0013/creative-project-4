<template>
  <div class="page">
    <div class="assignments">
      <h2>English</h2>
        <AssignmentOptions :paperTime="paperTime" :paperBrainPower="paperBrainPower"
        :paperFood="paperFood" :projectTime="projectTime" :projectBrainPower="projectBrainPower"
        :projectFood="projectFood" :examTime="examTime" :examBrainPower="examBrainPower"
        :examFood="examFood"/>
      <h2>Mathematics</h2>
        <AssignmentOptions :paperTime="paperTime" :paperBrainPower="paperBrainPower"
        :paperFood="paperFood" :projectTime="projectTime" :projectBrainPower="projectBrainPower"
        :projectFood="projectFood" :examTime="examTime" :examBrainPower="examBrainPower"
        :examFood="examFood"/>
      <h2>Humanities</h2>
        <AssignmentOptions :paperTime="paperTime" :paperBrainPower="paperBrainPower"
        :paperFood="paperFood" :projectTime="projectTime" :projectBrainPower="projectBrainPower"
        :projectFood="projectFood" :examTime="examTime" :examBrainPower="examBrainPower"
        :examFood="examFood"/>
      <h2>Fine Arts and Communications</h2>
        <AssignmentOptions :paperTime="paperTime" :paperBrainPower="paperBrainPower"
        :paperFood="paperFood" :projectTime="projectTime" :projectBrainPower="projectBrainPower"
        :projectFood="projectFood" :examTime="examTime" :examBrainPower="examBrainPower"
        :examFood="examFood"/>
      <h2>Science</h2>
        <AssignmentOptions :paperTime="paperTime" :paperBrainPower="paperBrainPower"
        :paperFood="paperFood" :projectTime="projectTime" :projectBrainPower="projectBrainPower"
        :projectFood="projectFood" :examTime="examTime" :examBrainPower="examBrainPower"
        :examFood="examFood"/>
      <h2>Social Sciences</h2>
        <AssignmentOptions :paperTime="paperTime" :paperBrainPower="paperBrainPower"
        :paperFood="paperFood" :projectTime="projectTime" :projectBrainPower="projectBrainPower"
        :projectFood="projectFood" :examTime="examTime" :examBrainPower="examBrainPower"
        :examFood="examFood"/>
    </div>
  </div>
</template>

<script>
import AssignmentOptions from "../components/AssignmentOptions.vue"
export default {
  name: 'Assignments',
  components: {
    AssignmentOptions
  },
  data () {
    return {
      time: this.$root.$data.initData.resources.time,
      brainPower: this.$root.$data.initData.resources.brainPower,
      food: this.$root.$data.initData.resources.food,
      paperTime: this.$root.$data.initData.assignments.paper.time,
      paperBrainPower: this.$root.$data.initData.assignments.paper.brainPower,
      paperFood: this.$root.$data.initData.assignments.paper.food,
      projectTime: this.$root.$data.initData.assignments.project.time,
      projectBrainPower: this.$root.$data.initData.assignments.project.brainPower,
      projectFood: this.$root.$data.initData.assignments.project.food,
      examTime: this.$root.$data.initData.assignments.exam.time,
      examBrainPower: this.$root.$data.initData.assignments.exam.brainPower,
      examFood: this.$root.$data.initData.assignments.exam.food
    }
  }
}
</script>

<style scoped>
  .page {
    display: flex;
    width: 100%;
    height: 100%;
    flex-direction: column;
    align-items: center;
  }

  .page h1 {
    display: flex;
    width: 90%;
    font-family: "Times New Roman", serif;
    padding: 20px 15px;
    margin: 20px 5%;
  }

  .page h2 {
    display: flex;
    width: 100%;
    font-family: "Helvetica", sans-serif;
    font-size: 2.5em;
    padding: 20px 20px;
    color: #000;
  }

  .page h3 {
    display: flex;
    flex-direction: row;
    width: 100%;
    margin: 0 0;
    font-family: "Candara";
    font-size: 2em;
    color: #000;
  }

  .page p {
    display: flex;
    font-family: "Garamond";
    font-size: 1.3em;
    margin: 10px 0;
  }

  /* Buttons */
  .button {
    display: flex;
    width: 100px;
    height: 50px;
    color: #D1E8E2;
    align-items: center;
    justify-content: center;
    background-color: #2C3531;
    border-radius: 4px;
    margin-top: 2%;
    margin-left: 20px;
    font-size: 1.25em;
  }

  .button-wrapper {
    display: flex;
    width: 100%;
    margin-right: 50px;
    justify-content: flex-end;
  }

  .assignments {
    display: flex;
    flex-direction: column;
    width: 70%;
    height: 100%;
    border-radius: 5px;
    background-color: #D1E8E2;
    margin: 50px 0;
    padding: 0 20px;
    padding-bottom: 15px;
  }

  .assignment-options {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }

  .assignment-req {
    display: flex;
    width: 50%;
    margin: 20px 0;
    flex-direction: column;
    justify-content: center;
  }

  .input-wrapper {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .input {
    width: 75px;
  }

  /* Mobile Styles */
  @media only screen and (max-width: 400px) {
    .page h2 {
      font-size: 2.25em;
    }
  }

  /* Tablet Styles */
  @media only screen and (min-width: 401px) and (max-width: 960px) {}

  /* Desktop Styles */
  @media only screen and (min-width: 961px) {}
</style>
