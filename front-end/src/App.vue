<template>
  <div id="app" v-if="!$root.$data.isLoggedIn">
    <div id="nav">
      <div class="nav-item">
        <router-link to="/">Home</router-link>
      </div>
      <div class="nav-item">
        <router-link to="/patch-notes">Patch Notes</router-link>
      </div>
      <div class="nav-item">
        <router-link to="/login">Login</router-link>
      </div>
      <div class="nav-item">
        <router-link to="/register">Register</router-link>
      </div>
    </div>
    <router-view/>
  </div>
  <div id="app" v-else>
    <div id="nav">
      <div class="nav-item">
        <router-link :to="updateRouteToOverview">Overview</router-link>
      </div>
      <div class="nav-item">
        <router-link :to="updateRouteToAssignments">Assignments</router-link>
      </div>
      <div class="nav-item">
        <router-link :to="updaterouteToHome" @click.native="resetGlobalVars">Logout</router-link>
      </div>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      routeToOverview: `/overview/${this.$root.$data.username}`,
      routeToAssignments: `/assignments/${this.$root.$data.username}`,
      routeToHome: '/'
    }
  },
  methods: {
    resetGlobalVars () {
      this.$root.$data.username = "";
      this.$root.$data.isLoggedIn = false;
    }
  },
  computed: {
    updateRouteToOverview () {
      return `/overview/${this.$root.$data.username}`;
    },
    updateRouteToAssignments () {
      return `/assignments/${this.$root.$data.username}`;
    },
    updaterouteToHome () {
      return '/';
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  display: flex;
  flex-direction: row;
  padding: 30px;
  background-color: #116466;
}

#nav a {
  display: flex;
  font-weight: bold;
  text-decoration: none;
  color: #D1E8E2;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.nav-item {
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  margin: 10px auto;
}
</style>
