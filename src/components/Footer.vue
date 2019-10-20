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
.main_footer {
  // height: 4rem;
  grid-area: footer;
  align-self: center;
  justify-self: center;
  // background: whitesmoke;

  .footer_text {
    font-size: 1.8rem;
    font-weight: 600;
    // line-height: 1;

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