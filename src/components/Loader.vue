<template>
  <div class="spin">
    <div class="loader">
      <img src="../assets/spinner.svg" alt="Loader" />
      <h3>Grab some popcorn while you wait</h3>
    </div>
  </div>
</template>

<script>
export default {
  name: "Loader"
};
</script>

<style lang="scss" scoped>
.spin {
  display: flex;

  flex-direction: column;
  justify-content: center;
  align-content: center;
  // margin-bottom: 2rem;

  width: 100%;
  padding: 6rem;

  .loader {
    display: flex;

    flex-direction: column;
    justify-content: center;
    align-content: center;

    img {
      width: 6rem;
      align-self: center;
      justify-self: center;
    }

    h3 {
      text-align: center;
    }
  }
}
</style>