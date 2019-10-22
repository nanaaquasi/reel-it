<template>
  <div class="main_nav">
    <div class="logo_box">
      <div class="logo">
        <a href="/">
          <img src="../../assets/reel-it_logo.png" alt="Brand Logo" class="logo_img" />
        </a>
      </div>
    </div>
    <ul class="nav">
      <li>
        <router-link to="/">Randomiser</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Header",
  components: {}
};
</script>

<style lang="scss" scoped>
@import "../../scss/mixins.scss";

.main_nav {
  display: flex;
  align-items: center;
  background: #020b1a;

  // justify-content: center;

  .logo_box {
    width: 16rem;
    margin-left: 2rem;
    // margin-top: 2rem;

    @include respond(phone) {
      justify-self: center;
    }
  }

  .logo {
    img {
      width: 100%;
      // height: 12rem;
    }
  }

  ul {
    list-style: none;

    li {
      a {
        color: white;
        text-decoration: none;
        font-weight: 600;
        font-family: inherit;
        font-size: 1.8rem;
      }

      margin-bottom: 1.8rem;
      margin-left: 1rem;

      &:hover {
        border-bottom: 2px solid var(--color-primary);
      }
    }
  }
}
</style>