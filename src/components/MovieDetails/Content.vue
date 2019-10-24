<template>
  <div class="content">
    <Cast />
    <!-- <Media /> -->
    <Reviews />
    <Recommend />
  </div>
</template>

<script>
import Cast from "@/components/MovieDetails/Cast";
import Media from "@/components/MovieDetails/Media";
import Reviews from "@/components/MovieDetails/Reviews";
import Recommend from "@/components/MovieDetails/Recommend";
import { mapGetters } from "vuex";

export default {
  name: "Content",
  components: {
    Cast,
    Media,
    Reviews,
    Recommend
  },
  computed: {
    ...mapGetters[("movieResults", "genres")]
  }
};
</script>

<style lang="scss" scoped>
.content {
  display: grid;
  grid-template-rows: repeat(3, max-content);
  grid-template-areas:
    "cast"
    "reviews"
    "recommend";
  padding: 4rem;
  background-size: auto;
  overflow: hidden;
}
</style>