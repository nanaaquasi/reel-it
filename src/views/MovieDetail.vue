<template>
  <div class="details">
    <Header />
    <Showcase />
    <Content />
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/MovieDetails/Header";
import Showcase from "@/components/MovieDetails/Showcase";
import Content from "@/components/MovieDetails/Content";
import Footer from "@/components/MovieDetails/Footer";

import store from "../store";

export default {
  name: "MovieDetail",
  components: {
    Header,
    Showcase,
    Content,
    Footer
  },
  beforeRouteEnter(to, from, next) {
    store.dispatch("GET_MOVIE_DETAIL", to.params.id);
    next();
  }
};
</script>

<style lang="scss" scoped>
@import "../scss/mixins.scss";
.details {
  max-width: 100%;
  max-height: 100%;
  display: grid;
  position: relative;
  grid-template-columns: 1fr;
  grid-template-rows: 10rem max-content 1fr 10rem;
  background-image: url(../assets/main_bg.png);

  @include respond(phone) {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 10rem max-content 1fr;
  }
}
</style>