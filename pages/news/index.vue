<template>
  <div>
    <navbar />
    <loader v-if="!this.$store.state.status" />

    <p v-for="(data, index) in allData" :key="index">
      Title: {{ data.title }} <br />
      description: {{ data.description }} <br />
      Date: {{ data.pubDate }}
    </p>
    <br />
  </div>
</template>

<script>
import axios from "axios";
import { mapState, mapGetters, mapActions, mapMutations } from "vuex";

export default {
  data() {
    return {
      title: null,
      description: null,
      date: null,
      allData: [],
      loaded: false,
    };
  },  
  async created() {
    try {
      this.checkStatus(false);

      const data = await axios(
        "https://newsdata.io/api/1/news?apikey=pub_6643dd8e1f6d808830638348d3e9d6d116a1&q=news&country=in&language=en&category=science,sports,technology "
      );
      this.allData = data.data.results;
      // this.$store.state.status = data.data.status
      this.loaded = true;
      this.checkStatus(true);
    } catch (error) {
      console.log(error);
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
