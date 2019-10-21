<template>
  <div class="media">
    <h3>Media (Videos & Posters)</h3>
    <div class="videos">
      <div class="video" v-for="(video, index) in videos" :key="index">
        <object
          v-if="video"
          width="320"
          height="180"
          :data="`https://www.youtube.com/embed/${video.key}?autoplay=0`"
          class="trailer"
        ></object>
      </div>
    </div>
    <!-- <div class="images">
      <div class="image__wrapper" v-for="(poster, index) in posters" :key="index">
        <img v-bind:src="`https://image.tmdb.org/t/p/w500/${poster.file_path}`" alt="Poster Image" />
      </div>
    </div>-->
  </div>
</template>

<script>
export default {
  name: "Media",
  computed: {
    videos() {
      if (!this.$store.getters.videos) return;

      return this.$store.getters.videos.splice(0, 6);
    },

    posters() {
      if (!this.$store.getters.posters) return;

      return this.$store.getters.posters.splice(0, 15);
    }
  }
};
</script>

<style lang="scss" scoped>
.media {
  grid-area: media;
  padding: 0 4rem;

  h3 {
    font-size: 2.4rem;
    margin-bottom: 1rem;
  }
}
.videos {
  display: flex;
  // flex-wrap: wrap;
  // border-radius: 1rem;
  max-width: 60%;
  overflow-x: scroll;
  // margin-bottom: 2rem;

  background: linear-gradient(var(--color-black), var(--color-black)),
    linear-gradient(to right, rgb(74, 255, 255), rgb(0, 128, 111));
  border: 3px solid transparent;
  background-repeat: no-repeat;
  background-origin: padding-box, border-box;

  .wrapper--rounded {
    border-radius: 2rem;
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

  .video {
    padding: 1rem;
    &:not(:first-child) {
      margin-left: 1rem;
    }

    .trailer {
      border: none;
      outline: none;
    }
  }
}

.images {
  display: flex;
  max-width: 60%;
  padding: 2rem;
  overflow-x: scroll;

  .image__wrapper {
    width: 25rem;

    &:not(:first-child) {
      margin-left: 1rem;
    }

    img {
      width: 100%;
    }
  }
}
</style>