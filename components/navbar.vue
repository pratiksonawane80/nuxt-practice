<template>
  <div>
    <div class="container" style="display: flex">
      <!-- <div>{{$store.state.name}}</div>
      <div v-html='$store.state.name'></div> -->
      <!-- <div>{{$store.state.counter}}</div> -->
      <!-- <div>{{name}}</div> -->

      <!-- <button @click="incCounter()">+</button> -->
      <NuxtLink to="/">TO DO LIST</NuxtLink>

      <NuxtLink to="/news">NEWS</NuxtLink>

      <NuxtLink to="/joke">JOKES</NuxtLink>  
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: null
    }
  },
  methods: {
    incCounter() {
      this.name = this.$store.state.name  
    }
  }
}
</script>

<style>
.container {
  justify-content: space-around;
}
.container p {
  display: flex;
}
</style>

