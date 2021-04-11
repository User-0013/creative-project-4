<template>
  <div class='page'>
  <div class='login-wrapper'>
      <div class='login'>
        <h2>Login</h2>
        <form class="pure-form">
          <p>Username:</p>
          <input v-model="username" class="text-box"/>
          <p>Password:</p>
          <input type="password" v-model="password" class="text-box"/>
        </form>
        <div class='login-button'>
          <button @click="checkLogin(username)" class="button">Login</button>
        </div>
      </div>
    </div>
    <p></p>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      username: "billy-bob",
      password: "helloWorld!"
    }
  },
  methods: {
    checkLogin(username) {
      this.$root.$data.isLoggedIn = true;
      this.$root.$data.username = username;
      if (this.$root.$data.isLoggedIn) {
        this.$root.$router.push({path: `/overview/${this.$root.$data.username}`})
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
  }

  a:hover {
   text-decoration: none;
   color: #FFF;
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
   height: 50%;
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

  .login-wrapper,
  .register-wrapper {
   display: flex;
   flex-direction: column;
   width: 33%;
   height: 33%;
   justify-content: center;
   margin: 30px auto;
   flex-grow: 1;
  }

  .login,
  .register {
   display: flex;
   flex-direction: column;
   width: 100%;
   height: 450px;
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
   height: 30%;
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
     height: 33%;
     align-items: center;
   }
   .text-box {
     height: 20%;
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
