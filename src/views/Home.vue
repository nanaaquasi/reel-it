<template>
  <div class="container">
    <Header/>
    <Content/>
    <Footer/>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header'
import Content from '@/components/Content'
import Footer from '@/components/Footer'

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
    width: 100%;
    height: 100%;
    display: grid;

    grid-template-rows: auto 1fr auto;
    grid-template-columns: 100%;
    grid-row-gap: 2rem;
  }
</style>
