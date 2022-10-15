<template>
  <v-container class="header-container white--text px-3">
    <div class="wraper">
      <v-toolbar-title class="title text-h4 font-weight-black margin-class" color="white">
        <router-link class="logo" to="/">
          MovieApp
        </router-link>
      </v-toolbar-title>

      <v-btn
      class="ma-2 white--text"
      elevation="3"
      color="blue lighten-1"
      >
        Mock
      </v-btn>

      <v-btn
      class="ma-2 white--text"
      elevation="3"
        color="blue lighten-1"
      >
        Menu
      </v-btn>

      <v-btn
      class="ma-2 white--text"
      elevation="3"
        color="blue lighten-1"
      >
        Nav
      </v-btn>

      <v-spacer></v-spacer>

      <v-btn
      icon
      >
        <v-icon color="white">mdi-dots-vertical</v-icon>
      </v-btn>

    </div>
  </v-container>
</template>

<script>
export default {
  name: 'Header',
}
</script>

<style scoped lang="scss">
.header-container {
  max-width: 1000px;
}
.logo {
  color: white;
  text-decoration: none;
}

.wraper {
  display: flex;
  justify-content: flex-start;
  align-items: center;
}

.margin-class {
  margin-right: 20px;
}
</style>