<template>
  <section>
    <div class="reviews wrapper--rounded" v-if="review">
      <div class="title">
        <h4>A review by {{review.author}}</h4>
      </div>
      <div class="review">
        <p>"{{review.content | truncate}}" Read More</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Reviews",
  computed: {
    review() {
      if (!this.$store.getters.reviews) return;
      return this.$store.getters.reviews[0];
    }
  },
  filters: {
    truncate(str) {
      if (!str) return;
      if (str.length <= 200) {
        return str;
      }

      return `${str.slice(0, 400)} ...`;
    }
  }
};
</script>

<style lang="scss" scoped>
.reviews {
  grid-area: reviews;
  padding: 4rem;
  margin-right: 5rem;

  display: flex;
  flex-direction: column;

  background: linear-gradient(var(--color-black), var(--color-black)),
    linear-gradient(to right, rgb(74, 255, 255), rgb(0, 128, 111));
  border: 5px solid transparent;
  background-repeat: no-repeat;
  background-origin: padding-box, border-box;

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

  .title {
    // padding: auto;
    // background: orangered;
    font-size: 2.2rem;
    font-weight: bold;
    margin-bottom: 1.5rem;
  }

  .review {
    // padding: 4rem;
    // background: greenyellow;
    color: rgb(157, 187, 183);
  }
}
</style>