<template>
  <v-col
    tag="article"
    xs="12"
    sm="6"
    md="3"
  >
    <div class="card">

      <router-link class="card__img-link" :to="{ name: 'details', params: { movieId: movie.id }}">
        <v-img 
          class="card__img"
          contain
          :src="posterPath"
          :alt="movie.title"
        ></v-img>
      </router-link>

      <div class="card__text">
        <router-link 
        class="card__title-link text-decoration-none font-weight-bold text-h6" 
        :to="{ name: 'details', params: { movieId: movie.id }}"
        >
          {{movie.title}}
        </router-link>

        <div>
          <v-rating
            :value = movie.vote_average
            readonly
            dense
            length=10
            color="red lighten-3"
            background-color="grey lighten-1"
            size="16"
          ></v-rating>
          <div>
            <span class="text-subtitle-1">rait:</span>
            <span class="text-subtitle-1 font-weight-bold">
              {{ movie.vote_average }}
            </span>
          </div>

          <span class="card__date text-body-1">
              {{convertedDate}}
          </span>
        </div>
      </div>

    </div>
  </v-col>
</template>

<script>
import {generateImageUrl, convertDate} from '../utils'

export default {
  props: {
    movie: {
      type: Object,
      required: true
    }
  },
  computed: {
    posterPath() {
      return generateImageUrl(this.movie.poster_path)
    },
    convertedDate() {
      return convertDate(this.movie.release_date)
    }
  },

}
</script>

<style scoped lang="scss">
.card {
  display: flex;
  flex-direction: column;
  height: 100%;

  &__text {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  }

  &__title-link {
    justify-self: flex-start;
  }

  &__img {
    border-radius: 5px;
    box-shadow: 7px 7px 20px #8A8A8A;
  }

  &__img-link {
    margin-bottom: 20px;
  }
}
</style>