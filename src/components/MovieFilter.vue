<template>
  <form class="filter_box" @submit.prevent="onSubmit">
    <div class="genre">
      <label for="genre">Genre:</label>
      <v-select
        class="select"
        label="name"
        @input="setGenre"
        :options="genres"
        :value="$store.state.selectedGenre"
        placeholder="Filter by genres"
      ></v-select>
    </div>

    <div class="year">
      <label for="year">Year</label>
      <v-select class="select" :options="populateYear()" v-model="year"></v-select>
    </div>

    <div class="sort">
      <label for="sort">Sort By</label>
      <v-select class="select" :options="['Most Popular', 'Most Rated']" v-model="sort"></v-select>
    </div>
    <!-- <div class="movie_type">
      <p>Type</p>
      <div class="checkboxes">
        <label>
          <input class="styled-checkbox" type="checkbox" v-model="tv" />
          <span class="label_text">TV Show</span>
        </label>
        <label>
          <input class="styled-checkbox" type="checkbox" v-model="movie" />
          <span class="label_text">Movie</span>
        </label>
      </div>
    </div>-->
    <div class="actions" v-if="!loadingStatus">
      <div></div>
      <input type="submit" class="btn btn-primary" value="Take a spin" />
    </div>
    <div class="actions" v-else>
      <div></div>
      <input type="submit" class="btn btn-primary" value="Spinning.." />
    </div>
  </form>
</template>

<script>
import "vue-select/dist/vue-select.css";
import { mapGetters } from "vuex";

export default {
  name: "MovieFilter",
  data() {
    return {
      year: [],
      sort: "Most Popular"
      // buttonText: "Take a spin"
      // tv: "",
      // movie: ""
    };
  },
  mounted() {
    this.$store.dispatch("GET_MOVIE_GENRES");
    console.log(process.env.VUE_APP_API_KEY);
    console.log(process.env.VUE_APP_API_URL);
  },
  methods: {
    setGenre(value) {
      this.$store.commit("SET_SELECTED_GENRE", value);
    },
    populateYear() {
      let totalYears = [];
      const year = new Date().getFullYear();

      for (let i = 1950; i <= year; i++) {
        totalYears.push(i);
      }

      return totalYears;
    },
    onSubmit() {
      this.$store.commit("SET_LOADING_STATUS", true);

      let selectedSort;
      if (this.sort === "Popular") {
        selectedSort = "popularity.desc";
      } else if (this.sort === "Most Rated") {
        selectedSort = "vote_average.desc";
      } else {
        selectedSort = "popularity.desc";
      }

      const movieData = {
        sort: selectedSort,
        year: this.year
      };

      // this.buttonText = "Spinning";

      setTimeout(() => {
        this.$store.dispatch("GET_MOVIES", movieData);
        // this.buttonText = "Spinning";
      }, 3000);
      // this.$store.dispatch("GET_MOVIE_DETAIL", movie.id);
    }
  },
  computed: {
    genres() {
      // return !this.$store.getters ? null : this.$store.getters.genres
      if (this.$store.getters.genres) {
        return this.$store.getters.genres;
      }
    },
    loadingStatus() {
      return this.$store.getters.loadingStatus;
    }
    // movie() {
    //   return !this.$store.getters.movieResults
    //     ? "No Results"
    //     : this.$store.getters.movieResults;
    // }
  }
};
</script>

<style src="vue-select/dist/vue-select.css"></style>

<style lang="scss" scoped>
%grid-col-6 {
  display: grid;

  grid-template-columns: 6rem 1fr;
  grid-column-gap: 2rem;
}
.filter_box {
  grid-column: 1 / 2;
  // height: 100%;
  display: grid;
  align-items: center;

  grid-template-rows: repeat(4, 1fr);
  grid-row-gap: 2rem;

  .genre,
  .year,
  .sort,
  .actions {
    @extend %grid-col-6;
  }

  .movie_type {
    display: grid;

    grid-template-columns: 6rem 1fr;
    grid-column-gap: 2rem;
  }
  .checkboxes {
    display: grid;

    grid-template-columns: 1fr 1fr;
  }

  input[type="checkbox"] {
    font-size: 20rem;

    + .label_text {
      cursor: pointer;

      &::before {
        content: "hello";
      }
    }
  }

  select {
    color: var(--main-text-color) !important;
  }

  .actions {
    // justify-self: center;
    // align-self: center;
    width: 100%;
    // margin-left: 2rem;

    .btn {
      width: 100%;
      padding: 1.2rem 4rem;
      border: none;
      outline: none;
      font-family: inherit;
      font-size: 1.6rem;
      font-weight: 700;
      border-radius: 50rem;
      // margin-top: 2rem;
      cursor: pointer;
      background-image: linear-gradient(
        90deg,
        rgba(0, 255, 226, 1) 0%,
        rgba(53, 207, 187, 1) 44%,
        rgba(92, 228, 178, 1) 73%
      );
      color: var(--color-black);
      // margin-left: 4rem;
      // transform: translateX(4rem);
    }
  }
}
</style>