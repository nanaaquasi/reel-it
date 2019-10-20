<template>
  <div class="showcase" v-if="movie">
    <div class="poster">
      <div class="poster__img--box">
        <img
          v-bind:src="`https://image.tmdb.org/t/p/w500/${movie.poster_path}`"
          alt="Poster Image"
          class="poster__img"
        />
      </div>
    </div>
    <div class="info">
      <div class="info__title">
        <h1 class="info__title--main">{{movie.title}}</h1>
        <h3 class="info__title--year">({{movie.release_date | getYear}})</h3>
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
          <h4 class="language__title">Original Language</h4>
          <p class="language__info">{{movie.original_language | getLang}}</p>
        </div>
        <div class="runtime">
          <h4>Runtime</h4>
          <p class="runtime__info">{{movie.runtime}} mins</p>
        </div>
      </div>
      <!-- <div class="video" v-if="video">
        <iframe
          width="520"
          height="240"
          :src="`https://www.youtube.com/watch?v=${video.key}`"
          class="trailer"
        ></iframe>
      </div>-->
      <iframe
        v-if="video"
        width="320"
        height="240"
        :src="`https://www.youtube.com/embed/${video.key}?autoplay=0`"
        class="trailer"
      ></iframe>
    </div>
    <div class="overview">
      <div class="overview__info">
        <h3>Overview</h3>
        <p class="movie_plot">{{movie.overview | truncate}}</p>
      </div>
      <div class="featured">
        <h3 class="featured__crew-text">Featured Crew</h3>
        <div class="featured__crew-members">
          <div v-for="(crew, index) in crews" :key="index">
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
      if (!this.trailers) return;

      return this.trailers.find(video => {
        return video.type === "Trailer";
      });
    }
  },
  mounted() {
    return this.movie;
    console.lo("Video", this.video);
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
.showcase {
  color: white;
  //   background: aliceblue;
  background: linear-gradient(
    to right,
    rgba(44, 59, 58, 0.9),
    rgba(41, 73, 61, 0.9)
  );
  padding: 4rem;
  display: grid;

  grid-template-columns: 1fr 2fr;
  grid-column-gap: 1rem;
  grid-template-rows: max-content 1fr;

  grid-template-areas:
    "poster info"
    "poster overview";

  @include respond(tab-port) {
    display: grid;

    grid-template-columns: 1fr 2.2fr;
    grid-template-rows: max-content max-content;

    grid-template-areas:
      "poster info"
      "poster overview";
  }

  @include respond(phone) {
    display: grid;

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

    &__img {
      width: 100%;
      object-fit: cover;
      &--box {
        // width: 35rem;
        align-self: flex-end;
        // @include absCenter;
        object-fit: cover;
      }
    }
  }

  .info {
    grid-area: info;
    padding: 0 2rem;

    display: flex;
    flex-direction: column;
    justify-content: center;

    &__title {
      display: flex;
      align-content: center;
      align-items: center;

      &--main {
        font-size: 3.2rem;
        margin-right: 1rem;
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
    margin-top: 1.5rem;

    display: flex;

    flex-direction: column;

    .featured {
      margin-top: 2rem;

      &__crew {
        &-text {
          margin-bottom: 1rem;
        }
        &-members {
          display: flex;

          justify-content: space-between;
          flex-wrap: wrap;

          div {
            &:last-child {
              margin-right: 5rem;
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

    &::after {
      content: "";
      position: absolute;
      width: 6.4rem;
      height: 6.4rem;
      bottom: 0.3rem;
      left: 0.3rem;
      border: 0.8rem solid var(--color-primary);
      border-radius: 100%;
    }

    .score {
      position: absolute;
      font-size: 1.8rem;
      font-weight: 800;
      color: var(--bg-white);
      top: 2.2rem;
      left: 2.1rem;
    }
  }
}
</style>