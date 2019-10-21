<template>
  <div class="showcase" v-if="movie">
    <div class="poster">
      <div class="poster__img--box">
        <img
          v-bind:src="`https://image.tmdb.org/t/p/w500/${movie.poster_path}`"
          alt="Poster Image"
          class="poster"
        />
      </div>
    </div>
    <div class="info">
      <div class="info__title">
        <h3 class="info__title--main">{{movie.title}} ({{movie.release_date | getYear}})</h3>
      </div>
      <div class="info__stats">
        <div class="total_score">
          <span class="score">{{movie.vote_average}}</span>
        </div>
        <div class="user__score">
          <h3>User</h3>
          <h3>Score</h3>
        </div>
        <div class="language">
          <h4 class="language__title">Language</h4>
          <p class="language__info">{{movie.original_language | getLang}}</p>
        </div>
        <div class="runtime">
          <h4>Runtime</h4>
          <p class="runtime__info">{{movie.runtime}} mins</p>
        </div>
      </div>
      <div class="video">
        <iframe
          v-if="video"
          width="100%"
          height="100%"
          id="trailer"
          allowfullscreen="true"
          :src="`https://www.youtube.com/embed/${video.key}?autoplay=0`"
          class="trailer"
        ></iframe>
      </div>
    </div>
    <div class="overview">
      <div class="overview__info">
        <h3 class="overview--text">Overview</h3>
        <p class="movie_plot">{{movie.overview | truncate}}</p>
      </div>
      <div class="featured">
        <h3 class="featured__crew-text">Featured Crew</h3>
        <div class="featured__crew-members">
          <div v-for="(crew, index) in crews" :key="index" class="crew">
            <h3>{{crew.name}}</h3>
            <p>{{crew.job}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import moment from "moment";
// const ISO6391 = require("iso-639-1");
import ISO6391 from "iso-639-1";
export default {
  name: "Showcase",
  computed: {
    ...mapGetters({
      movie: "movieResults",
      crewMembers: "crews",
      trailers: "videos"
    }),
    crews() {
      if (!this.crewMembers) {
        return;
      }

      return this.crewMembers.slice(0, 4);
    },
    video() {
      if (!this.$store.getters.videos) return;

      // return this.trailers.find(video => {
      //   return video.type === "Trailer";
      // });
      return this.$store.getters.videos[0];
    }
  },
  mounted() {
    // return this.movie;
    console.log("Video", this.video);
  },

  filters: {
    getDuration(value) {
      if (!value) return "";
      let h = (value / 60) | 0,
        m = value % 60 | 0;

      return moment
        .utc()
        .hours(h)
        .minutes(m)
        .format(`h:mm`);
    },
    getLang(lang) {
      if (!lang) return "English";
      return ISO6391.getName(lang);
    },
    truncate(str) {
      if (!str) return;
      if (str.length <= 200) {
        return str;
      }

      return `${str.slice(0, 200)} ...`;
    },
    getYear(val) {
      if (!val) {
        return;
      }
      return val.split("-")[0];
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../scss/mixins.scss";

.poster__img--box {
  width: 30vw;
  align-self: center;
  img {
    width: 100%;
    object-fit: contain;
  }
}

.video {
  width: 50vw;
  height: 40vh;

  @include respond(tab-port) {
    width: 60vw;
    height: 35vh;
  }

  @include respond(phone) {
    width: 100%;
    height: 20vh;
  }
}
.showcase {
  color: white;
  //   background: aliceblue;
  background: linear-gradient(
    to right,
    rgba(44, 59, 58, 0.5),
    rgba(41, 73, 61, 0.5)
  );
  padding: 4rem;
  display: grid;

  grid-template-columns: 1fr 2.5fr;
  grid-column-gap: 1rem;
  grid-template-rows: max-content 1fr;

  grid-template-areas:
    "poster info"
    "poster overview";

  @include respond(tab-port) {
    display: grid;
    padding: 2rem;

    grid-template-columns: 1fr 2fr;
    grid-template-rows: max-content 1fr;

    grid-template-areas:
      "poster info"
      "overview overview";
  }

  @include respond(phone) {
    display: grid;
    padding: 1rem;

    grid-template-columns: 1fr 2.2fr;
    grid-template-rows: max-content max-content;

    grid-template-areas:
      "poster info"
      "overview overview";
  }

  .poster {
    grid-area: poster;
    // background: orangered;
    // padding: auto;

    // position: relative;

    align-self: center;
    justify-self: center;
    @include respond(tab-port) {
      grid-area: poster;
      justify-self: center;
    }

    @include respond(phone) {
      grid-area: poster;
      justify-self: center;
    }
  }

  .info {
    grid-area: info;
    padding: 0 2rem;

    display: flex;
    flex-direction: column;
    justify-content: center;
    flex-wrap: wrap;

    @include respond(tab-port) {
      grid-area: info;
      padding: 0;
    }

    @include respond(phone) {
      grid-area: info;
      padding: 0;
    }

    &__title {
      display: flex;
      align-content: center;
      align-items: center;
      flex-wrap: wrap;

      &--main {
        font-size: 3rem;
        flex-wrap: wrap;

        margin-right: 1rem;
        margin-bottom: 1.2rem;

        @include respond(tab-port) {
          font-size: 2.3rem;
          margin-bottom: 0.7rem;
        }
        @include respond(phone) {
          font-size: 1.6rem;
          margin-bottom: 0.7rem;
        }
      }

      &--year {
        font-size: 2.6rem;
        color: rgb(216, 216, 216);
      }
    }

    .trailer {
      margin-top: 1.5rem;
      border: 4px solid var(--color-primary);
      border-radius: 1rem;
      outline: none;
      object-fit: contain;

      @include respond(phone) {
        margin-top: 1rem;
        border: 2px solid var(--color-primary);
      }
    }

    &__stats {
      display: flex;

      align-items: center;

      .user__score {
        display: flex;
        flex-direction: column;
        margin-left: 0.7rem !important;

        h3 {
          font-size: 1.5rem;
          &:not(:first-child) {
            margin-top: -0.7rem;
          }
        }
      }

      .language {
        // margin-left: 3rem;
        p {
          font-size: 1.5rem;
          font-family: inherit;
        }
      }

      .runtime {
        p {
          font-size: 1.5rem;
          font-family: inherit;
        }
      }

      div {
        &:not(:first-child) {
          margin-left: 2rem;
        }
      }
    }
  }

  .overview {
    grid-area: overview;
    padding: 0 2rem;
    margin-top: 3.5rem;

    display: flex;

    flex-direction: column;
    // color: white;

    .overview--text {
      color: var(--color-primary);
    }

    @include respond(tab-port) {
      // padding: 0;
    }

    .featured {
      margin-top: 2rem;

      &__crew {
        &-text {
          margin-bottom: 0.8rem;
          color: var(--color-primary);
        }
        &-members {
          display: flex;
          // justify-content: space-between;
          flex-wrap: wrap;
          margin-bottom: 1rem;

          .crew {
            margin-bottom: 1.5rem;
            &:not(:last-child) {
              margin-right: 1rem;
            }
          }
        }
      }
    }
  }

  .total_score {
    position: relative;
    width: 7rem;
    height: 7rem;
    padding: 0.5rem;
    border-radius: 100%;
    background: var(--color-black);

    @include respond(tab-port) {
      width: 5.5rem;
      height: 5.5rem;
    }

    @include respond(phone) {
      width: 4.5rem;
      height: 4.5rem;
    }

    &::after {
      content: "";
      position: absolute;
      width: 6.4rem;
      height: 6.4rem;
      bottom: 0.3rem;
      left: 0.2rem;
      border: 0.8rem solid var(--color-primary);
      border-radius: 100%;

      @include respond(tab-port) {
        width: 5.4rem;
        height: 5.4rem;
      }

      @include respond(phone) {
        width: 4.5rem;
        height: 4.5rem;
        left: 0.1rem;
        border: 0.4px solid var(--color-primary);
      }
    }

    .score {
      position: absolute;
      font-size: 1.8rem;
      font-weight: 800;
      color: var(--bg-white);
      top: 2.2rem;
      left: 2.1rem;

      @include respond(tab-port) {
        font-size: 1.6rem;
        top: 1.4rem;
        left: 1.8rem;
      }

      @include respond(phone) {
        font-size: 1.5rem;
        top: 0.8rem;
        left: 1.4rem;
      }
    }
  }
}
</style>