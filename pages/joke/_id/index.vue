<template>
    <div>
        <navbar />
        <h1>
        {{this.joke}}
        </h1>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    data() {
        return {
            joke: {}
        }
    },
    async created() {
    const config = {
      headers: {
        Accept: "application/json",
      },
    };
    const jokes = await axios.get(`https://icanhazdadjoke.com/j/${this.$route.params.id}`, config);
    this.joke = jokes.data.joke;
    console.log(this.joke);
  },
}
</script>

<style>

</style>