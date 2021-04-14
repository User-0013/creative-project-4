<template>
<div class='page'>
  <div class='register-wrapper'>
    <div class='register'>
      <h2>Register</h2>
      <form class="pure-form">
        <p>Email <span class='required'>*</span>:</p>
        <input v-model="email" class='text-box'/>
        <p>Username <span class='required'>*</span>:</p>
        <input v-model="username" class='text-box'/>
        <div class="already-exists" v-if="isUsernameUsed">Username already exists! Please choose a different one.</div>
        <p>Password <span class='required'>*</span>:</p>
        <input type='password' v-model="password" class='text-box'/>
        <p>Confirm Password <span class='required'>*</span>:</p>
        <input type='password' v-model="confirmPassword" class='text-box'/>
      </form>
      <div class='register-button'>
        <button @click="checkRegister(username)" class='button'>Register</button>
      </div>
      <p class='required-p'><span class='required'>*</span> means required</p>
    </div>
  </div>
</div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'Register',
  data() {
    return {
      email: "billy-bob1234@gmail.com",
      username: "billy-bob",
      password: "helloWorld!",
      confirmPassword: "helloWorld!",
      isUsernameUsed: false,
    }
  },
  methods: {
    async checkRegister(username) {
      this.$root.$data.username = username;
      await this.addUser();
      if (this.$root.$data.isLoggedIn) {
        this.$root.$router.push({path: `/overview/${this.$root.$data.username}`})
      }
    },
    async addUser() {
      try {
        const userAdded = await axios.post("/api/users", {
          username: this.username,
          academicPrestige: this.$root.$data.initData.academicPrestige,
          yearInSchool: this.$root.$data.initData.yearInSchool,
          degreeStatus: this.$root.$data.initData.degreeStatus,
          assignmentsEnglish: this.$root.$data.initData.emptyAssignmentsArray,
          assignmentsMathematics: this.$root.$data.initData.emptyAssignmentsArray,
          assignmentsHumanities: this.$root.$data.initData.emptyAssignmentsArray,
          assignmentsFineArts: this.$root.$data.initData.emptyAssignmentsArray,
          assignmentsCommunications: this.$root.$data.initData.emptyAssignmentsArray,
          assignmentsScience: this.$root.$data.initData.emptyAssignmentsArray,
          assignmentsSocialSciences: this.$root.$data.initData.emptyAssignmentsArray,
          research: this.$root.$data.initData.emptyResearchArray,
          lastLoggedIn: new Date()
        });
        // Set the user's initial resources in the database.
        await axios.post(`/api/users/${userAdded.data._id}/resources`, {
          user: userAdded,
          food: this.$root.$data.initData.resources.food,
          brainPower: this.$root.$data.initData.resources.brainPower,
          time: this.$root.$data.initData.resources.time,
          maxFood: this.$root.$data.initData.resources.maxFood,
          maxBrainPower: this.$root.$data.initData.resources.maxBrainPower,
          maxTime: this.$root.$data.initData.resources.maxTime
        });
        this.isUsernameUsed = false;
        this.$root.$data.isLoggedIn = true;
      } catch (error) {
        if (error.response.status == 409) {
          this.isUsernameUsed = true;
          this.$root.$data.isLoggedIn = false;
        }
        console.log(error);
      }
    },
  }
}
</script>

<style scoped>
.page {
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
}

a:hover {
  text-decoration: none;
  color: #FFF;
}

.already-exists {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 96%;
  height: 50px;
  padding: 5px;
  margin: 10px 0px;
  background-color: #FF6347;
  border-radius: 5px;
}

/* Buttons */
.button {
  display: flex;
  width: 100px;
  height: 50px;
  color: #D1E8E2;
  align-items: center;
  background-color: #2C3531;
  border-radius: 4px;
  margin-top: 2%;
  font-size: 1.25em;
}

.button.long-text {
  width: 150px;
  justify-content: center;
}

.button-wrapper {
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
}

.button-wrapper .button {
  width: 150px;
  height: 75px;
  font-size: 1.5em;
  margin: 15% 0;
}

.login-button,
.register-button {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100px;
}

/* Header Styles */
.page h1 {
  display: flex;
  width: 90%;
  font-family: "Times New Roman", serif;
  padding: 20px 15px;
  margin: 20px 5%;
  background-color: #D1E8E2;
}

.page h2 {
  display: flex;
  width: auto;
  font-family: "Helvetica", sans-serif;
  font-size: 2.5em;
  padding: 20px 20px;
  color: #FFF;
  background-color: #116466;
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
  color: #FFF;
  background-color: #116466;
}

.page p {
  display: flex;
  font-family: "Garamond";
  font-size: 1.3em;
}

.page a {
  font-family: "Garamond";
  text-decoration: none;
  padding: 0 5px;
}

.required {
  color: #000;
  padding-left: 3px;
}

.required-p {
  justify-content: flex-end;
}

.login-wrapper,
.register-wrapper {
  display: flex;
  flex-direction: column;
  width: 33%;
  height: 800px;
  justify-content: center;
  margin: 30px auto;
  flex-grow: 1;
}

.login,
.register {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background-color: #D1E8E2;
  padding: 5% 5%;
  margin: 2% auto;
  border-radius: 10px;
}

.login h2,
.register h2 {
  color: #000;
  background-color: #D1E8E2;
  justify-content: center;
}

.text-box {
  display: flex;
  width: 100%;
  height: 60px;
  font-family: "Garamond";
  font-size: 1.3em;
  align-items: center;
  justify-content: flex-start;
  background-color: #FFF;
  border-radius: 4px;
  border: 1px solid #000;
  padding: 2%;
  margin-bottom: 1em !important;
}

.login-wrapper .button,
.register-wrapper .button {
  padding: 2% 0;
  justify-content: center;
  margin-top: 0;
  margin-bottom: 5%;
}

.login-wrapper p,
.register-wrapper p {
  margin: 0 0;
}

/* Mobile Styles */
@media only screen and (max-width: 400px) {
  .page {
    width: 100%;
    height: 100%;
  }
  .login-wrapper,
  .register-wrapper {
    width: 66%;
    height: 700px;
    align-items: center;
  }
  .text-box {
    height: 10%;
  }
  .button {
    margin-top: 10%;
  }
}

/* Tablet Styles */
@media only screen and (min-width: 401px) and (max-width: 960px) {
  .login-wrapper,
  .register-wrapper {
    width: 66%;
    height: 33%;
    align-items: center;
  }
}

/* Desktop Styles */
@media only screen and (min-width: 961px) {
  .page h1 {
    display: flex;
    width: 98%;
    padding: 20px 15px;
    margin: 20px 1%;
  }

  .page h3 {
    width: 98%;
    margin-left: 1%;
    margin-right: 1%;
  }

  .button-wrapper .button {
    width: 200px;
    height: 100px;
    font-size: 1.5em;
    margin: 10% 0;
  }

  .login-wrapper .login-button,
  .register-wrapper .register-button {
    justify-content: flex-end;
  }

  .login-wrapper .button,
  .register-wrapper .button {
    padding: 2% 0;
    justify-content: center;
    margin-top: 5%;
    margin-bottom: 0;
  }
}
</style>
