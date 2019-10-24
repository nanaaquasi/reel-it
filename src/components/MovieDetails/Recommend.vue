<template>
  <div class="main">
    <h3 v-if="related">Users also watched</h3>
    <div v-if="related" class="recommend">
      <div class="recommend__profile" v-for="(movie, index) in related" :key="index">
        <div class="recommend__profile--image" @click="gotoMovie(movie.id)">
          <img
            v-bind:src="`https://image.tmdb.org/t/p/w500/${movie.poster_path}`"
            alt="Movie Poster"
          />
        </div>
        <div class="recommend__profile--details">
          <div class="name">
            <h4 @click="gotoMovie(movie.id)">{{movie.title}}</h4>
          </div>
          <div class="character">
            <p>{{movie.vote_average}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Recommendations",
  computed: {
    related() {
      if (!this.$store.getters.recommendations) return;

      return this.$store.getters.recommendations.slice(0, 8);
    }
  },
  methods: {
    gotoMovie(id) {
      let routeData = this.$router.resolve({ name: "movie", params: { id } });
      window.open(routeData.href, "_parent");
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../scss/mixins.scss";
.main {
  padding: 4rem;
  margin-top: 2rem;

  @include respond(phone) {
    padding: 1.5rem;
  }
}
.recommend {
  grid-area: recommend;
  max-width: 60vw;
  overflow-x: scroll;

  @include respond(phone) {
    max-width: 80vw;
  }

  display: flex;
  // flex-wrap: wrap;
  margin-top: 2rem;

  &__profile {
    display: flex;

    flex-direction: column;
    margin-bottom: 2rem;

    &:not(:last-child) {
      margin-right: 2rem;
    }

    // border: 1px solid var(--color-primary);
    &--image {
      width: 15rem;
      border-bottom: 2px solid darkcyan;

      @include respond(tab-port) {
        width: 10rem;
      }

      img {
        width: 100%;
        object-fit: cover;
        cursor: pointer;
      }
    }
    &--details {
      // width: max-content;
      // word-wrap: break-word;
      display: flex;
      justify-content: space-between;
      .name {
        word-wrap: break-word;

        h4 {
          max-width: 20rem;
          max-height: max-content;
          overflow-wrap: break-word;
          word-wrap: break-word;
          hyphens: auto;
          cursor: pointer;
        }
      }
    }
  }
}
</style>