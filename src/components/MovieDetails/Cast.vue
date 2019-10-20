<template>
  <section class="cast">
    <h3>Top Billed Casts</h3>
    <div v-if="casts" class="members">
      <div class="cast__profile" v-for="(cast, index) in casts" :key="index">
        <div class="cast__profile--image">
          <img v-bind:src="`https://image.tmdb.org/t/p/w500/${cast.profile_path}`" alt="Cast Image" />
        </div>
        <div class="cast__profile--details">
          <div class="name">
            <h4>{{cast.name}}</h4>
          </div>
          <div class="character">
            <p>{{cast.character}}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "Cast",
  data() {
    return {};
  },
  computed: {
    ...mapGetters({ castMembers: "casts" }),
    casts() {
      if (!this.castMembers) {
        return;
      }

      return this.castMembers.slice(0, 5);
    }
  }
};
</script>

<style lang="scss" scoped>
.cast {
  grid-area: cast;
  padding: 4rem;

  h3 {
    margin-bottom: 1rem;
    font-size: 2rem;
    font-weight: bold;
  }

  .members {
    display: flex;
  }

  // justify-content: space-around;

  &__profile {
    display: flex;

    flex-direction: column;

    &:not(:last-child) {
      margin-right: 1.5rem;
    }

    // border: 1px solid var(--color-primary);
    &--image {
      width: 15rem;
      border-bottom: 2px solid darkcyan;

      img {
        width: 100%;
        object-fit: cover;
      }
    }
    &--details {
    }
  }
}
</style>