<template>
  <div>
    <navbar />
    <loader v-if="!this.$store.state.status" />

    <div>
      <joke
        class="joke"
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
import { mapState, mapGetters, mapActions, mapMutations } from "vuex";
import loader from "../../components/loader.vue";
import joke from "../../components/joke.vue";
export default {
  components: {
    joke,
    loader,
  },
  data() {
    return {
      jokes: [],
      loaded: false,
      // status: null,
    };
  },

  computed: {
    // status() {
    //   return this.$store.state.status;
    // },
  },

  mounted() {},

  async created() {
    const config = {
      headers: {
        Accept: "application/json",
      },
    };

    try {
      this.checkStatus(false);
      const jokes = await axios.get(
        "https://icanhazdadjoke.com/search",
        config
      );
      this.jokes = jokes.data.results;
      this.loaded = true;
      this.status = jokes.data.status;
      this.checkStatus(true);

  } catch (e) {
      console.log(e);
      this.loaded = true;
      this.checkStatus(true);
    }
  },

  methods: {
    ...mapMutations({
      checkStatus: "checkStatus",
    }),
  },
};
</script>

<style>
.joke {
  text-decoration: none;
}
</style>
