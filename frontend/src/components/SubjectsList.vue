<template>
  <div class="row">
    <router-link class="col-3" v-for="subject of data" :key="subject" :to="subject.link">
      <div class="card">
        <div class="card-header">
          <h2>{{subject.title}}</h2>
        </div>
        <img class="card-img-top" v-if="subject.img" :src="subject.img" />
        <div class="card-body">
          <p class="text-black">{{subject.description}}</p>
        </div>
      </div>
    </router-link>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "s-list",
  data: function() {
    return {
      data: {}
    };
  },
  beforeMount: function() {
    var t = this;
    axios.get("/subjects.json").then(function(response) {
      t.data = response.data;
    });
  }
};
</script>

<style scoped>
.text-black {
  color: black;
  font-family: "Times New Roman";
  font-size: 20px;
}
</style>