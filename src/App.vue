<template>
  <div id="app">
    <div class="container">
      <router-view />
    </div>
  </div>
</template>

<script>
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Nunito:400,600,700,800,900&display=swap");

:root {
  --main-text-color: #eafffe;
  --color-primary: #2aa8a4;
  --color-black: #000f27;
}

* {
  &::before,
  &::after {
    box-sizing: inherit;
    margin: 0;
    padding: 0;
  }
}

html {
  font-size: 62.5%;
  line-height: 1.8rem;
}

body {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  font-family: "Nunito", sans-serif;
  font-size: 1.6rem;
  font-weight: 400;
  color: var(--main-text-color);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-image: url(./assets/main_bg.png);
  overflow: hidden;
}
</style>
