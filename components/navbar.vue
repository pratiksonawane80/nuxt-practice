<template>
  <div>
    <div class="container" style="display: flex">
      <NuxtLink to="/">TO DO LIST</NuxtLink>

      <NuxtLink to="/news">NEWS</NuxtLink>

      <NuxtLink to="/joke">JOKES</NuxtLink>  
    </div>
  </div>
</template>

<style>
.container {
  justify-content: space-around;
}
.container p {
  display: flex;
}
</style>

