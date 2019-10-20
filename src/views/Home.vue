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
.container {
  max-width: 100%;
  max-height: 100%;
  display: grid;

  grid-template-rows: 8rem 3fr 8rem;
  grid-template-columns: 8rem 3fr 8rem;
  grid-template-areas:
    "header header header"
    ".. content .."
    "footer footer footer";
  grid-row-gap: 2rem;

  // margin: 0 auto;
}
</style>
