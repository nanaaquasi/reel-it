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
</style>
