<template>
<div class="filter_box">
    <div class="form_group">
      <label for="genre" class="filter_type">Genre</label>
      <input type="text" class="genre" />
    </div>

    <div class="form_group">
      <label for="genre" class="filter_type">Genre</label>
      <input type="text" class="genre" />
    </div>

    <div class="form_group">
      <label for="genre" class="filter_type">Genre</label>
      <input type="text" class="genre" />
    </div>

    <div class="form_group">
      <label for="genre" class="filter_type">Genre</label>
      <input type="text" class="genre" />
    </div>
  
</div>

</template>

<script>
export default {
  name: "Filter"
};
</script>

<style lang="scss" scoped>

.filter_box {
  grid-column: 1 / 2;
  width: 100%;
  display: grid;

  z-index: 10000;

  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(5, 1fr);
  background: rgb(204, 196, 255);
}
</style>