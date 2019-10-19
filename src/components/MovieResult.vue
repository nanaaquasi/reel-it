<template>
  <section class="result">
    <div class="movie" v-if="!loadingStatus">
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
          <h2>
            {{movie.title}}
            <span class="movie_year">( {{movie.release_date.split('-')[0]}} )</span>
          </h2>
        </div>
        <div class="movie_info--ratings">
          <p>
            Total Score
            <span class="score">{{movie.vote_average}}</span>
            Fantasy/Mystery | {{movie.runtime}} mins
          </p>
        </div>
        <div class="movie_info--details">
          <p class="plot">{{movie.overview}}</p>
        </div>
        <div class="movie_info--btn-actions">
          <button class="btn btn-primary">Watch Now</button>
          <button class="btn btn-secondary" @click.prevent="onClick(movie.id)">More info</button>
        </div>
      </div>
    </div>
    <div class="spin" v-else>
      <div class="loader">
        <img src="../assets/spinner.svg" alt="Loader" />
        <h3>Grab some popcorn while you wait</h3>
      </div>
    </div>
  </section>
</template>

<script>
import moment from "moment";

export default {
  name: "MovieResult",
  data() {
    return {
      backdrop: `https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`,
      poster: `https://image.tmdb.org/t/p/w500/${movie.poster_path}`,
      success: false,
      genres: this.movie.genres
    };
  },
  computed: {
    movie() {
      return !this.$store.getters.movieResults
        ? (this.success = false)
        : this.$store.getters.movieResults;
    },
    loadingStatus() {
      return this.$store.getters.loadingStatus;
    },
    movieGenres() {
      for (let genre of this.genres) {
      }
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
    }
  }
  // methods: {
  //   async getMovieDetails() {
  //     const { data } = await axios.get(`/movie/${movie.id}`, {
  //       params: {
  //         api_key: process.env.VUE_APP_API_KEY,
  //         language: "en-US"
  //       }
  //     });

  //     console.log(data);
  //   }
  // }
  // mounted() {
  //   console.log(this.movies);
  // }
};
</script>

<style lang="scss" scoped>
.spin {
  // position: relative;
  // top: 50;
  // left: 50;
  // transform: translate(-50%, -50%);
  display: flex;

  flex-direction: column;
  justify-content: center;
  align-content: center;
  // margin-bottom: 2rem;

  width: 100%;
  padding: 6rem;

  .loader {
    display: flex;

    flex-direction: column;
    justify-content: center;
    align-content: center;

    img {
      width: 8rem;
      align-self: center;
      justify-self: center;
    }
  }
}

// .results {
//   display: relative;
// }
.movie {
  grid-column: 2/3;
  // padding: 4rem;
  // display: relative;

  display: grid;
  grid-template-columns: min-content 1fr;
  grid-column-gap: 1.2rem;

  &_poster {
    align-self: center;

    .image_box {
      .poster {
        width: 20rem;
      }
    }
  }

  &_info {
    display: grid;

    grid-template-columns: 100%;
    grid-template-rows: min-content min-content max-content 1fr min-content;
    grid-row-gap: 1rem;

    &--title {
      font-size: 1.6rem;
      font-weight: 700;

      display: flex;
      align-content: center;
      align-items: center;

      .movie_year {
        font-size: 1.6rem;
        font-weight: 800;
        align-self: center;

        margin-left: 1rem;
      }
    }

    &--ratings {
      font-size: 1.8rem;
      font-weight: 600;

      .score {
        font-weight: 800;
        color: var(--color-primary);
      }
    }

    &--details {
      font-size: 1.6rem;
      align-self: center;
    }

    &--btn-actions {
      align-self: center;
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