<template>
  <div class="container">
    <Header />
    <Content />
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/Header";
import Content from "@/components/Content";
import Footer from "@/components/Footer";

export default {
  name: "home",
  components: {
    Header,
    Content,
    Footer
  }
};
</script>

<style lang="scss" scoped>
@import "../scss/mixins.scss";

.container {
  max-width: 100%;
  max-height: 100%;
  display: grid;

  grid-template-rows: 8rem 3fr 8rem;
  grid-template-columns: 15rem 2fr 15rem;
  grid-template-areas:
    "header header header"
    ".. content .."
    "footer footer footer";
  grid-row-gap: 2rem;

  @include respond(tab-land) {
    grid-template-rows: 8rem 1fr 8rem;
    grid-template-columns: 10rem 3fr 10rem;
  }

  @include respond(tab-port) {
    grid-template-rows: 8rem 1fr 8rem;
    grid-template-columns: 5rem 3fr 5rem;
  }

  @include respond(phone) {
    grid-template-rows: 7rem 1fr 7rem;
    grid-template-columns: 1rem 3fr 1rem;
  }

  // margin: 0 auto;
}
</style>
