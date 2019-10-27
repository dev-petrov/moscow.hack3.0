<template>
  <div class="row mt-2 bg-light p-2 rounded">
    <div class="col" v-for="img in data" :key="img">
      <img  :src="img" class="w-100 h-100" />
    </div>
  </div>
</template>

<script>
export default {
  name: "adv",
  computed: {
    data: function() {
      return [
          "/kinomax.jpg", 
          "/chaika.jpg",
          "/slenergy.jpg",
          "/groza.jpg",
          "/katok.jpg",
          "/katok2.jpg",
        ];
    }
  }
};
</script>

<style>
</style>