<template>
  <v-row
    justify="center"
    no-gutters
  >
    <v-btn
      color="white"
      text
      rounded
      class="my-2"
    >
      Footer
    </v-btn>
    <v-btn
      color="white"
      text
      rounded
      class="my-2"
    >
      Link
    </v-btn>
    <v-btn
      color="white"
      text
      rounded
      class="my-2"
    >
      Nav
    </v-btn>
    <v-col
      class="primary lighten-2 py-4 text-center white--text"
      cols="12"
    >
      {{ new Date().getFullYear() }} — <strong>MovieApp</strong>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'Footer',
}
</script>

<style scoped lang="scss">
.footer{
  border: 1px solid black;
}
</style>