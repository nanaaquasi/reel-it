<template>
  <section class="result">
    <div class="movie" v-if="movie">
      <div class="movie_poster">
        <div class="image_box">
          <img
            v-bind:src="`https://image.tmdb.org/t/p/w500/${movie.poster_path}`"
            alt="Movie Poster"
            class="poster"
          />
        </div>
      </div>
      <div class="movie_info">
        <div class="movie_info--title">
          <h3>
            {{movie.title}}
            <span class="movie_year">( {{movie.release_date | getYear}} )</span>
          </h3>
        </div>
        <div class="movie_info--ratings">
          <p>
            Total Score
            <span class="score">{{movie.vote_average}}&nbsp;</span>|
            <span v-for="(genre, index) in movie.genres" :key="index">{{genre.name}}&nbsp;</span>
          </p>
        </div>
        <div class="runtime">
          <p>
            <b>Runtime:</b>
            {{movie.runtime}} mins
          </p>
        </div>
      </div>
      <div class="details">
        <div class="details__overview">
          <p class="plot">{{movie.overview | truncate }}</p>
        </div>
        <div class="details__actions">
          <button class="btn btn-primary">Watch Now</button>
          <router-link
            :to="{ name: 'movie', params: {id: movie.id}}"
            tag="button"
            class="btn btn-secondary"
          >More info</router-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import moment from "moment";

export default {
  name: "MovieResult",
  data() {
    return {};
  },
  computed: {
    movie() {
      if (!this.$store.getters.movieResults) {
        return;
      }
      return this.$store.getters.movieResults;
    },
    loadingStatus() {
      return this.$store.getters.loadingStatus;
    }
  },

  filters: {
    getDuration(value) {
      if (!value) return "";
      let h = (value / 60) | 0,
        m = value % 60 | 0;

      return moment
        .utc()
        .hours(h)
        .minutes(m)
        .format(`h:mm`);
    },
    truncate(str) {
      if (!str) return;
      if (str.length <= 200) {
        return str;
      }

      return `${str.slice(0, 200)} ...`;
    },
    getYear(val) {
      if (!val) {
        return;
      }
      return val.split("-")[0];
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../scss/mixins.scss";

.initial {
  grid-column: 2 / 3;
}

.movie {
  grid-column: 2/3;

  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-template-rows: max-content max-content;
  grid-template-areas:
    "poster info"
    "poster overview";
  grid-column-gap: 1.2rem;

  @include respond(tab-port) {
    display: grid;

    grid-template-columns: 1fr 2.2fr;
    grid-template-rows: max-content max-content;

    grid-template-areas:
      "poster info"
      "poster overview";
  }

  @include respond(phone) {
    display: grid;

    grid-template-columns: 1fr 2.2fr;
    grid-template-rows: max-content max-content;

    grid-template-areas:
      "poster info"
      "overview overview";
  }

  &_poster {
    align-self: center;
    grid-area: poster;

    @include respond(tab-port) {
      grid-area: poster;
    }

    @include respond(phone) {
      grid-area: poster;
    }

    .image_box {
      .poster {
        width: 100%;

        @include respond(phone) {
          width: 100%;
        }
      }
    }
  }

  &_info {
    grid-area: info;
    display: flex;

    flex-direction: column;

    &:not(:last-child) {
      margin-bottom: 1rem;
    }

    &--title {
      font-size: 1.45rem;
      font-weight: 700;

      display: flex;
      align-content: center;
      align-items: center;

      @include respond(phone) {
        font-size: 1.4rem;
      }

      .movie_year {
        font-size: 1.4rem;
        font-weight: 800;
        align-self: center;

        @include respond(phone) {
          font-size: 1.35rem;
        }
      }
    }

    &--ratings {
      font-size: 1.6rem;
      font-weight: 600;

      .score {
        font-weight: 800;
        color: var(--color-primary);
      }
    }
  }

  .details {
    grid-area: overview;

    display: flex;
    flex-direction: column;
    margin-top: 1rem;

    @include respond(tab-port) {
      grid-area: overview;
    }

    @include respond(phone) {
      grid-area: overview;
    }

    &__overview {
      font-size: 1.6rem;
      align-self: center;

      margin-bottom: 2rem;
    }

    &__actions {
      justify-self: center;
      display: flex;
      // margin-top: 1rem;

      align-content: center;

      .btn {
        padding: 1.2rem 2rem;
        border: none;
        outline: none;
        font-family: inherit;
        font-size: 1.6rem;
        font-weight: 700;
        border-radius: 50rem;
        // margin-top: 2rem;
        cursor: pointer;
        transform: translateX(0rem);
        &-primary {
          background-image: linear-gradient(
            90deg,
            rgba(0, 255, 226, 1) 0%,
            rgba(53, 207, 187, 1) 44%,
            rgba(92, 228, 178, 1) 73%
          );
          color: var(--color-black);
        }

        &-secondary {
          background: transparent;
          color: var(--main-text-color);
          border: 2px solid var(--color-primary);

          margin-left: 1rem;
        }
      }
    }
  }
}
</style>