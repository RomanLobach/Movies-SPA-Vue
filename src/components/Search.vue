<template>
  <section class="search-backgrnd">
    <v-container class="search">
      <h1 class="search__title">Welcome! Discover millions of movies...</h1>
      <form class="search__form">
        <v-text-field
          class="search__input"
          v-model="search"
          :error-messages="searchErrors"
          label="Search..."
          solo
          height="40"
          dense
          required
          @input="$v.search.$touch()"
          @blur="$v.search.$touch()"
        ></v-text-field>

        <v-btn
          class="search__submit"
          color="primary"
          height="40"
          @click="submit"
        >
          Search
        </v-btn> <!-- отработка события submit происходит только один раз. путь для router генерится, но по этому эндпоинту перехода не происходит -->
      </form>
    </v-container>
  </section>
</template>

<script>
import { validationMixin } from 'vuelidate'
import { required } from 'vuelidate/lib/validators'

export default {
  name: 'Search',

  mixins: [validationMixin],

  validations: {
    search: { required },
  },

  data: () => ({
    search: '',
  }),

  computed: {
    searchErrors () {
      const errors = []
      if (!this.$v.search.$dirty) return errors
      !this.$v.search.required && errors.push('Query is required.')
      return errors
    },
  },

  methods: {
    submit () {
      this.$v.$touch()
      if (this.$v.$invalid) {
        this.submitStatus = 'ERROR'
      } else {
        this.$router.push({path: `/search/${this.search}`})
        this.submitStatus = 'PENDING'
      }
    },
  },
}
</script>

<style scoped lang="scss">
.search {
  max-width: 800px;

  &__form {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    padding-top: 20px;
    padding-bottom: 30px;
  }

  &__title{
    color: white;
    margin-top: 50px;
  }
}

.search-backgrnd {
  background-color: #80C5FF;
}
</style>