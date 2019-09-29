<template>
  <div class="search">
    <form>
      <img src="../assets/search.png" alt="Search Icon" class="search_icon" />
      <input type="text" class="search_input" placeholder="search movie or tv show" />
    </form>
  </div>
</template>

<script>
export default {
  name: "Search"
};
</script>

<style lang="scss" scoped>
.search {
  align-self: center;
  //   width: 100%;

  .search_input {
    width: 35rem;
    padding: 1.5rem 4rem;
    margin-right: 13rem;
    outline: none;
    background: transparent;
    border-top: none;
    border-right: none;
    border-left: none;
    border-bottom: 4px solid var(--color-primary);
    color: var(--main-text-color);
    font-size: 3.2rem;
    font-weight: 700;

    &::-webkit-input-placeholder {
      font-size: 2.4rem !important;
      color: var(--main-text-color);
      opacity: 0.6;
    }
  }

  &_icon {
    width: 3rem;
    height: 3rem;

    align-self: center;
    margin-right: -3rem;
  }
  form {
    display: flex;

    justify-content: center;
    align-content: center;
  }
}
</style>