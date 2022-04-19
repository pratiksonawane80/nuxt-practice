<template>
  <nuxt-link :to="'joke/' + id"
    ><div class="joke">{{ joke }}</div></nuxt-link
  >
</template>

<script>
export default {
  name: "joke",
  props: ["joke", "id"],
};
</script>

<style scoped>
.joke {
  padding: 1rem;
  border: 1px dotted #ccc;
  margin: 1rem 0;
}
</style>
