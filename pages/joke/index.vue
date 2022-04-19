<template>
  <div>
    <navbar />
    <loader v-if="showLoading"/>

    <div>
      <joke class="joke"
        v-for="joke in jokes"
        :key="joke.id"
        :id="joke.id"
        :joke="joke.joke"
      >
      </joke>
    </div>
  </div>
</template>

<script>
import axios from "axios"; 
import {mapState, mapGetters, mapActions, mapMutations} from 'vuex'
import loader from '../../components/loader.vue'
import joke from '../../components/joke.vue'
export default {
    components: {
        joke,
        loader,
    },
  data() {
    return {
      jokes: [],
    };
  },

  computed: {
    ...mapState({
      showLoading: state => state.showLoading
    })
  },
  

  async created() {
    
    const config = {
      headers: {
        Accept: "application/json",
      },
    };
    const jokes = await axios.get("https://icanhazdadjoke.com/search", config);
    this.jokes = jokes.data.results;
    console.log(this.jokes);
      },
};
</script>

<style>
    .joke {
    text-decoration: none;
  }
</style>
