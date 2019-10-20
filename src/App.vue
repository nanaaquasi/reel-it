<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
</script>

<style src="vue-select/dist/vue-select.css"></style>

<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,600,700,900&display=swap");

@import "./scss/vue-select.scss";
@import "./scss/mixins.scss";

:root {
  --main-text-color: #eafffe;
  --color-primary: #2aa8a4;
  --color-black: #000f27;
}

*,
*::before,
*::after {
  box-sizing: inherit;
  margin: 0;
  padding: 0;
}

html {
  font-size: 62.5%;
  line-height: 1.5;

  @include respond(tab-land) {
    //width < 1200
    font-size: 56.25%; //1rem = 9px 9/16*100
  }

  @include respond(tab-port) {
    //width < 900
    font-size: 58%; // 1 rem = 8px 8/16*100 = 50%
  }

  @include respond(big-desktop) {
    font-size: 75%; // 1 rem = 12px 12/16 * 100 = 75%
  }
}

body {
  max-width: 100%;
  max-height: 100%;
  box-sizing: border-box;
  font-family: "Source Sans Pro", "sans-serif";
  font-size: 1.6rem;
  font-weight: 400;
  color: var(--main-text-color);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-image: url(./assets/main_bg.png);
  background-repeat: no-repeat;
  // overflow-y: hidden;
}

select .select-css {
  border: 2px solid orchid !important;
}

.vs--single .vs__selected {
  color: rgb(209, 209, 209);
}

.vs--searchable .vs__dropdown-toggle {
  border: 1px solid rgba(227, 255, 255, 0.382) !important;
}
</style>
