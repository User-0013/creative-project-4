<template>
  <div class="page">
    <div class="overview">
      <h2>{{$root.$data.username}}'s Stats</h2>
      <div class="resources">
        <p>Time: {{time}}</p>
        <p>Brain Power: {{brainPower}}</p>
        <p>Food: {{food}}</p>
      </div>
      <p><b>Academic Prestige</b>: {{academicPrestige}}</p>
      <p><b>Degree Status</b>: {{degreeStatus}}</p>
      <p><b>Year in School</b>: {{yearInSchool}}</p>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'GameOverview',
  data () {
    return {
      user: null,
      resource: null,
      time: this.$root.$data.initData.resources.time,
      brainPower: this.$root.$data.initData.resources.brainPower,
      food: this.$root.$data.initData.resources.food,
      academicPrestige: this.$root.$data.initData.academicPrestige,
      degreeStatus: this.$root.$data.initData.degreeStatus,
      yearInSchool: this.$root.$data.initData.yearInSchool
    }
  },
  methods: {
    getUsername() {
      return this.$root.$data.username;
    },
    async getResource() {
      try {
        const response = await axios.get("/api/users/${this.user._id}/resources/${this.resource._id}");
        this.resource = response.data;
      } catch (error) {
        console.log(error);
      }
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
    width: 90%;
    font-family: "Candara";
    font-size: 2em;
    padding: 10px 40px;
    margin-left: 4%;
    margin-right: 4%;
    color: #000;
  }

  .page p {
    display: flex;
    font-family: "Garamond";
    font-size: 1.3em;
    margin: 10px 0;
  }

  .overview {
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

  .resources {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
  }

  /* Mobile Styles */
  @media only screen and (max-width: 400px) {}

  /* Tablet Styles */
  @media only screen and (min-width: 401px) and (max-width: 960px) {}

  /* Desktop Styles */
  @media only screen and (min-width: 961px) {
    .resources {
      flex-direction: row;
      justify-content: center;
    }

    .resources p {
      margin: 10px 50px;
    }
  }
</style>
