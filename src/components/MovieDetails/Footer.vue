<template>
  <footer class="main_footer">
    <p class="footer_text">
      Copyright &copy; 2019. Made with &hearts; by
      <a href="#" class="github_link">Nana Aquasi</a>
    </p>
  </footer>
</template>

<script>
export default {
  name: "Footer"
};
</script>

<style lang="scss" scoped>
@import "../../scss/mixins.scss";

.main_footer {
  // height: 4rem;
  width: 100%;
  padding: 4rem;
  display: fixed;
  align-self: center;
  justify-self: center;
  justify-items: center;
  background: var(--color-black);
  // background: whitesmoke;

  .footer_text {
    font-size: 1.8rem;
    font-weight: 600;
    text-align: center;
    // line-height: 1;

    @include respond(phone) {
      font-size: 1.5rem;
    }

    a {
      text-decoration: none !important;
      color: var(--main-text-color);
      position: relative;

      &::after {
        content: "";
        width: 100%;
        height: 0.8rem;
        background-image: linear-gradient(
          90deg,
          rgba(0, 255, 226, 1) 0%,
          rgba(53, 207, 187, 1) 44%,
          rgba(92, 228, 178, 1) 73%
        );
        z-index: 10;
        position: absolute;
        left: 0;
        bottom: -0.5rem;
        //   right: 0;
      }
    }
  }
}
</style>