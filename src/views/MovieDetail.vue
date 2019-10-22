<template>
  <div class="details">
    <Header />
    <Showcase />
    <Content />
  </div>
</template>

<script>
import Header from "@/components/MovieDetails/Header";
import Showcase from "@/components/MovieDetails/Showcase";
import Content from "@/components/MovieDetails/Content";
import store from "../store";

export default {
  name: "MovieDetail",
  components: {
    Header,
    Showcase,
    Content
  },
  beforeRouteEnter(to, from, next) {
    store.dispatch("GET_MOVIE_DETAIL", to.params.id);
    next();
  }
};
</script>

<style lang="scss" scoped>
.details {
  max-width: 100%;
  max-height: 100%;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 10rem 1fr 1fr;
}
</style>