<template>
    <div>
        <navbar />
        <!-- <p>
            {{title}} <br>
            {{description}} <br>
            {{date}}
        </p> -->

        <p v-for="(data, index) in allData" :key="index">Title: {{data.title}} <br> description: {{data.description}} <br> Date: {{data.pubDate}}</p> <br>
        <!-- <p v-for="(data, index) in allData" :key="index">{{data.description}}</p> <br>
        <p v-for="(data, index) in allData" :key="index">{{data.pubDate}}</p> -->
    </div>
</template>

<script>
import axios from 'axios'

export default {
    async created() {
    const data = await axios("https://newsdata.io/api/1/news?apikey=pub_6643dd8e1f6d808830638348d3e9d6d116a1&q=news&country=in&language=en&category=science,sports,technology ")
    this.allData = data.data.results

    },
  data () {
      return {
          title: null,
          description: null,
          date: null,
          allData: []
      }
  }
}
</script>