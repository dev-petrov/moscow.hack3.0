<template>
  <router-link :to="link">
    <div class="card h-100">
      <div class="card-header">
        <h3>{{title}}</h3>
      </div>
      <div class="card-body">
        <div v-if="img">
          <img :src="img" class="w-100"/>
        </div>
        <p class="text-black">{{body}}</p>
      </div>
    </div>
  </router-link>
</template>

<script>
export default {
  name: "news-card",
  props: {
    title: String,
    body: String,
    link: String,
    img: String
  },
  data: function(){
      return {
          
      }
  }
};
</script>

<style>
.text-black {
  color: black;
  font-family:serif;
  font-size: 20px
}
</style>