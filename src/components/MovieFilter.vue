<template>
  <div class="filter_box">
    <div class="genre">
      <label for="genre">Genre:</label>
      <v-select
        class="select"
        multiple
        :options="['Adventure', 'Fantasy', 'Romance']"
        v-model="genre"
        placeholder="Filter by genres"
      ></v-select>
    </div>

    <div class="genre">
      <label for="genre">Year</label>
      <v-select class="select" :options="['2019', '2018', '2017']" v-model="year"></v-select>
    </div>

    <div class="genre">
      <label for="genre">Sort By</label>
      <v-select
        class="select"
        :options="['Popularity Ascending', 'Rateings Ascending', 'Romance']"
        v-model="sort"
      ></v-select>
    </div>
    <div class="movie_type">
      <p>Type</p>
      <div class="checkboxes">
        <div class="box">
          <input
            class="styled-checkbox"
            type="checkbox"
            name="movie_type"
            id="movie_type"
            value="TV Series"
          />
          <label for="genre">Tv Show</label>
        </div>

        <div class="box">
          <input
            class="styled-checkbox"
            type="checkbox"
            name="movie_type"
            id="movie_type"
            value="TV Series"
          />
          <label for="genre">Movie</label>
        </div>
      </div>
    </div>
    <div class="actions">
      <button class="btn btn-primary">Take a spin</button>
    </div>
  </div>
</template>

<script>
import "vue-select/dist/vue-select.css";

export default {
  name: "MovieFilter",
  data() {
    return {
      genre: "",
      year: "2018",
      sort: "Popularity Ascending"
    };
  }
};
</script>

<style src="vue-select/dist/vue-select.css"></style>

<style lang="scss" scoped>
.filter_box {
  grid-column: 1 / 2;
  // height: 100%;
  display: grid;
  align-items: center;

  grid-template-rows: repeat(5, 1fr);

  .genre {
    display: grid;
    // background: whitesmoke;

    grid-template-columns: 6rem 1fr;
    grid-column-gap: 2rem;
  }

  .movie_type {
    display: grid;

    grid-template-columns: 6rem 1fr;
    grid-column-gap: 2rem;
  }
  .checkboxes {
    display: grid;

    grid-template-columns: 1fr 1fr;
    // grid-column-gap: 2rem;
  }

  select {
    color: var(--main-text-color) !important;
  }

  .styled-checkbox {
    position: absolute; // take it out of document flow
    opacity: 0; // hide it

    & + label {
      position: relative;
      cursor: pointer;
      padding: 0;
    }

    // Box.
    & + label:before {
      content: "";
      margin-right: 10px;
      display: inline-block;
      vertical-align: text-top;
      width: 20px;
      height: 20px;
      background: white;
    }

    &:checked + label:before {
      background: #f35429;
    }

    // Disabled state label.
    &:disabled + label {
      color: #b8b8b8;
      cursor: auto;
    }

    &:checked + label:after {
      content: "";
      position: absolute;
      left: 5px;
      top: 9px;
      background: white;
      width: 2px;
      height: 2px;
      box-shadow: 2px 0 0 white, 4px 0 0 white, 4px -2px 0 white,
        4px -4px 0 white, 4px -6px 0 white, 4px -8px 0 white;
      transform: rotate(45deg);
    }
  }

  .actions {
    justify-self: center;
    align-self: center;
    width: 100%;

    .btn {
      width: 80%;
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
      transform: translateX(4rem);
    }
  }
}
</style>