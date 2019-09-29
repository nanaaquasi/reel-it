<template>
  <section class="movie">
    <div class="movie_poster">
      <div class="image_box">
        <img src="../assets/poster.jpg" alt class="poster" />
      </div>
    </div>
    <div class="movie_info">
      <div class="movie_info--title">
        <h2>Blade Runner 2049</h2>
        <h3 class="movie_year">( 2017 )</h3>
      </div>
      <div class="movie_info--ratings">
        <p>
          IMBD
          <span class="score">8 / 10</span> R.T
          <span class="score">91%</span> Fantasy/Mystery 2hr44min
        </p>
      </div>
      <div class="movie_info--details">
        <p
          class="plot"
        >Officer K (Ryan Gosling), a new blade runner for the Los Angeles Police Department, unearths a long-buried secret that has the potential to plunge what's left of society into chaos. His discovery leads him on a quest to find Rick Deckard (Harrison Ford), a former blade runner...</p>
      </div>
      <div class="movie_info--btn-actions">
        <button class="btn btn-primary">Watch Now</button>
        <button class="btn btn-secondary">More info</button>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "MovieResult"
};
</script>

<style lang="scss" scoped>
.movie {
  grid-column: 2/3;

  display: grid;
  grid-template-columns: min-content 1fr;

  &_poster {
    align-self: center;

    .image_box {
      width: 100%;

      .poster {
        width: 26.5rem;
      }
    }
  }

  &_info {
    // background: green;
    padding: 0.5rem 3rem;
    display: grid;

    grid-template-columns: 100%;
    grid-template-rows: 2rem 1.5rem repeat(2, min-content);
    grid-row-gap: 1.6rem;

    &--title {
      font-size: 2.4rem;
      font-weight: 700;
      margin-top: 2.2rem;

      display: flex;
      align-content: center;
      align-items: center;

      .movie_year {
        font-size: 2rem;
        font-weight: 500;
        align-self: center;

        margin-left: 1rem;
      }
    }

    &--ratings {
      font-size: 2.2rem;
      font-weight: 600;
      margin-bottom: 3rem;

      .score {
        font-weight: 800;
        color: var(--color-primary);
      }
    }

    &--details {
      font-size: 2.2rem;
      align-self: center;
      margin-top: 2rem;

      p {
        //    line-height: 2rem !important;
      }
    }

    &--btn-actions {
      display: flex;

      align-content: center;

      .btn {
        padding: 1.5rem 3rem;
        border: none;
        outline: none;
        font-family: inherit;
        font-size: 2.4rem;
        font-weight: 700;
        border-radius: 50rem;
        cursor: pointer;

        &-primary {
          background-image: linear-gradient(
            90deg,
            rgba(0, 255, 226, 1) 0%,
            rgba(53, 207, 187, 1) 44%,
            rgba(92, 228, 178, 1) 73%
          );
          color: var(--color-black);
        }

        &-secondary {
          background: transparent;
          color: var(--main-text-color);
          border: 2px solid var(--color-primary);

          margin-left: 1.8rem;
        }
      }
    }
  }
}
</style>