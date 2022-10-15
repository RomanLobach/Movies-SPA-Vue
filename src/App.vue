<template>
  <v-app id="app">

    <v-app-bar 
    app
    absolute
    hide-on-scroll
    color="primary accent-4"
    elevation="2"
    >
      <Header />
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>

    <v-footer 
    app
    absolute
    color="primary"
    padless
    >
      <Footer />
    </v-footer>

  </v-app>
</template>



<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
export default {
  name: "app",
  components: {Header, Footer},
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
