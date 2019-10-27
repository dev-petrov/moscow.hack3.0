<template>
  <div>
   
      <s-list class="mb-3"></s-list>
    <div class="row" v-if="news">
      <div class="col-3 mb-2" v-for="n in news" v-bind:key="n">
        <news-card :title="n.title" :body="n.body" :link="n.link" :img="n.img"></news-card>
      </div>
    </div>
    <adv></adv>
  </div>
</template>

<script>
import NewsCard from "./NewsCard";
import SList from "./SubjectsList";
import Adv from './Adv'
import axios from 'axios'

export default {
  name: "news",
  components: {
    NewsCard,
    SList,
    Adv
  },
  data: function () {
    return {
        news: null
    }  
  },
  beforeMount: function () {
      var vm = this
      axios.get('/news.json').then(function (res) {
          vm.news = res.data
      })
      
  }
};
</script>

<style>
</style>