<template>
  <section class="content">
    <div class="heading">
      <p class="heading_main">
        Don’t know which movie to binge watch ?
        <span class="thinking"></span> Take a
        <span class="underline">spin</span> lets make a choice for you
      </p>
    </div>
    <div class="main_content wrapper--rounded">
      <Filter />
      <MovieResult />
    </div>
  </section>
</template>

<script>
import Filter from "@/components/Filter";
import MovieResult from "@/components/MovieResult";

export default {
  name: "Content",
  components: {
    Filter,
    MovieResult
  }
};
</script>

<style lang="scss" scoped>
.content {
  //   background: white;
  width: 80vw;
  margin-bottom: 2rem;
  //   height: 100%
  align-self: center;
  justify-self: center;
  display: grid;

  grid-template-rows: 4rem 1fr;

  .heading {
    align-self: center;
    justify-self: center;

    // position: relative;
    display: flex;

    &_main {
      font-size: 2.8rem;
      font-weight: 600;
      //   margin-bottom: 4px;

      &::before {
        content: url(../assets/puzzled.png);
        align-self: center;
        justify-self: center;
        margin-top: 3px;
        transform: scale(0.4);
        // display: inline;
      }

      .underline {
        position: relative;
        z-index: 11;

        &::after {
          content: "";
          width: 100%;
          height: 1.2rem;
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
        //   border-bottom: .4rem solid var(--main-text-color);
      }
    }
  }

  .main_content {
    width: 90%;
    // margin: auto;
    display: grid;
    padding: 6rem;

    grid-template-columns: 50rem 1fr;

    margin-top: 4rem;
    background: linear-gradient(var(--color-black), var(--color-black)),
      linear-gradient(to right, rgb(255, 74, 74), purple);
    border: 5px solid transparent;
    background-repeat: no-repeat;
    background-origin: padding-box, border-box;
  }

  .wrapper--rounded {
    border-radius: 1rem;
    border-width: 10px;
    position: relative;

    &::before {
      content: "";
      position: absolute;
      top: -4px;
      bottom: -5px;
      left: -5px;
      right: -5px;
      border: 6px solid var(--color-black);
      border-radius: 0.8rem;
    }
  }
}
</style>