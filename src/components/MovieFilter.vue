<template>
  <form class="filter_box" @submit.prevent="onSubmit">
    <div class="genre">
      <label for="genre">Genre:</label>
      <v-select
        class="select-css"
        label="name"
        @input="setGenre"
        :options="genres"
        :value="$store.state.selectedGenre"
        placeholder="Filter by genres"
      ></v-select>
    </div>

    <div class="year">
      <label for="year">Year:</label>
      <v-select class="select" :options="populateYear()" v-model="year"></v-select>
    </div>

    <div class="sort">
      <label for="sort">Sort By:</label>
      <v-select class="select" :options="['Most Popular', 'Most Rated']" v-model="sort"></v-select>
    </div>
    <div class="actions" v-if="!loadingStatus">
      <div></div>
      <button class="btn btn-primary">Take a spin</button>
    </div>
    <div class="actions" v-else>
      <div></div>
      <button class="btn btn-primary">Spinning...</button>
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
      year: [] | 2019,
      sort: "Most Popular"
    };
  },
  mounted() {
    this.$store.dispatch("GET_MOVIE_GENRES");
  },
  methods: {
    setGenre(value) {
      this.$store.commit("SET_SELECTED_GENRE", value);
    },
    populateYear() {
      let totalYears = [];
      const year = new Date().getFullYear();

      for (let i = year; i >= 1950; i--) {
        totalYears.push(i);
      }

      return totalYears;
    },
    onSubmit() {
      this.$store.commit("SET_LOADING_STATUS", true);
      this.$store.commit("SET_INITIAL_STATUS", false);

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

      // this.$store.dispatch("GET_MOVIES", movieData);

      setTimeout(() => {
        this.$store.dispatch("GET_MOVIES", movieData);
      }, 2000);
    }
  },
  computed: {
    genres() {
      if (this.$store.getters.genres) {
        return this.$store.getters.genres;
      }
    },
    loadingStatus() {
      return this.$store.getters.loadingStatus;
    }
  }
};
</script>

<style src="vue-select/dist/vue-select.css"></style>

<style lang="scss" scoped>
@import "../scss/vue-select.scss";
@import "../scss/mixins.scss";

%grid-col-6 {
  display: grid;

  grid-template-columns: 1fr 3.5fr;
  grid-auto-flow: row;
  grid-column-gap: 2rem;
}

.filter_box {
  grid-column: 1 / 2;
  // height: 100%;
  display: grid;
  align-items: center;

  // grid-template-rows: repeat(4, 1fr);
  grid-row-gap: 2rem;
  margin: 0;

  @include respond(tab-port) {
    margin-bottom: 4.5rem;
  }

  @include respond(phone) {
    margin-bottom: 3.5rem;
  }

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

  .actions {
    // justify-self: center;
    align-self: center;
    width: 100%;
    // margin-left: 2rem;

    .btn {
      // width: 80%;
      grid-column: 2/3;
      padding: 1.2rem 4rem;
      border: none;
      outline: none;
      font-family: inherit;
      font-size: 1.6rem;
      font-weight: 700;
      border-radius: 50rem;
      cursor: pointer;
      background-image: linear-gradient(
        90deg,
        rgba(0, 255, 226, 1) 0%,
        rgba(53, 207, 187, 1) 44%,
        rgba(92, 228, 178, 1) 73%
      );
      color: var(--color-black);
      transform: translateX(0rem);

      // @include respond(tab-port) {
      //   grid-column: 1 / -1;
      // }

      @include respond(phone) {
        grid-column: 1 / -1;
      }
    }
  }
}
</style>