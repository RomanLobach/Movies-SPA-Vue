<template>
  <div class="details" :style="{backgroundImage: backgrndImg}">
    <div class="details__color">
      <div class="details__container">
        <div class="details__wrapper">
          <div class="details__img-wrapper">
            <img
            class="details__img"
            :src="posterPath"
            :alt="movieDetails.title"
            >
          </div>
          <div class="details__content">
            <h2 class="details__title text-h4">{{movieDetails.title}}</h2>
            <p class="details__date">Relis date: {{computeDate}}</p>
            <!-- так не работает: -->
            <!-- <p 
            v-for="ganre in movieDetails.ganres"
            >{{ganre.name}}</p> -->
            <p class="details__ganres text-body-1">{{computedGenres}}</p>  <!-- так работает, но ругается на метод map -->
            <p class="details__tagline text-body-2 font-italic">{{movieDetails.tagline}}</p>
            <h3 class="details__overview-title text-h6">Overview</h3>
            <p class="details__overview text-body-1">{{movieDetails.overview}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {generateBackgroundImgUrl, generateImageUrl, convertDate, generateGenerList} from '../utils'
export default {
  name: 'Details',
  props: {
    movieDetails: {
      type: Object,
      required: true
    }
  },
  computed: {
    backgrndImg() {
      return generateBackgroundImgUrl(this.movieDetails.backdrop_path)
    },
    posterPath() {
      return generateImageUrl(this.movieDetails.poster_path)
    },
    computeDate() {
      return convertDate(this.movieDetails.release_date)
    },
    computedGenres() {
      return generateGenerList(this.movieDetails)
    }
  }
}
</script>

<style scoped lang="scss">
.details {
  // ручной режим управления стилями. необходимо дописать под вьютифай
  text-align: start;

  background-position-x: right -200px;
  background-position-y: top;
  background-repeat:  no-repeat;
  background-size: cover;

  &__color {
    background-color: rgba($color: white, $alpha: 0.8);
  }

  &__container {
    max-width: 1000px;
    margin: 0 auto;
    padding: 0 10px;
  }

  &__wrapper {
    display: flex;
    padding-top: 50px;
    padding-bottom: 208px; // =)
  }

  &__img-wrapper {
    width: 50%;
    text-align: center;
  }

  &__img {
    display: inline-flex;
    max-height: 500px;
  }

  &__content {
    width: 50%;
  }

  &__title {
    margin-bottom: 20px;
  }
}


</style>