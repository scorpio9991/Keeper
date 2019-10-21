<template>
  <div id="app">
    <p>
    <router-link class="Button homeButton" to="/">Homepage </router-link>
    <!-- {{ "  "}} -->
    <router-link class="Button moviesButton" to="/movies">Movies </router-link>
    <!-- {{ "  "}} -->
    <router-link class="Button bookButton" to="/books">Books</router-link>
    <router-link class="Button tvButton" to="/tv">TV</router-link>
    <router-link class="Button animeButton" to="/anime">Anime</router-link>
    </p>

    <router-view></router-view>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app',
  components: {
    HelloWorld,
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 10px;
}
.Button{
    font-size: 16px;
}
.bookButton {
background-color:purple; /* Green */
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
}
.moviesButton {
background-color:blue; /* Green */
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
}
.homeButton {
background-color: green; /* Green */
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
}
.tvButton {
background-color:red; /* Green */
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
}
.animeButton {
background-color:rgb(16, 38, 85); /* Green */
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
}
</style>
