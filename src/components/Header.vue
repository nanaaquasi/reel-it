<template>
  <div class="main_nav">
    <div class="logo_box">
      <div class="logo">
        <img src="../assets/reel-it_logo.png" alt="Brand Logo" class="logo_img" />
      </div>
    </div>
    <!-- <Search/> -->
  </div>
</template>

<script>
import Search from "@/components/Search";
export default {
  name: "Header",
  components: {
    Search
  }
};
</script>

<style lang="scss" scoped>
@import "../scss/mixins.scss";

.main_nav {
  grid-area: header;
  display: flex;

  justify-content: space-between;
  align-content: center;

  @include respond(phone) {
    justify-content: center;
  }

  .logo_box {
    width: 100%;
    height: 100%;
    margin-left: 2rem;

    @include respond(phone) {
      justify-self: center;
    }
  }

  .logo {
    img {
      width: 14rem;
      height: 8rem;
    }
  }
}
</style>