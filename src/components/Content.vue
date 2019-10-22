<template>
  <section class="content">
    <div class="heading">
      <p class="heading_main">
        Don’t know which movie to binge watch ?
        <span class="thinking"></span> Take a
        <span class="underline">spin</span> lets make a choice for you
      </p>
    </div>
    <div class="main_content wrapper--rounded">
      <MovieFilter />
      <div class="initial" v-if="initialShow">
        <h3>Take a spin to movie land.</h3>
      </div>
      <Loader v-if="loadingStatus" />
      <MovieResult v-else />
    </div>
  </section>
</template>

<script>
// import Filter from "@/components/Filter";
import MovieResult from "@/components/MovieResult";
import MovieFilter from "@/components/MovieFilter";
import Loader from "@/components/Loader";

export default {
  name: "Content",
  components: {
    Loader,
    MovieResult,
    MovieFilter
  },
  computed: {
    movie() {
      return !this.$store.getters.movieResults
        ? null
        : this.$store.getters.movieResults;
    },
    loadingStatus() {
      return this.$store.getters.loadingStatus;
    },
    initialShow() {
      return this.$store.getters.initialShow;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../scss/mixins.scss";

.content {
  grid-area: content;
  // max-width: 80vw;
  max-height: 100%;
  margin-top: 3rem;
  align-self: center;
  padding: 2rem 0;

  display: grid;
  grid-auto-flow: row;
  grid-template-rows: 2rem 1fr;

  .initial {
    align-self: center;
    justify-items: center;
    width: 100%;
    padding: 8rem;
    text-align: center;
  }

  .heading {
    grid-column: 1 / -1;
    grid-row: 1 / 2;
    align-self: center;
    justify-self: center;
    margin-bottom: 6rem;

    display: flex;

    &_main {
      font-size: 2rem;
      font-weight: 600;
      text-align: center;

      .underline {
        position: relative;
        z-index: 11;

        &::after {
          content: "";
          width: 100%;
          height: 1.2rem;
          background-image: linear-gradient(
            90deg,
            rgba(0, 255, 226, 1) 0%,
            rgba(53, 207, 187, 1) 44%,
            rgba(92, 228, 178, 1) 73%
          );
          z-index: 10;
          position: absolute;
          left: 0;
          bottom: -0.5rem;

          @include respond(tab-port) {
            height: 0.6rem;
            bottom: -0.3rem;
          }
        }
      }

      @include respond(phone) {
        font-size: 1.6rem;
      }
    }
  }

  .main_content {
    width: 100%;
    grid-row: 2 / 3;
    grid-column: 1 / -1;
    display: grid;
    padding: 4rem 2rem;

    grid-template-columns: 2fr 3fr;
    grid-template-rows: 100%;
    grid-column-gap: 2rem;

    @include respond(tab-port) {
      display: grid;
      padding: 4rem;

      grid-template-columns: 1fr 1.5fr;
      grid-template-rows: 100%;
      grid-column-gap: 2rem;
    }

    @include respond(phone) {
      padding: 4rem 2rem;
      display: initial;
      grid-template-rows: 1fr 1fr;
    }

    background: linear-gradient(var(--color-black), var(--color-black)),
      linear-gradient(to right, rgb(255, 74, 74), purple);
    border: 5px solid transparent;
    background-repeat: no-repeat;
    background-origin: padding-box, border-box;
  }

  .wrapper--rounded {
    border-radius: 1rem;
    border-width: 10px;
    position: relative;

    &::before {
      content: "";
      position: absolute;
      top: -4px;
      bottom: -5px;
      left: -5px;
      right: -5px;
      border: 6px solid var(--color-black);
      border-radius: 0.8rem;
    }
  }
}
</style>